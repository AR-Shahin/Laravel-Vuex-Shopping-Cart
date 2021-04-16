<template>
    <div>
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    0 Cart
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"     style="min-width:320px; right:0; left:auto">
      <div v-for="i in 5" :key="i">
        <div class="dropdowm-item">
        <div class="px-2 d-flex justify-content-between">
        <div>
          <strong>Vegitable</strong>
          <br />
          2 x $2
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
      <span>Total: $105</span>
      <a href="#" class="btn btn-sm btn-danger">Clear Cart</a>
    </div>
  </div>
</div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>

</style>
