const express = require('express');
const cors=require('cors')
const app = express();
app.use( express.json() );
app.use(express.urlencoded({ extended: true }));
const port = 8000;


require('./config/mongoose.config');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const allRestaurantRoutes = require('./routes/restaurantes.routes');
allRestaurantRoutes(app);
const allUsers= require("./routes/users.routes")
allUsers(app)

app.listen(port, () => {
console.log("Server listening at port", port);
})




//  const restaurantes=[
    
//         {
//           "id": "1",
//           "nombre": "Restaurante El Buen Sabor",
//           "tipo": "Tradicional",
//           "horario": "12:00 - 22:00"
//         },
//         {
//           "id": "2",
//           "nombre": "Café del Valle",
//           "tipo": "Cafetería",
//           "horario": "08:00 - 20:00"
//         },
//         {
//           "id": "3",
//           "nombre": "La Parrilla de San José",
//           "tipo": "Parrillada",
//           "horario": "12:00 - 23:00"
//         },
//         {
//           "id": "4",
//           "nombre": "Tortillas tradicionales",
//           "tipo": "Tradicinal",
//           "horario": "13:00 - 21:00"
//         },
//         {
//           "id": "5",
//           "nombre": "Fritadas la Floresta",
//           "tipo": "Tradicional",
//           "horario": "11:00 - 22:00"
//         },
//         {
//           "id": "6",
//           "nombre": "Salchipapas",
//           "tipo": "chatarra",
//           "horario": "15:00-22:00"
//         }
//   ]
// app.get('/restaurantes/', (req, res)=> {
// res.status(200).json({restaurantes});
// });

// app.post("/restaurantes/",(req,res)=>{
//     // req.body contendrá los datos del formulario desde Postman o desde React
//     if(req){

//         console.log(req.body);
//         restaurantes.push(req.body);
//         res.status(200).json()
//         console.log(restaurantes)
//     }else{
//         console.log("Hubo un error")
//     }
// // podemos hacer push en el array de usuarios por ahora...

// // más tarde esto se insertará en una base de datos

// // siempre tendremos que responder con algo
// })

// app.get("/restaurantes/:id", (req, res) => {
//     // podemos obtener esta variable `id` de req.params
//     console.log(req.params.id);
//     // asumiendo que este id es el índice del array de usuarios podríamos devolver un usuario de esta manera
//     res.json( restaurantes[req.params.id] )

// })

// app.put("/restaurantes/:id", (req, res) => {
// // podemos obtener la variable `id` de req.params
// const id = req.params.id;
// console.log(req.body)
// // asumiendo que este id es el índice del array de usuarios podemos reemplazar el usuario así
// restaurantes.map(res=>{if(res.id==id){
//   res=req.body
// }})
// // siempre debemos responder con algo
// res.json( { status: "ok" } );
// console.log(restaurantes)
// });

// 2
// app.delete("/restaurantes/:id", (req, res) => {
// // podemos obtener la variable `id` de req.params
// const id = req.params.id;
// // asumiendo que este id es el índice del array de usuarios podemos eliminar el usuario así
// restaurantes.splice(id, 1);
// // siempre debemos responder con algo
// res.json( { status: "ok" } );
// console.log(restaurantes)
// });



// app.listen(port, function () {
// console.log('app.js escuchando en el puerto', port);
// });



