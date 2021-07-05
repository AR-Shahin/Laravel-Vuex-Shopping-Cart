<template>
    <div>

         <div class="row justify-content-center">
             <ProductCart v-for="product in products" :key="product.id" :product="product"></ProductCart>
         </div>
    </div>
</template>

<script>
import ProductCart from './ProductCart'
import {mapActions,mapState} from 'vuex'
    export default {
        components : {ProductCart},
        mounted(){
            this.$store.dispatch('getProducts')

        },
        computed : {
            products(){
                return this.products
            },
            ...mapState(['products'])
        }
    }
</script>

<style lang="scss" scoped>

</style>
