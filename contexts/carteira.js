import React, { createContext, useState } from "react";

const CarteiraContext = createContext({});

const CarteiraProvider = ({ children }) => {

  const [valorCarteira, setValorCarteira] = useState(100)

  const handleDebitar = (valor) => {
    setValorCarteira(valorCarteira - valor)
  }

  return (
    <CarteiraContext.Provider value={{ valorCarteira, handleDebitar }}>
      {children}
    </CarteiraContext.Provider>
  )
}

export { CarteiraContext, CarteiraProvider }