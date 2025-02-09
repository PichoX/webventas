import connectDB from '../../utils/connectDB';
import Producto from '../../models/Producto';

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'GET') {
    const productos = await Producto.find({});
    res.status(200).json(productos);
  } else if (req.method === 'POST') {
    const producto = await Producto.create(req.body);
    res.status(201).json(producto);
  }
}