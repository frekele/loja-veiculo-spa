<template>
    <div class="row">
        <div class="col-lg-12">
            <h5>Destaques</h5>
            <div class="card" v-for="(anuncio, index) in $store.getters.getAnuncios" style="margin-top: 15px;">
                <div class="card-horizontal">
                    <div class="img-square-wrapper">
                        <img style="max-height: 300px" v-if="anuncio.imagem_capa" class="responsive-img" :src="'http://localhost:1234/upload/anuncio/' + anuncio.id_anuncio + '/' + anuncio.imagem_capa">
                        <img style="max-height: 300px" v-else class="responsive-img" :src="/static/img/sem-veicluo.png">
                    </div>
                    <div class="card-body">
                        <h3 style="color: #b9b9b9; font-weight: 700; font-size: 14px;">{{ anuncio.veiculo.fabricante.nome }}</h3>
                        <h4>{{ anuncio.veiculo.descricao }}</h4>
                        <h2>{{ anuncio.valor }}</h2>

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
        <div class="col-lg-12" v-if="$store.getters.getAnuncios.length == 0">
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
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
                anuncios: []
            }
        },
        methods: {
            getVeiculos: function () {

                let urlBuscaApi = this.baseUrlAPI + 'anuncio';
                this
                    .axios
                    .get(urlBuscaApi, {
                        params: this.$store.getters.getSelecionados
                    }).then(response => {
                        for (let i in  response.data.anuncios) {
                            this.$store.commit('addAnuncio', response.data.anuncios[i]);
                        }
                    });
            }
        },
        mounted () {
            this.getVeiculos();
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

    /*.customscrollbar{*/
        /*height: 1000px;*/
        /*overflow: scroll;*/
    /*}*/

    /*.customscrollbar::-webkit-scrollbar {*/
        /*width: 3px;*/
        /*height: 10px;*/
    /*}*/

    /*.customscrollbar::-webkit-scrollbar-thumb:vertical{*/
        /*background-color: #37474f;*/
        /*-webkit-border-radius: 6px;*/
    /*}*/

</style>
