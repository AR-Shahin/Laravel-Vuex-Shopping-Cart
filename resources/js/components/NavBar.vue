<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="#"><strong>AR Shop</strong></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto">
                    <li class="nav-item active">
                        <router-link :to="{name: 'home'}" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'about'}" class="nav-link">Shop</router-link>
                    </li>
                    </ul>
                    <mini-cart></mini-cart>

                </div>
        </div>
        </nav>
    </div>
</template>

<script>
import MiniCart from './MiniCart.vue'
    export default {
        components : {MiniCart},
        computed : {
            
        }
    }
</script>

<style lang="css" scoped>
 a.nav-link.router-link-exact-active.router-link-active{
    background-color: indianred;
    cursor: pointer;
 }
</style>
