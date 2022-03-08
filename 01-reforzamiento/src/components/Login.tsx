import { useEffect, useReducer } from 'react';

//interface 
interface AuthState {
  validando: boolean;
  token: string | null;
  username: string;
  nombre: string;
}
//estado inicial - del tipo AuthState
const initialState: AuthState = {
  validando: true,
  token: null,
  username: '',
  nombre: ''
}

type LoginPayload = {
  username: string;
  nombre: string;
}

/* tipo para asignar el action*/
type AuthAction =
  | { type: 'logout' }
  | { type: 'login', payload: LoginPayload }

// debe retornar algo igual al iniialState, AuthState en este caso (INTERFACE)
// state del tipo authState, NUNCA SE MUTA
// action del tipo authAction
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'logout':
      return {
        validando: false,
        token: null,
        nombre: '',
        username: ''
      }
    case 'login':
      const { nombre, username } = action.payload
      return {
        //...state
        validando: false,
        token: 'ABC123',
        nombre,
        username
      }

    default:
      return state;
  }
}

const Login = () => {
  /**
   * authReducer funcion retornar nuevo estado
   * initialState estado inicial
   * state regresa el estado
   * dispatch funcion para accionar
   * 
   * puedo destructurar el objeto
   */

  const [{ validando, token, username }, dispatch] = useReducer(authReducer, initialState)

  //si no lleva nada en [ ] se renderizado solamente cuando abre el screen
  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: 'logout'
      })
    }, 1500)
  }, [])

  const login = () => {
    dispatch({
      type: 'login',
      payload: {
        nombre: 'Victor',
        username: 'vikingo'
      }
    })
  }

  const logout = () => {
    dispatch({
      type: 'logout'
    })
  }

  if (validando) {
    return (
      <>
        <h3>Login</h3>
        <div className='alert alert-info'>
          Validando...
        </div>
      </>
    )
  }

  return (
    <>
      <h3>Login</h3>
      {
        (token)
          ?
          (
            <div className='alert alert-success'>
              Autenticado como: {username}
            </div>)
          :
          (
            <div className='alert alert-danger'>
              No autenticado
            </div>)

      }

      {
        (token)
          ?
          (
            <button
              className='btn btn-danger'
              onClick={logout}
            >
              Log out
            </button>
          )
          :
          (
            <button
              className='btn btn-primary'
              onClick={login}
            >
              Login
            </button>
          )
      }
    </>
  )
}

export default Login