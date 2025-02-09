import express from "express"
import Producto from "../models/Producto.js"

const router = express.Router()

// Obtener todos los productos
router.get("/", async (req, res) => {
  try {
    const productos = await Producto.find()
    res.json(productos)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Obtener un producto específico
router.get("/:id", getProducto, (req, res) => {
  res.json(res.producto)
})

// Crear un nuevo producto
router.post("/", async (req, res) => {
  const producto = new Producto({
    nombre: req.body.nombre,
    precio: req.body.precio,
    descripcion: req.body.descripcion,
  })

  try {
    const nuevoProducto = await producto.save()
    res.status(201).json(nuevoProducto)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// Actualizar un producto
router.patch("/:id", getProducto, async (req, res) => {
  if (req.body.nombre != null) {
    res.producto.nombre = req.body.nombre
  }
  if (req.body.precio != null) {
    res.producto.precio = req.body.precio
  }
  if (req.body.descripcion != null) {
    res.producto.descripcion = req.body.descripcion
  }
  try {
    const productoActualizado = await res.producto.save()
    res.json(productoActualizado)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// Eliminar un producto
router.delete("/:id", getProducto, async (req, res) => {
  try {
    await res.producto.remove()
    res.json({ message: "Producto eliminado" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Middleware para obtener un producto por ID
async function getProducto(req, res, next) {
  let producto
  try {
    producto = await Producto.findById(req.params.id)
    if (producto == null) {
      return res.status(404).json({ message: "Producto no encontrado" })
    }
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

  res.producto = producto
  next()
}

export default router

