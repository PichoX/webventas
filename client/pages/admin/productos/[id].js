"use client"

import Head from "next/head"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Navbar from "../../../components/Navbar"
import FormularioProducto from "../../../components/FormularioProducto"

export default function EditarProducto() {
  const router = useRouter()
  const { id } = router.query
  const [producto, setProducto] = useState(null)

  useEffect(() => {
    if (id) {
      // En una implementación real, esto sería una llamada a tu API
      setProducto({
        id,
        nombre: `Producto ${id}`,
        precio: 29.99,
        descripcion: "Descripción del producto",
      })
    }
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Aquí iría la lógica para actualizar el producto en la API
    console.log("Producto actualizado:", producto)
    // Redireccionar o mostrar mensaje de éxito
  }

  if (!producto) {
    return <div>Cargando...</div>
  }

  return (
    <div>
      <Head>
        <title>Editar Producto | Tienda Digital</title>
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Editar Producto</h1>
        <FormularioProducto producto={producto} setProducto={setProducto} onSubmit={handleSubmit} />
      </main>
    </div>
  )
}

