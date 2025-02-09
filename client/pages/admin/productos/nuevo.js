"use client"

import Head from "next/head"
import { useState } from "react"
import Navbar from "../../../components/Navbar"
import FormularioProducto from "../../../components/FormularioProducto"

export default function NuevoProducto() {
  const [producto, setProducto] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el nuevo producto a la API
    console.log("Nuevo producto:", producto)
    // Redireccionar o mostrar mensaje de éxito
  }

  return (
    <div>
      <Head>
        <title>Nuevo Producto | Tienda Digital</title>
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Crear Nuevo Producto</h1>
        <FormularioProducto producto={producto} setProducto={setProducto} onSubmit={handleSubmit} />
      </main>
    </div>
  )
}

