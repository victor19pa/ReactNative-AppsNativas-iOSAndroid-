import { useState } from "react"


export const useForm = <T extends Object>(formInitState: T) => {
  const [state, setState] = useState(formInitState)

  const onChange = <K extends Object>(value: K, campo: keyof T) => {
    setState({
      ...state,
      [campo]: value
    })
  }

  return {
    onChange,
    ...state,
    form: state
  }
}
