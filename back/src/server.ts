import app from './app';

const PORT = parseInt(process.env.PORT || '3000', 10);


app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log("Swagger UI en http://localhost:3000");
});
