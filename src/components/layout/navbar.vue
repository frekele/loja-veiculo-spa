<template>
    <div>
        <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark nav-h">
            <div class="container">
                <router-link style="color: white" :to="{ name: 'index'}" class="black-text">Loja de veículos</router-link>
                <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'navbar',
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
