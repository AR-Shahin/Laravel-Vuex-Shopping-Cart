<template>
    <div>
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {{ cartItemCount }} Cart
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"     style="min-width:320px; right:0; left:auto">
      <div v-for="item in cart" :key="item.product.id">
        <div class="dropdowm-item">
        <div class="px-2 d-flex justify-content-between">
        <div>
          <strong>{{ item.product.name }}</strong>
          <br />
          {{ item.quantity }} x ${{ item.product.price }}
        </div>
        <div>
          <a
            href="#"
            class="badge badge-danger" @click="removeFromCart(item.product)"
          >Remove</a>
        </div>
      </div>
      <hr />
      </div>
      </div>
      <!-- total -->
       <div class="d-flex justify-content-between px-2">
      <span>Total: ${{ totalCartAmount }}</span>
      <a href="#" class="btn btn-sm btn-danger" @click="clearCart">Clear Cart</a>
    </div>
  </div>
</div>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
    export default {
        mounted (){
           this.$store.dispatch('getCartItems')
        },
        computed : {
            ...mapGetters(['cartItemCount','totalCartAmount']),
            cart(){
                return this.$store.state.cart;
            }
        },
        methods: {
            removeFromCart(product){
                this.$store.dispatch('removeFromCart',product)
            },
            clearCart(){
                this.$store.dispatch('clearCart')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
