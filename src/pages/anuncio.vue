<template>
    <div>
        <header-front />
        <div class="container">
            <div class="row" style="margin-top: 15px">
                <div class="col-12">
                    <h5 v-if="anuncio">Anuncio {{ anuncio.veiculo.descricao }} <span v-if="!anuncio.ativo" style="color: red"> - Desativado</span></h5>
                    <div class="card" style="margin-top: 15px;">
                        <div class="card-horizontal">
                            <div class="card-body">
                                <div v-if="anuncio">
                                    <div class="row">
                                        <div class="col-5">
                                            <div v-if="anuncio.veiculo.imagem.length > 0">
                                                <div id="carousel_imagens" class="carousel slide" data-ride="carousel">
                                                    <div class="carousel-inner">
                                                        <div v-for="(imagem, index) in anuncio.veiculo.imagem" class="carousel-item" :class="index == 0 ? 'active' : ''">
                                                            <img style="max-width: 400px; height: auto" :src="'http://localhost:1234/upload/veiculo/' + imagem.id_veiculo + '/' + imagem.imagem" class="responsive-img">
                                                        </div>
                                                    </div>
                                                    <a class="carousel-control-prev" href="#carousel_imagens" role="button" data-slide="prev">
                                                        <span class="carousel-control-prev-icon black-text" aria-hidden="true"></span>
                                                        <span class="sr-only">Previous</span>
                                                    </a>
                                                    <a class="carousel-control-next" href="#carousel_imagens" role="button" data-slide="next">
                                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">Next</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div v-else-if="anuncio.imagem_capa !== null">
                                                <img style="max-width: 400px; height: auto" :src="'http://localhost:1234/upload/anuncio/' + anuncio.id_anuncio + '/' + anuncio.imagem_capa" class="responsive-img">
                                            </div>
                                            <div v-else>
                                                <img style="max-width: 400px; height: auto" :src="'/static/img/sem-veiculo.png'" class="responsive-img">
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <ul class="list-group list-group-flush" style="padding-left: 0px; margin-bottom: 30px">
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
                                            <h2>
                                                {{ formatMoeda(anuncio.valor) }}
                                                <button v-if="anuncio.ativo" type="button" data-toggle="modal" data-target="#modal_contato" class="btn btn-success float-right">Envie sua proposta</button>
                                            </h2>
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="row">
                                        <div class="col-6">
                                            <h5>Opcionais</h5>
                                            <ul>
                                                <li v-for="op in anuncio.veiculo.opcional">{{ op.opcional.nome }}</li>
                                            </ul>
                                        </div>
                                        <div class="col-6">
                                            <h5>Informações</h5>
                                            <p>{{ anuncio.observacao }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="loading" class="col-lg-12">
                                    <div class="d-flex justify-content-center">
                                        <div class="spinner-border" role="status">
                                            <span class="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="semAnuncio" class="col-lg-12">
                                    <div class="d-flex justify-content-center">
                                        <p>Anúncio não encontrado</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="modal_contato" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Proposta</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <label for="nome" class="col-form-label">Seu nome</label>
                                    <input v-model="contato.nome" type="text" class="form-control" id="nome">
                                </div>
                                <div class="form-group">
                                    <label for="email" class="col-form-label">E-mail</label>
                                    <input v-model="contato.email" type="text" class="form-control" id="email">
                                </div>
                                <div class="form-group">
                                    <label for="telefone" class="col-form-label">Telefone</label>
                                    <input v-model="contato.telefone" type="text" class="form-control" id="telefone">
                                </div>
                                <div class="form-group">
                                    <label for="observacao" class="col-form-label">Observação:</label>
                                    <textarea v-model="contato.observacao" class="form-control" id="observacao"></textarea>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary close-modal" data-dismiss="modal">Cancelar</button>
                                <button type="button" v-on:click="realizarContato" class="btn btn-primary">Enviar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderFront from '@/components/layout/header'

    export default {
        name: 'index',
        components: {
            HeaderFront,
        },
        data () {
            return {
                anuncio: null,
                contato: {},
                loading: true,
                semAnuncio: false,
            }
        },
        methods: {
            getAnuncio: function () {

                let urlBuscaApi = this.baseUrlAPI + 'anuncio/' + this.$route.params.id;

                this
                    .axios
                    .get(urlBuscaApi, {})
                    .then(response => {

                        let anuncio = response.data.anuncio;
                        this.loading = false;
                        this.anuncio = anuncio;

                        if (anuncio === null) {
                            this.semAnuncio = true;
                        }
                    });
            },
            realizarContato: function () {

                this.contato.id_anuncio = this.anuncio.id_anuncio;
                let params = {
                    method: 'post',
                    url: this.baseUrlAPI + 'anuncio/contato',
                    data: this.contato,
                };

                this.axios(params).then(response => {
                    this.flash('Contato enviado com sucesso!', 'success', {
                        timeout: 3000,
                    });

                    this.contato = {};
                    $('button.close-modal').click();
                }).catch(response => {
                    this.flash('Erro ao enviar contato.', 'error', {
                        timeout: 3000,
                    });
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

    ul {
        list-style-type: disc;
    }

    ul li{
        float: left;
        width: 50%;
    }

</style>