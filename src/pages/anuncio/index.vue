<template>
    <div class="row">
        <div class="col-12">
        <div class="card" style="margin-top: 15px;">
            <div class="card-horizontal">
                <div class="card-body">
                    <div class="row">
                        <div class="col-12">
                            <h5>Anuncio {{ anuncio.veiculo.descricao }}</h5>
                        </div>
                        <div class="col-5">
                            <div v-if="anuncio.veiculo.imagem.length > 0">
                                <div id="carouselExampleFade" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                        <div v-for="(imagem, index) in anuncio.veiculo.imagem" class="carousel-item" :class="index == 1 ? 'active' : ''">
                                            <img style="max-height: 300px" :src="'http://localhost:1234/upload/veiculo/' + imagem.id_veiculo + '/' + imagem.imagem" class="responsive-img">
                                        </div>
                                    </div>
                                    <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon black-text" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                            <div v-else-if="anuncio.imagem_capa.length !== null">
                                <img style="max-height: 300px; width: auto" :src="'http://localhost:1234/upload/anuncio/' + anuncio.id_anuncio + '/' + anuncio.imagem_capa" class="responsive-img">
                            </div>
                            <div v-else>
                                <img style="max-height: 300px; width: auto" :src="/static/img/sem-veicluo.png" class="responsive-img">
                            </div>
                        </div>
                        <div class="col-6">
                            <ul class="list-group list-group-flush" style="padding-left: 0px;">
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
                                <li class="list-group-item">
                                    <b>Fabricante:</b> <span>{{ anuncio.veiculo.fabricante.nome }}</span>
                                </li>
                                <li class="list-group-item">
                                    <b>Categoria:</b> <span>{{ anuncio.veiculo.categoria.nome }}</span>
                                </li>
                                <li class="list-group-item">
                                    <b>Câmbio:</b> <span>{{ anuncio.veiculo.cambio }}</span>
                                </li>
                            </ul>
                        </div>
                        <hr>
                        <div class="col-6">
                            <h5>Opcionais</h5>
                            <ul>
                                <li v-for="op in anuncio.veiculo.opcional">{{ op.opcional.nome }}</li>
                            </ul>
                        </div>
                    </div>
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
                anuncio: {}
            }
        },
        methods: {
            getAnuncio: function () {

                let urlBuscaApi = this.baseUrlAPI + 'anuncio/' + this.$route.params.id;

                this
                    .axios
                    .get(urlBuscaApi, {})
                    .then(response => {
                        this.anuncio = response.data.anuncio;
                    });
            }
        },
        mounted () {
            this.getAnuncio();
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .carousel-control-prev-icon {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%f' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E") !important;
    }

    .carousel-control-next-icon {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%f' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
    }


    .list-group-flush li {
        padding: 5px 0px;
    }

</style>
