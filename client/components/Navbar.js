import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Tienda Digital
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/admin" className="hover:text-gray-300">
              Admin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

