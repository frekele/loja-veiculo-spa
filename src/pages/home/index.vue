<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <h5>Encontre seu Veículo</h5>
                <div class="card">
                    <div class="card-horizontal">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-2">
                                    <label for="tipo">Tipo de Veículo</label>
                                    <select id="tipo" class="form-control" v-model="selecionados.tipo" v-on:change="onChange">
                                        <option value="" selected>Todas</option>
                                        <option v-for="tipo in filtros.tipo" v-bind:value="tipo.id_veiculo_tipo">{{ tipo.nome }}</option>
                                    </select>
                                </div>
                                <div class="col-2">
                                    <label for="marca">Marca</label>
                                    <select id="marca" class="form-control" v-model="selecionados.fabricante" v-on:change="onChange">
                                        <option value="" selected>Todas</option>
                                        <option v-for="fabricante in filtros.fabricante" v-bind:value="fabricante.id_veiculo_fabricante">{{ fabricante.nome }}</option>
                                    </select>
                                </div>
                                <div class="col-2">
                                    <label for="categoria">Categoria</label>
                                    <select id="categoria" class="form-control" v-model="selecionados.categoria" v-on:change="onChange">
                                        <option value="" selected>Todas</option>
                                        <option v-for="categoria in filtros.categoria" v-bind:value="categoria.id_veiculo_categoria">{{ categoria.nome }}</option>
                                    </select>
                                </div>
                                <div class="col-3">
                                    <label for="descricao">Descrição</label>
                                    <input v-on:change="onChange" v-model="selecionados.descricao" class="form-control" id="descricao">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" style="margin-top: 30px">
            <div class="col-lg-12">
                <h5>Destaques</h5>
                <div class="card" v-for="(anuncio, index) in anuncios" style="margin-top: 15px;">
                    <div class="card-horizontal">
                        <div class="img-square-wrapper">
                            <img style="max-width: 500px; height: auto" v-if="anuncio.imagem_capa" class="responsive-img" :src="'http://localhost:1234/upload/anuncio/' + anuncio.id_anuncio + '/' + anuncio.imagem_capa">
                            <img style="max-width: 500px; height: auto" v-else class="responsive-img" :src="'/static/img/sem-veiculo.png'">
                        </div>
                        <div class="card-body">
                            <h3 style="color: #b9b9b9; font-weight: 700; font-size: 14px;">{{ anuncio.veiculo.fabricante.nome }}</h3>
                            <h4>{{ anuncio.veiculo.descricao }}</h4>
                            <h2>{{ formatMoeda(anuncio.valor) }}</h2>

                            <div class="col-6" style="padding-left: 0px; margin-top: 30px">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        <b>Modelo:</b> <span>{{ anuncio.veiculo.ano_modelo }}</span>
                                    </li>
                                    <li class="list-group-item">
                                        <b>Cor:</b> <span>{{ anuncio.veiculo.cor }}</span>
                                    </li>
                                    <li class="list-group-item">
                                        <b>Combustível:</b> <span>{{ anuncio.veiculo.combustivel.nome }}</span>
                                    </li>
                                    <li class="list-group-item">
                                        <b>Motor:</b> <span>{{ anuncio.veiculo.potencia }}</span>
                                    </li>
                                </ul>
                            </div>

                            <router-link class="btn btn-success btn-sm float-right" style="color: white" :to="{ name: 'anuncio', params: { id: anuncio.id_anuncio }}">Saiba Mais</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-12" v-if="semAnuncio">
                <p>Nenhum anúncio encontrado</p>
            </div>
            <div class="col-lg-12" v-if="loading">
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'index',
        data () {
            return {
                anuncios: [],
                filtros: {
                    categoria: [],
                    fabricante: [],
                    tipo: [],
                },
                selecionados: {
                    categoria: '',
                    tipo: '',
                    fabricante: '',
                    descricao: '',
                },
                loading: true,
                semAnuncio: false
            }
        },
        methods: {
            getVeiculos: function () {

                this.loading = true;
                this.semAnuncio = false;
                this.anuncios = [];
                let urlBuscaApi = this.baseUrlAPI + 'anuncio';
                let params = { params: this.selecionados };

                this.axios.get(urlBuscaApi, params).then(response => {

                    let anuncios = response.data.anuncios;
                    this.loading = false;
                    this.anuncios = anuncios;

                    if (anuncios.length === 0) {
                        this.semAnuncio = true;
                    }
                });
            },
            onChange: function () {
                this.getVeiculos();
            },
            getFiltros: function () {
                this.axios.get(this.baseUrlAPI + 'filtros').then(response => {
                    this.filtros = response.data.filtros;
                });
            }

        },
        mounted () {
            this.getVeiculos();
            this.getFiltros();
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .card-horizontal {
        display: flex;
        flex: 1 1 auto;
    }

    div.item img:hover {
        transform: scale(1.03);
        transition: .3s;
    }

    div.item img {
        transform: scale(1);
        transition: .3s;
    }

    img.heig-img {
        height: 200px;
    }

    div.margin-bt {
        margin-bottom: 30px;
    }

    .list-group-flush li {
        padding: 5px 0px;
    }
</style>
