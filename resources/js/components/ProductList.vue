<template>
    <div>
         <div class="row justify-content-center">
             <ProductCart v-for="i in 9" :key="i"></ProductCart>
         </div>
    </div>
</template>

<script>
import ProductCart from './ProductCart'
    export default {
        components : {ProductCart}
    }
</script>

<style lang="scss" scoped>

</style>
