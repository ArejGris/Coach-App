<template>
    <div>
    <base-dialog :show="!!error" @close="handle" title="this is error"><p>this is an error</p></base-dialog>
    <section>
        <base-card>
           <header>
            <h2>Requests Received</h2>
            </header>
            <div v-if="isLoading">is loading...</div>
            <ul v-if="hasRequest">
              
                 <request-item v-for="req in requests"
                 :key="req.id"
                 :email="req.email"
                 :message="req.message"></request-item>
           </ul>
           <p v-else> You haven't recieve any message</p>
        </base-card>
   
    </section>
</div>
    
</template>
<script>
import RequestItem from './RequestItem.vue';
export default{
    components:{
        RequestItem

    },
    data(){
        return{
            isLoading:false,
            error:null
        }
    },
    computed:{
        requests(){
            return this.$store.getters.requests;
        },
        hasRequest(){
            return this.$store.getters.hasRequest;
        }
    },
    created(){
this.loadRequests();
    },
    methods:{
        loadRequests(){
            this.isLoading=true;
            try{
            this.$store.dispatch('getRequest');
            }catch(error){
                this.error=error.message||'thing is wrong'
            }
            this.isLoading=false

        },
        handle(){
            this.error=null
        }
    }
}
</script>
<style scoped>
ul{
    list-style: none;

}
</style>