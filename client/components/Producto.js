import Link from "next/link"

export default function Producto({ producto }) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">{producto.nombre}</h2>
      <p className="text-gray-600 mb-4">${producto.precio}</p>
      <Link href={`/productos/${producto.id}`} className="bg-blue-500 text-white px-4 py-2 rounded inline-block">
        Ver Detalles
      </Link>
    </div>
  )
}

