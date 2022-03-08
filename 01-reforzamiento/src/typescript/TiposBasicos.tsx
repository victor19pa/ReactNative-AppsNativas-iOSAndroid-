import React from "react";

const TiposBasicos = () => {

  const nombre: string | number = 'Fernando';
  const edad: number = 24;
  const estaActivo: boolean = false;

  const poderes: string[] = []

  return (
    <>
      <h3>Tipos Basicos</h3>
      {nombre}, { edad}, {(estaActivo) ? 'activo' : 'negativo'}
      <br/>
      { poderes.join(', ')}
    </>
  )
};

export default TiposBasicos;
