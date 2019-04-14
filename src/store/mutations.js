export default{
    changeCity(state,city){
        state.city=city
        try{
            localStorage.city=city
        }catch(e){
            
        }
    },
    login(state,user){
        state.user=user
        try{
            localStorage.user=user
        }catch(e){
            
        }
    },
    logout(state,user){
        state.user=null
        try{
            localStorage.removeItem('user')
        }catch(e){
            
        }
    }
}