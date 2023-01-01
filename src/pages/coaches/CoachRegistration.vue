<template>
   <section>
      <base-card>
    <h2>Register as a coach now!</h2>
   <coach-form @sendData="saveData"></coach-form>
</base-card>
   </section>
</template>
<script>
import CoachForm from './CoachForm.vue';
export default{
   components:{
      CoachForm
   },
   methods:{
      saveData(data){
         this.$store.dispatch('registerCoach',data);
         this.$router.replace('/coaches');

      }

   }
}
</script>
<style scoped>
section{
   text-align: left;
}
</style>