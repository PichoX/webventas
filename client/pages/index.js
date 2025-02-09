import Head from "next/head"
import Navbar from "../components/Navbar"
import Producto from "../components/Producto"

export default function Home({ productos }) {
  return (
    <div>
      <Head>
        <title>Tienda Digital</title>
        <meta name="description" content="Tienda de productos digitales" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container mx-auto px-4">
        <h1 className="text-4xl font-bold my-8">Productos Digitales</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productos.map((producto) => (
            <Producto key={producto.id} producto={producto} />
          ))}
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  // En una implementación real, esto sería una llamada a tu API
  const productos = [
    { id: 1, nombre: "E-book de Marketing Digital", precio: 19.99 },
    { id: 2, nombre: "Curso de Diseño Gráfico", precio: 49.99 },
    { id: 3, nombre: "Plugin para WordPress", precio: 29.99 },
  ]

  return {
    props: { productos },
  }
}

