export default{
    changeCity(state,city){
        state.city=city
        try{
            localStorage.city=city
        }catch(e){
            
        }
    },
    login(state,loginInfo){
        state.userno=loginInfo.userno
        state.token=loginInfo.token
        try{
            localStorage.userno=loginInfo.userno
            localStorage.token=loginInfo.token
        }catch(e){
            
        }
    },
    logout(state){
        state.userno=null
        state.token=null
        try{
            localStorage.removeItem('userno')
            localStorage.removeItem('token')
        }catch(e){
            
        }
    }
}