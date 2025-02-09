import Head from "next/head"
import Link from "next/link"
import Navbar from "../../../components/Navbar"

export default function AdminProductos({ productos }) {
  return (
    <div>
      <Head>
        <title>Gestionar Productos | Tienda Digital</title>
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Gestionar Productos</h1>
        <Link href="/admin/productos/nuevo" className="bg-green-500 text-white px-4 py-2 rounded mb-4 inline-block">
          Nuevo Producto
        </Link>
        <table className="w-full mt-4">
          <thead>
            <tr>
              <th className="text-left">ID</th>
              <th className="text-left">Nombre</th>
              <th className="text-left">Precio</th>
              <th className="text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.id}>
                <td>{producto.id}</td>
                <td>{producto.nombre}</td>
                <td>${producto.precio}</td>
                <td>
                  <Link href={`/admin/productos/${producto.id}`} className="text-blue-500 hover:underline mr-2">
                    Editar
                  </Link>
                  <button className="text-red-500 hover:underline">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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

