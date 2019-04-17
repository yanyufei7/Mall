let defaultCity="广州"
try{
    if(localStorage.city){
        defaultCity=localStorage.city
    }
}catch(e){}

let localUser=''
try{
    if(localStorage.userno){
        localUser=localStorage.userno
    }
}catch(e){}

let localToken=''
try{
    if(localStorage.token){
        localToken=localStorage.token
    }
}catch(e){}

export default{
    city:defaultCity,
    userno:localUser,
    token:localToken
}