<template>
    <div>
        <div class="col-12 col-md-3 mb-4">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" :src="product.image" alt="Card image cap">
                <div class="card-body">
                    <router-link :to="{name:'product',params :{id:product.id}}"><h5 class="card-title">{{ product.name }}</h5></router-link>
                    <p class="card-text">{{ product.des }}</p>
                </div>
                <div class="card-footer d-flex justify-content-between px-2">
                    <div>
                        Price : ${{ product.price }}
                    </div>
                    <div>
                        <a href="" class="btn btn-sm btn-primary" @click.prevent="addToCart">Add To Cart</a>
                    </div>
                </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        props : ['product'],
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
