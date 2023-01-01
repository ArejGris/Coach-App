export default{
    state(){
        return{
           userId:null,
           token:null,
           tokenExpire:null
        }
    },
    mutations:{
        changeUserId(state){
            state.userId=new Date().toISOString();
            console.log(state);
    
          },
          signup(state,payload){
            state.userId=payload.userId;
            state.token=payload.token;
            state.tokenExpire=payload.tokenExpire

          }

    },
    actions:{
        async login(context,payload){
            const response=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD0rA6yR3LcTEvoS6J8dkVZwiL5kdlG-9E',{
                method:'POST',
                body:JSON.stringify({
                    email:payload.email,
                    password:payload.password,
                    returnSecureToken:true
                })
               

            });
            const responseData=await response.json()
            if(!response.ok){
                const error=new Error(responseData.message||'something not going well')
                throw error
                    
            }
            context.commit('signup',{
                userId:responseData.localId,
                token:responseData.idToken,
                tokenExpire:responseData.expiresin
            })
        },
        async signup(context,payload){
            const response =await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD0rA6yR3LcTEvoS6J8dkVZwiL5kdlG-9E',{
                method:'POST',
                body:JSON.stringify({
                    email:payload.email,
                    password:payload.password,
                    returnSecureToken:true
                })
            });
            const responseData=await response.json();
            if(!response.ok){
                const error=new Error(responseData.message||'something went wrong');
                throw error;
            }
            context.commit('signup',{
                token:responseData.idToken,
                userId:responseData.localId,
                tokenExpire:responseData.expiresin
            });


        },
        logout(context){
            context.commit('signup',{
                userId:null,
                token:null,
                tokenExpire:null
            })

        }

    },
    getters:{
        userId(state){
            return state.userId;
        },
        token(state){
            return state.token
        },
        isAuth(state){
           return !!state.token;

        }
    }
}