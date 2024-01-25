const express = require("express")
const app = express()
const path = require("path")
const PORT = process.env.PORT || 3002;

//       --- configuracion EJS como motr de vista ---
app.set ('view.engine', 'ejs')



//       --- MIDDLEWARES ---

//directorio publico
app.use(express.static(path.join(__dirname, "public")))

// Rutas
const routes = require('./routes/index')

app.use('/', routes)


app.listen(PORT, () => {
    console.log("Servidor en: http://localhost:" + PORT);
  });
  