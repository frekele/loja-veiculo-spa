<template>
    <div>
        <navbar />
        <content-wrapper>
            <template v-slot:titulo>
                Veículos
            </template>
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <router-link :to="{ name: 'adm.veiculo.cadastro'}" class="btn btn-sm btn-default">
                                Cadastrar Veículo
                                <i class="fa fa-plus"></i>
                            </router-link>
                        </div>
                        <div class="card-body table-responsive p-0">
                            <list :acoes="botoesAcao" :columnName="columnName" :columnData="columnData" :data="veiculos" />
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
        name: 'adm.veiculo',
        components: {
            ContentWrapper,
            Navbar,
            List
        },
        data () {
            return {
                veiculos: [],
                columnName: ['Descrição', 'Ano/Modelo', 'Placa'],
                columnData: ['descricao', 'ano_modelo', 'placa'],
                botoesAcao: [
                    {
                        'isLink': true,
                        'class': 'btn btn-sm btn-primary',
                        'nomeAcao': 'Editar',
                        'url': function (data) {
                            return { name: 'adm.veiculo.editar', params: { id: data.id_veiculo }};
                        }
                    }
                ]
            }
        },
        methods: {
            getVeiculos: function () {
                this.axios.get(this.baseUrlAPI + 'veiculo').then(response => {
                    this.veiculos = response.data;
                })
            },
            editar: function (data) {
                this.$router.push({name: 'adm.veiculo.editar', params: { id: data.id_veiculo }});
            }
        },
        mounted() {
            this.getVeiculos();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
