import React from 'react'
import useAuth from "../../hooks/useAuth"

export default function Factura() {
  const auth = useAuth()
  console.log(auth);
  return (
    <div>
      Al acceder me debe redirigir a esta vista de factura.
    </div>
  )
}
