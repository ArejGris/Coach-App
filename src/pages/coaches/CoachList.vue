<template>
    <div>
    <base-dialog :show="!!error" title="An error occured" @close="handle">
    <p>
    {{error}}
    </p></base-dialog>
    <section>
        <coach-filter @change-filter="setFilters"></coach-filter>
    </section>
    <section>
    <base-card>
        <div class="controls">
            <base-button mode="outline" @click="loadCoaches">refresh</base-button>
            <base-button v-if="!isLogged" link to="/auth?red=register">login to register</base-button>

            <base-button link="true"  v-if="!isCoach&&isLogged" to="/register">Register as a coach</base-button>
        </div>
        <div v-if="isLoading">is loading...</div>
            <ul v-if="hasCoaches">
                <coach-item v-for="coach in filteredCoaches" 
                :key="coach.id"
                :id="coach.id"
                :first-name="coach.firstName"
                :last-name="coach.lastName"
                :role="coach.hourlyRate"
                :description="coach.description"
                :areas="coach.areas">
                </coach-item>
            </ul>
            <h3 v-else>no coaches found.</h3>
        
    </base-card>

    </section>
</div>
</template>
<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from './CoachFilter.vue';
export default{
components:{
    CoachItem,CoachFilter
},
data(){
    return{
        activeFilter:{
            frontend:true,
            backend:true,
            career:true

        },
        error:null,
        isLoading:true
    }
},
    computed:{
        isLogged(){
            return this.$store.getters.isAuth
        },
        filteredCoaches(){
            return this.$store.getters.coaches.filter(coach=>{
                if(this.activeFilter.frontend&&coach.areas.includes('frontend')){
                    return true;
                }
                if(this.activeFilter.backend&&coach.areas.includes('backend')){
                    return true;
                }
                if(this.activeFilter.career&&coach.areas.includes('career')){
                    return true;
                }
                return false
            });
        },
        hasCoaches(){
            return this.$store.getters.hasCoaches;
        },
        isCoach(){
            return this.$store.getters.isCoach;
        }
       
    },
    created(){
        this.loadCoaches();
    },
    methods:{
        handle(){
        this.error=null;
       },
        setFilters(CoachFilter){
            this.activeFilter=CoachFilter

        },
       async loadCoaches(){
            this.isLoading=true;
            try{
           await this.$store.dispatch('loadCoaches');
            }catch(error){
                this.error=error.message||'something went wrong!';

            }
           this.isLoading=false;
        },
       

    }
}
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: block;
  justify-content: space-between;
}</style>
