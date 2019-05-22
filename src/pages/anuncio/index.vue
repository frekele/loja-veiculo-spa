<template>
    <div>
        <navbar />
        <div class="content-wrapper" style="min-height: calc(100vh - 73px)">
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-12">
                        </div>
                        <div class="col-sm-6">
                            <h1 class="m-0 text-dark">Home page</h1>
                        </div>
                    </div>
                </div>
            </div>
            <section class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header">
                                    <a class="btn btn-default btn-sm">
                                        Cadastrar Anuncio
                                        <i class="fa fa-plus"></i>
                                    </a>
                                </div>
                                <div class="card-body table-responsive p-0">
                                    <table class="table table-hover">
                                        <thead>
                                        <tr>
                                            <th>Descricao</th>
                                            <th>Ano/Modelo</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="anuncio in anuncios">
                                            <td>{{ anuncio.veiculo.descricao }}</td>
                                            <td>{{ anuncio.veiculo.ano_modelo }}</td>
                                            <td>
                                                <!--                                    <a class="btn btn-sm btn-primary" href="{{ base_url() ~ '/adm/anuncio/editar/' ~ anuncio.id_anuncio }}">Editar</a>-->
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">Nenhum registro encontrado</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'index',
        data () {
            return {
                anuncios: null,
            }
        },
        methods: {
            getAnuncios: function () {

                let urlBuscaApi = this.baseUrlAPI + 'anuncio';

                this.axios.get(urlBuscaApi).then(response => {
                    this.anuncios = response.data.anuncio;
                });
            },
        },
        mounted () {
            this.getAnuncios();
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
        columns: 2;
        -webkit-columns: 2;
        -moz-columns: 2;
    }

</style>
