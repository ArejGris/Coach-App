<template>
<button v-if="!link" :class="mode">
    <slot></slot>
</button>
<router-link v-else :to="to" :class="mode">
    <slot></slot>
</router-link>
</template>
<script>
export default{
    props: {
    mode: {
      type: String,
      required: false,
      default: null
    },
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: String,
      required: false,
      default: '/'
    }
  }
}</script>
<style scoped>
button,a{
    text-decoration: none;
    border-radius: 30px;
    padding:.5rem 1.5rem;
    background-color: rgb(164, 86, 236);
    color:white;
    font:inherit;
    margin-right:1rem ;
    border:1px solid  rgb(164, 86, 236);
    cursor: pointer;
    display: inline-block;
}
a:hover,button:hover{
    background-color: rgb(222, 204, 240);
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #270041;
  color: #270041;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #edd2ff;
}

</style>