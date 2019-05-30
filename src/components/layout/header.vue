<template>
    <div>
        <nav class="site-header sticky-top py-1">
            <div class="container d-flex flex-column flex-md-row justify-content-between">
                <router-link :to="{name: 'index'}" class="py-2">
                    <span style="float: left">  Loja de Veículos</span>
                </router-link>
            </div>
        </nav>
        <div class="container" style="margin-top: 15px">
            <flash-message></flash-message>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'headerFront',
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .site-header {
        background-color: rgba(0, 0, 0, .85);
        -webkit-backdrop-filter: saturate(180%) blur(20px);
        backdrop-filter: saturate(180%) blur(20px);
    }
    .site-header a {
        color: #999;
        transition: ease-in-out color .15s;
    }
    .site-header a:hover {
        color: #fff;
        text-decoration: none;
    }
</style>