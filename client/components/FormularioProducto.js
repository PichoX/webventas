export default function FormularioProducto({ producto, setProducto, onSubmit }) {
  const handleChange = (e) => {
    const { name, value } = e.target
    setProducto((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="nombre" className="block mb-1">
          Nombre:
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={producto.nombre}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>
      <div>
        <label htmlFor="precio" className="block mb-1">
          Precio:
        </label>
        <input
          type="number"
          id="precio"
          name="precio"
          value={producto.precio}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          step="0.01"
          required
        />
      </div>
      <div>
        <label htmlFor="descripcion" className="block mb-1">
          Descripción:
        </label>
        <textarea
          id="descripcion"
          name="descripcion"
          value={producto.descripcion}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          rows="4"
        ></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Guardar Producto
      </button>
    </form>
  )
}

