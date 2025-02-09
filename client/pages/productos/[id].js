import { useRouter } from "next/router"
import Head from "next/head"
import Navbar from "../../components/Navbar"

export default function DetalleProducto({ producto }) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Cargando...</div>
  }

  return (
    <div>
      <Head>
        <title>{producto.nombre} | Tienda Digital</title>
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{producto.nombre}</h1>
        <p className="text-xl mb-4">Precio: ${producto.precio}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Comprar Ahora</button>
      </main>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  // En una implementación real, esto sería una llamada a tu API
  const producto = {
    id: params.id,
    nombre: `Producto ${params.id}`,
    precio: 29.99,
  }

  return {
    props: { producto },
  }
}

