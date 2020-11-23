import React from 'react'

const Header = () => {
  return (
    <div>
      <img
        src="https://www.galenoseguros.com.ar/seguros/images/logo.svg"
        alt=""
      />
      <h1 className=" display-4 text-white font-weight-lighter">
        Galeno Fondos
      </h1>
      <h5 className="text-white font-weight-light">
        Web App de calculo para la solicitud de fondos para ofrecimientos en
        audiencias.{' '}
      </h5>
    </div>
  )
}

export default Header
