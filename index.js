import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Conectado a MongoDB');
  app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
})
.catch((error) => {
  console.error('Error conectando a MongoDB:', error);
});

// Aquí irían tus rutas, por ejemplo:
// app.use('/api/productos', productosRoutes);

