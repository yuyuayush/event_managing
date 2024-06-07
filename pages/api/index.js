export default async function handler(req,res){
 if(req.method === 'GET'){
    return res.status(200).json({message:"working"})
 }   
}