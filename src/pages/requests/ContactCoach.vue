<template>
    <form @submit.prevent="sendRequest">
        <div class="form-control">
            <label for="email">Your E-mail</label>
            <input type="email" v-model.trim="email">
        </div>
        <div class="form-control">
            <label for="message">Your E-mail</label>
            <textarea id="message" cols="30" rows="10" v-model.trim="message"></textarea>
        </div>
        <p v-if="!isValid" class="error">please enter e-mail and message..</p>
        <div class="actions">
           <base-button type="submit">Send Message</base-button>

        </div>
    </form>
</template>
<script>
export default{
    data(){
        return{
            email:'',
            message:'',
            isValid:true


        };
       
    },
    methods: {
            sendRequest(){
                this.isValid=true;
                if(this.email===''||!this.email.includes('@')||this.message===''){
                    this.isValid=false;
                    return;
                }
                this.$store.dispatch('addRequest',{
                    email:this.email,
                    message:this.message,
                    coachId:this.$route.params.id
                });
                console.log(this.$store.getters.requests)
                this.$router.replace('/coaches');

                
            }
        },
}
</script>
<style scoped>
form{
    margin: 1rem;
    border:1px solid #ccc;
    border-radius: 13px;
    padding: 1rem .5rem ;
}
.form-control{
    font-weight:bold;
    margin: .5rem 0;
}
label{
    margin-bottom: .5rem;
    display: block;
}
input,textarea{
    border:1px solid rgba(0,0,0,.5);
    display: block;
}
input:focus,
textarea:focus{
border-color: blue;
background-color: rgba(0, 0, 0, 0.178);
}
.error{
    font-weight: bold;
    color:red
}
</style>