<template>
    <li>        
        <div class="head">
           <h4>{{fullName}}</h4>
        </div>
        <div>{{role}}hours</div>           
        <base-badge v-for="area in areas" :key="area" :mode="area">{{area}}</base-badge>       
        <div class="action">
          <router-link :to="coachContactLink" class="outline">contact</router-link>
          <router-link :to="coachDetailsLink">Details</router-link>
        </div>
       
    </li>
</template>
<script>

export default{
    props:['id','firstName','lastName','role','areas','desciption'],
    computed:{
      fullName(){
        return this.firstName+'  '+this.lastName;

      },
    coachContactLink() {
      return '/coaches/' + this.id + '/contact'; // /coaches/c1/contact
    },
    coachDetailsLink() {
      return '/coaches/' + this.id; // /coaches/c1
    },
    }
}
</script>
<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
  text-align: left;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.action{
  display: flex;
  justify-content: flex-end;
}
a{
    text-decoration: none;
    border-radius: 30px;
    padding:.5rem 1.5rem;
    background-color: rgb(164, 86, 236);
    color:white;
    font:inherit;
    margin-right:.5rem ;
    border:1px solid  rgb(164, 86, 236);
    cursor: pointer;
    display: inline-block;
}
.outline{
  background-color: white;
  color: rgb(164, 86, 236);
}
a:hover,button:hover{
  background-color: rgba(222, 204, 240);
}

</style>


