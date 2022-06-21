import {connect} from '../database'

export const getRooms = async (req, res)=>{
   const connections = await connect();  
   const [rows] = await connections.query('SELECT * from habitacion');
   //console.log(rows)
    res.json(rows)
}
export const getRoom = async (req, res)=>{
    const connections = await connect();  
    const [rows] = await connections.query('SELECT * from habitacion where id = ?', [req.params.id]);
    //console.log(rows)
     res.json(rows)
    
}
export const getRoomCount = async (req, res)=>{
    const connections = await connect();  
    const [rows] = await connections.query('SELECT count(*) from habitacion');
     res.json(rows[0]["count(*)"])
    
}
export const saveRoom = async (req, res)=>{
    const connections = await connect();  
    const result = await connections.query("INSERT INTO habitacion(title, description, cat, price, stock, notAvailablestart, notAvailableend) VALUES(?,?,?,?,?,?,?)", [req.body.title, req.body.description, req.body.cat, req.body.price, req.body.stock,req.body.notAvailablestart,req.body.notAvailableend])

       //console.log(result);
}
export const deleteRoom = async (req, res)=>{
    const connections = await connect();  
    const result = await connections.query('DELETE from habitacion where id = ?', [req.params.id]);
    res.sendStatus(204);
}
export const updateRoom = async (req, res)=>{
    const connections = await connect();  
    const result = await connections.query('UPDATE habitacion SET ? where id = ?', [
        req.body,
        req.params.id
    ]);
    //console.log(result);
    res.sendStatus(204);
     
    
}