<template>
  <div>
    <base-dialog :show="isLoading" title="Authenticateing...."></base-dialog>
<base-dialog :show="!!error" @close="handleError">{{error}}</base-dialog>
    <form @submit.prevent="submitForm">
        <base-card>
        <div class="form-control">
            <label for="email">E-mail</label>
            <input type="email" v-model="email" />
        </div>
        <div class="form-control">
            <label for="password">password</label>
            <input type="text" name="password" id="password" v-model="password">
        </div>
        <p v-if="formIsValid">please enter a valid email and pasword</p>
        <base-button>{{buttonCaption}}</base-button>
        <base-button type="button" mode="flat" @click="switchAuthMode">{{switchButtonCaption}}</base-button>
    </base-card>


    </form>
</div>
</template>
<script>
export default{
    data(){
        return{
            email:'',
            password:'',
            formIsValid:true,
            mode:'login',
            isLoading:false,
            error:null
        }
    },
    computed:{
        buttonCaption(){
            if(this.mode==='login')
           { return 'login';
        }else{
            return 'signup';
           }

        },
        switchButtonCaption(){
            if(this.mode==='login'){
                return 'signup instead';
            }else{
                return 'login instead'
            }

        }

    },
    methods:{
        async submitForm(){
            if(this.email===''||!this.email.includes('@')||this.password.length<6){
                this.formIsValid=false;
                return;
            }
            this.isLoading=true;
           try{
            if(this.mode==='login'){
                await this.$store.dispatch('login',{
                    email:this.email,
                    password:this.password
                })

            }else{
                await this.$store.dispatch('signup',{
                email:this.email,
                password:this.password

            });
       
            }
            const red='/'+(this.$route.query.red||'coaches');
            this.$router.replace(red);

        }catch(err){
            this.error=err.message||'something went wrong'
            
        }
        this.isLoading=false;


        },
        switchAuthMode(){
            if(this.mode==='login'){
                this.mode='signup';
            }else{
                this.mode='login';
            }

        },
        handleError(){
            this.error=null
        }
    }
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
</style>