export default{
    state(){
        return{
            requests:[]
        }
    },
    getters:{
        requests(state,_,_2,rootGetters){
            const coachId=rootGetters.userId
            return state.requests.filter(req=>req.coachId===coachId);
        },
        hasRequest(state){
            return state.requests&& state.requests.length >0;

        }
    },
    mutations:{
        addRequest(state,payload){
            state.requests.push(payload)
        },
        setRequest(state,payload){
            state.requests=payload
        }

    },
    actions:{
        async addRequest(context,payload){
            const newRequest={
                email:payload.email,
                message:payload.message,
                
            }
            const response=await fetch(`https://main-ttt-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,{
                method:'POST',
                body:JSON.stringify(newRequest)
            });
            if(!response.ok){
               const error=new Error(responseData.message||'fail to fetch requests')
               throw(error) 
            }
            const responseData=await response.json();
            newRequest.id=responseData.name;
            newRequest.coachId=payload.coachId;

            context.commit('addRequest',newRequest);
        },
        async getRequest(context){
            const coachId=context.rootGetters.userId;
            const token=context.getters.token;
            const response=await fetch(`https://main-ttt-default-rtdb.firebaseio.com/requests/${coachId}.json?auth=`+token);
            const responseData=await response.json();
            const requests=[];
            for(const key in responseData){
                const request={
                    id:key,
                    coachId:coachId,
                    message:responseData[key].message,
                    email:responseData[key].email

                };
               requests.push(request)
            }
              context.commit('setRequest',requests)                    


        }

    }
}