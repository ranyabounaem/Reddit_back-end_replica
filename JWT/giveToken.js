const jwtDecode = require('jwt-decode');
const JWT=require('jsonwebtoken');


const secret='memestocksecret';

module.exports=
{
   secret:secret,
   authenticate:function(req,username)
   {
       
    const stringToken=JSON.stringify(req.headers.auth);
    const decodedValue = jwtDecode(stringToken);
    
    if(decodedValue.sub==username){return true;}
    else return false;
   },

   getUsernameFromToken:function(req)
   {
    const stringToken=JSON.stringify(req.headers.auth);
    const decodedValue = jwtDecode(stringToken);
    return decodedValue.sub;
   },

   getToken: function(user)
{
    return JWT.sign({
        iss:'memestock',
        sub:user.Username
        },secret);
}

}