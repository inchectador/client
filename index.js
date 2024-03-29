const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express();
app.use(cors());

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:true}))



const guitarras = [
    {
        id: 0,
        nombre: 'Fender Stratocaster',
        precio: 800,
        descripcion: 'Clásica guitarra de Fender, acabado en ébano, color blanco.'
    },
    {   
        id: 1,
        nombre: 'Gigson SG',
        precio: 1200,
        descripcion: 'Guitarra icónica de muchos guitarristas, con un sonido potente'
    },
    {   
        id: 2,
        nombre: 'Gibson ES-335',
        precio: 1300,
        descripcion: 'Perfecta guitarra para tocar blues y jazz'
    },
    {   
        id: 3,
        nombre: 'Fender Telecaster',
        precio: 950,
        descripcion: 'Guitarra adecuada para los amantes del country y el sonido clásico de Fender'
    },
    {   
        id: 4,
        nombre: 'Gibson Flying V',
        precio: 1000,
        descripcion: 'Con un diseño muy metalero para tocar los estilos más estridentes'
    },
    
];


const usuarios = [
    {nombre:'Susana', contra:'cualquiera'},
    {nombre:'Sara', contra:'$ara123'},
    {nombre:'Jesus', contra:'Mortadelo'},
    {nombre:'Noemi', contra:'FilemonPi.'}
]



app.post('/', (req, res)=>{
    let nombre = req.body.nombre;
    let contra = req.body.contra;
    let bandera = false;


    usuarios.forEach((usuario)=>{
        if(usuario.nombre == nombre && usuario.contra == contra){
            bandera = true;
        }
    })


    if(bandera){


        try {
            res.status(200).json({state: 'success'})
        } catch (error) {
            res.status(500).json('error en la API')
        }




    }else{

        try {
            res.status(200).json({state: 'failed'})
        } catch (error) {
            res.status(500).json('error en la API')
        }
        
    }

    

})











app.get('/productos',(req,res)=>{


    let arrayAuxiliar = guitarras.map((guitarra=>{
        return{
            id:guitarra.id,
            nombre:guitarra.nombre
        }
    }))
   

    try{
        res.status(200).json({productos:arrayAuxiliar})
    }catch(error){
        res.status(500).json('Error en la API')
    }
    
})







app.get('/productos/detalleProducto',(req, res)=>{

    let id = req.query.id
    
    
    
    
    try{
        res.status(200).json(guitarras[id])
    }catch(error){
        res.status(500).json('error en la api1')
    }
    
    
    

})








app.listen(process.env.PORT, ()=>{
    console.log('servidor encendido')
})