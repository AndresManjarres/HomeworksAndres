import React, { memo } from "react";

export const Son = memo(({ numero, increment}) => {
  console.log('again reloades...');

  return(
    <button onClick= {() => {increment(numero)}} className="botones">
      {numero}
    </button>
    )

}
)
