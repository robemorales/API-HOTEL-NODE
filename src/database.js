import mysql from 'mysql2/promise'
import {config} from './config'

export const connect =  async()=>{
    return await mysql.createConnection(config)
}
/*
// Obtenga el servicio mysql
const conectionDB = () =>{
    var connection = mysql.createConnection({
       
      
    });
    
    // conectarse a mysql
    connection.connect(function(error){
        if(error){
            console.log('que bola');
        }else{
            console.log('EXITO');
        }
    })
    connection.end(function(){
        // La conexión se ha cerrado
    });
    
}
export default conectionDB

// Agregue las credenciales para acceder a su base de datos
 
/*connection.query('Select *  from users', function(error, results, field){
    if(error){
        throw error;
    }else
    results.forEach(results => {
        console.log(results);
        
    });
})*/

// Cerrar la conexión*/

