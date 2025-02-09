import express from "express"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import Usuario from "../models/Usuario.js"

const router = express.Router()

// Registro de usuario
router.post("/registro", async (req, res) => {
  try {
    const { nombre, email, password } = req.body

    // Verificar si el usuario ya existe
    let usuario = await Usuario.findOne({ email })
    if (usuario) {
      return res.status(400).json({ message: "El usuario ya existe" })
    }

    // Crear nuevo usuario
    usuario = new Usuario({
      nombre,
      email,
      password,
    })

    // Encriptar contraseña
    const salt = await bcrypt.genSalt(10)
    usuario.password = await bcrypt.hash(password, salt)

    await usuario.save()

    // Crear y devolver el token
    const payload = {
      usuario: {
        id: usuario.id,
      },
    }

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" }, (error, token) => {
      if (error) throw error
      res.json({ token })
    })
  } catch (error) {
    console.error(error.message)
    res.status(500).send("Error del servidor")
  }
})

// Inicio de sesión
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body

    // Verificar si el usuario existe
    const usuario = await Usuario.findOne({ email })
    if (!usuario) {
      return res.status(400).json({ message: "Credenciales inválidas" })
    }

    // Verificar contraseña
    const isMatch = await bcrypt.compare(password, usuario.password)
    if (!isMatch) {
      return res.status(400).json({ message: "Credenciales inválidas" })
    }

    // Crear y devolver el token
    const payload = {
      usuario: {
        id: usuario.id,
      },
    }

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" }, (error, token) => {
      if (error) throw error
      res.json({ token })
    })
  } catch (error) {
    console.error(error.message)
    res.status(500).send("Error del servidor")
  }
})

export default router

