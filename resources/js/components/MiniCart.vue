<template>
    <div>
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {{ count }} Cart
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
            class="badge badge-danger"
          >Remove</a>
        </div>
      </div>
      <hr />
      </div>
      </div>
      <!-- total -->
       <div class="d-flex justify-content-between px-2">
      <span>Total: ${{ total }}</span>
      <a href="#" class="btn btn-sm btn-danger">Clear Cart</a>
    </div>
  </div>
</div>
    </div>
</template>

<script>
    export default {
        mounted (){
           this.$store.dispatch('getCartItems')
        },
        computed : {
            cart(){
                return this.$store.state.cart;
            },
            count(){
               return this.$store.getters.cartItemCount
            },
            total(){
                return this.$store.getters.totalCartAmount
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
