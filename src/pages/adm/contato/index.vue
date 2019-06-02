<template>
    <div>
        <navbar />
        <content-wrapper>
            <template v-slot:titulo>
                Contatos
            </template>
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body table-responsive p-0">
                            <list :acoes="botoesAcao" :columnName="columnName" :columnData="columnData" :data="contatos" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="modal_contato" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Contato</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p v-if="contato.id_anuncio">
                               <router-link :to="{ name: 'adm.anuncio.editar', params: {id: contato.id_anuncio } }" target="_blank">
                                    Clique para acessar o anúncio que este cliente fez o contato
                               </router-link>
                            </p>
                            <div class="form-group">
                                <label class="col-form-label">Nome</label>
                                <p>{{ contato.nome }}</p>
                            </div>
                            <div class="form-group">
                                <label class="col-form-label">E-mail</label>
                                <p>{{ contato.email }}</p>
                            </div>
                            <div class="form-group">
                                <label class="col-form-label">Telefone</label>
                                <p>{{ contato.telefone }}</p>
                            </div>
                            <div class="form-group">
                                <label class="col-form-label">Observação</label>
                                <p>{{ contato.observacao }}</p>
                            </div>
                            <hr>
                            <div class="form-group">
                                <label class="col-form-label">Veículo</label>
                                <p v-if="contato.anuncio">{{ contato.anuncio.veiculo.descricao }}</p>
                                <p v-else>{{ contato.veiculo.descricao }}</p>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary close-modal" data-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
        </content-wrapper>
    </div>
</template>

<script>
    import Navbar from '@/components/layout/adm/navbar';
    import ContentWrapper from "@/components/layout/adm/content-wrapper";
    import List from "@/components/data/list";

    export default {
        name: 'adm.contato',
        components: {
            ContentWrapper,
            Navbar,
            List
        },
        data () {
            return {
                contatos: [],
                contato: { anuncio: { veiculo: { descricao: '' }}},
                columnName: ['Nome', 'Telefone', 'Veículo'],
                columnData: ['nome', 'telefone', 'anuncio.veiculo.descricao'],
                botoesAcao: [
                    {
                        'isButton': true,
                        'class': 'btn btn-sm btn-warning',
                        'nomeAcao': 'Visualizar',
                        'acao': (data) => {

                            if (data.anuncio === null) {
                                if (typeof data.data === 'string') {
                                    let d = JSON.parse(data.data);
                                    let descricao = d.veiculo.descricao;

                                    this.contato = data;
                                    this.contato.anuncio = { veiculo: { descricao: '' }};
                                    this.contato.anuncio.veiculo.descricao = descricao;
                                }
                            } else {
                                this.contato = data;
                            }

                            $('#modal_contato').modal({
                                backdrop: 'static',
                                show: true
                            });
                        }
                    }
                ],
            }
        },
        methods: {
            getContatos: function () {
                this.axios.get(this.baseUrlAPI + 'anuncio/contatos').then(response => {
                    this.contatos = response.data.contatos;
                })
            },
        },
        mounted() {
            this.getContatos();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
