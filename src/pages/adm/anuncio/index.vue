<template>
    <div>
        <navbar />
        <content-wrapper>
            <template v-slot:titulo>
                Anúncios
            </template>
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <router-link :to="{ name: 'adm.anuncio.cadastro'}" class="btn btn-sm btn-default">
                                Cadastrar Anúncio
                                <i class="fa fa-plus"></i>
                            </router-link>
                        </div>
                        <div class="card-body table-responsive p-0">
                            <list :acoes="botoesAcao" :columnName="columnName" :columnData="columnData" :data="anuncios" :format="format" />
                        </div>
                    </div>
                </div>
            </div>
        </content-wrapper>
    </div>
</template>

<script>
    import Navbar from '@/components/layout/adm/navbar'
    import ContentWrapper from "@/components/layout/adm/content-wrapper";
    import List from "@/components/data/list";

    export default {
        name: 'adm.anuncio',
        components: {
            ContentWrapper,
            Navbar,
            List
        },
        data () {
            return {
                anuncios: [],
                columnName: ['Veículo', 'Valor', 'Ativo'],
                columnData: ['veiculo.descricao', 'valor', 'ativo'],
                format: {
                    ativo: (data) => {
                        return data === 1 ? 'Sim' : 'Não'
                    },
                    valor: (data) => {
                        return this.formatMoeda(data);
                    }
                },
                botoesAcao: [
                    {
                        'isLink': true,
                        'class': 'btn btn-sm btn-primary',
                        'nomeAcao': 'Editar',
                        'url': function (data) {
                            return { name: 'adm.anuncio.editar', params: { id: data.id_anuncio}};
                        }
                    },
                    {
                        'isButton': true,
                        'class': 'btn btn-sm btn-danger margin-left-btn-list',
                        'nomeAcao': 'Excluir',
                        'acao': (data) => {

                            let params = {
                                method: 'delete',
                                url: this.baseUrlAPI + 'anuncio/deletar/' + data.id_anuncio,
                                headers: { Authorization: 'Bearer ' +  this.$store.getters.getUsuario.token }
                            };

                            this.axios(params).then(response => {
                                this.flash('Excluído com sucesso!', 'success');
                                this.getAnuncios();
                            }).catch(error => {
                                this.flash('Erro ao excluir!', 'error');
                            });
                        }
                    },
                    {
                        'isLink': true,
                        'class': 'btn btn-sm btn-info margin-left-btn-list',
                        'nomeAcao': 'Ver Anuncio',
                        'url': function (data) {
                            return { name: 'anuncio', params: { id: data.id_anuncio }};
                        }
                    },
                ]
            }
        },
        methods: {
            getAnuncios: function () {
                this.axios.get(this.baseUrlAPI + 'anuncio').then(response => {
                    this.anuncios = response.data.anuncios;
                })
            },
        },
        mounted() {
            this.getAnuncios();
        }
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
