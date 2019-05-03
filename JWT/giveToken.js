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

   getUsernameFromToken:function(req, token)
   {
    let stringToken = null;
    if(token){
        stringToken = token;
    }else{
        stringToken = JSON.stringify(req.headers.auth);
    }
    const decodedValue = jwtDecode(stringToken);
    if(decodedValue && decodedValue.sub){
        return decodedValue.sub;
    }else{
        return null;
    }
   },

   getToken: function(user)
{
    return JWT.sign({
        iss:'memestock',
        sub:user.Username
        },secret);
}

}