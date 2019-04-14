let defaultCity="广州"
try{
    if(localStorage.city){
        defaultCity=localStorage.city
    }
}catch(e){}

let localUser=''
try{
    if(localStorage.user){
        localUser=localStorage.user
    }
}catch(e){}

export default{
    city:defaultCity,
    user:localUser
}