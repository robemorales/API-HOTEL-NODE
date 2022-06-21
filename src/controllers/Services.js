
import {connect} from '../database'

export const getServices = async (req, res)=>{
   const connections = await connect();  
   const [rows] = await connections.query('SELECT * from servicios');
   //console.log(rows)
    res.json(rows)
}
export const getService = async (req, res)=>{
    const connections = await connect();  
    const [rows] = await connections.query('SELECT * from servicios where id = ?', [req.params.id]);
    //console.log(rows)
     res.json(rows)
    
}
export const getServiceCount = async (req, res)=>{
    const connections = await connect();  
    const [rows] = await connections.query('SELECT count(*) from servicios');
     res.json(rows[0]["count(*)"])
    
}
export const saveService = async (req, res)=>{
    const connections = await connect();  
    const result = await connections.query("INSERT INTO servicios(title, description) VALUES(?,?)", [req.body.title, req.body.description])

       //console.log(result);
}
export const deleteService = async (req, res)=>{
    const connections = await connect();  
    const result = await connections.query('DELETE from servicios where id = ?', [req.params.id]);
    res.sendStatus(204);
}
export const updateService = async (req, res)=>{
    const connections = await connect();  
    const result = await connections.query('UPDATE servicios SET ? where id = ?', [
        req.body,
        req.params.id
    ]);
    //console.log(result);
    res.sendStatus(204);
     
    
}