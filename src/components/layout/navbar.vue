<template>
    <div>
        <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark nav-h">
            <div class="container">
                <router-link style="color: white" :to="{ name: 'index'}" class="black-text">Loja de veículos</router-link>
                <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                </div>
            </div>
        </nav>
        <div class="nav-scroller bg-white shadow-sm" style="height: 105px; box-shadow: 0 1px 0px 0px rgba(0,0,0,.075)!important;">
            <div class="container">
                <div class="row">

                    <div class="col-2">
                        <p>Encontre seu veículo</p>
                    </div>
                    <div class="col-2">
                        <label>Categoria</label>
                        <select class="form-control" v-model="selecionados.categoria" v-on:change="onChange(selecionados)">
                            <option value="" selected>Todas</option>
                            <option v-for="categoria in filtros.categoria" v-bind:value="categoria.id_veiculo_categoria">{{ categoria.nome }}</option>
                        </select>
                    </div>
                    <div class="col-2">
                        <label>Marca</label>
                        <select class="form-control" v-model="selecionados.fabricante" v-on:change="onChange(selecionados)">
                            <option value="" selected>Todas</option>
                            <option v-for="fabricante in filtros.fabricante" v-bind:value="fabricante.id_veiculo_fabricante">{{ fabricante.nome }}</option>
                        </select>
                    </div>
                    <div class="col-2">
                        <label>Tipo</label>
                        <select class="form-control" v-model="selecionados.tipo" v-on:change="onChange(selecionados)">
                            <option value="" selected>Todas</option>
                            <option v-for="tipo in filtros.tipo" v-bind:value="tipo.id_veiculo_tipo">{{ tipo.nome }}</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'navbar',
        data () {
            return {
                filtros: {
                    categoria: [],
                    fabricante: [],
                    tipo: [],
                },
                selecionados: {
                    categoria: '',
                    tipo: '',
                    fabricante: '',
                }
            }
        },
        methods: {
            onChange: function (selecionados) {
                this.$router.push({ name: 'index', params: {a: 1}});
                this.$store.commit('setSelecionados', selecionados);
            },
        },
        mounted () {

            this
                .axios
                .get(this.baseUrlAPI + 'filtros')
                .then(response => {
                    this.filtros.categoria = response.data.filtros.categoria;
                    this.filtros.fabricante = response.data.filtros.fabricante;
                    this.filtros.tipo = response.data.filtros.tipo;
                });
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .nav-h {
        height: 35px;
    }
</style>
