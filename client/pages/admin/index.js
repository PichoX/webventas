import Head from "next/head"
import Link from "next/link"
import Navbar from "../../components/Navbar"

export default function AdminDashboard() {
  return (
    <div>
      <Head>
        <title>Panel de Administración | Tienda Digital</title>
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Panel de Administración</h1>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link href="/admin/productos" className="text-blue-500 hover:underline">
                Gestionar Productos
              </Link>
            </li>
            {/* Añadir más enlaces según sea necesario */}
          </ul>
        </nav>
      </main>
    </div>
  )
}

