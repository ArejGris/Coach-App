<template>
    <li>
        <div>
            <a :href="emailLink">{{email}}</a>
        </div>
        <p>{{message}}</p>
    </li>
</template>
<script>
export default{
props:['email','message'],
computed:{
    emailLink(){
        return 'mailto'+this.email;
    }
}
}
</script>
<style scoped>
li{
    border:1px solid rgba(0,0,0,.2);
    margin:1rem 0;
    padding:1rem;
}
a{
    text-decoration: none;
    text-align: left;
    font-weight: bold;
    color:blueviolet;
    display: block;

}
p{
    text-align: left;
    display: block;
}
</style>
