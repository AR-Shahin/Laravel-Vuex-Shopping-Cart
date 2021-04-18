<template>
  <div class="row mt-5" >
    <div class="col-4" v-if="product">
      <img :src="product.image" class="w-100" />
    </div>
    <div class="col-8">
      <h1>{{ product.name}}</h1>
      <h3>${{ product.price }}</h3>

      <input type="text"  class="text-center col-1 mr-2 p-1" />
      <button class="btn btn-primary" @click="addToCart">Add to Cart</button>

      <p class="mt-4">{{product.des}}</p>
    </div>
  </div>
</template>

<script>
    export default {
        props : ['id'],
       mounted(){
           this.$store.dispatch('getSingleProduct',this.id)
       },
       computed : {
           product(){
               return this.$store.state.product
           }
       },
        methods : {
            addToCart(){
                this.$store.dispatch('addToCart',{
                    product : this.product,
                    quantity : 1
            })
        }
    }
    }
</script>

<style lang="scss" scoped>

</style>
