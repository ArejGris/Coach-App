<template>
     <div class="card">
        <slot></slot>
     </div>
</template>
<style scoped>
.card{
    border-radius: 30px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    max-width: 40rem;
    margin:2rem auto;
    padding: 1rem;

}
</style>
