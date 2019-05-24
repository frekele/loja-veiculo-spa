<template>
    <div>
        <nav class="main-header navbar navbar-expand bg-white navbar-light border-bottom">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" data-widget="pushmenu" href="#"><i class="fa fa-bars"></i></a>
                </li>
            </ul>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a style="color: black" v-on:click="logout" class="nav-link">
                        Sair
                        <i class="fa fa-arrow-right"></i>
                    </a>
                </li>
            </ul>
        </nav>
        <aside class="main-sidebar sidebar-dark-primary elevation-4" style="min-height: 600px;">
            <router-link :to="{ name: 'anuncio'}" class="nav-link text-center text-white">
                <span>Loja de </span>
                <span class="brand-text font-weight-light">
                    <i>Veiculos</i>
                </span>
            </router-link>
            <div class="sidebar">
                <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div class="info text-white">
                        {{ $store.getters.getUsuario.login }}
                    </div>
                </div>
                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li class="nav-item has-treeview">
                            <a href="#" class="nav-link">
                                <i class="nav-icon fa fa-edit"></i>
                                <p>
                                    Cadastro
                                    <i class="right fa fa-angle-left"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <router-link style="color: white" :to="{ name: 'anuncio'}" class="nav-link">
                                        <i class="fa fa-circle-o nav-icon"></i>
                                        <p>Anuncio</p>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link style="color: white" :to="{ name: 'categoria'}" class="nav-link">
                                        <i class="fa fa-circle-o nav-icon"></i>
                                        <p>Categoria</p>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link style="color: white" :to="{ name: 'opcional'}" class="nav-link">
                                        <i class="fa fa-circle-o nav-icon"></i>
                                        <p>Opcional</p>
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    </div>
</template>

<script>
    export default {
        name: 'navbar',
        methods: {
            logout: function () {
                alert('saindo');
            },
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
