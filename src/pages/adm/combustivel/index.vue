<template>
    <div>
        <navbar />
        <content-wrapper>
            <template v-slot:titulo>
                Tipos de Combustível
            </template>
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <router-link :to="{ name: 'adm.combustivel.cadastro'}" class="btn btn-sm btn-default">
                                Cadastrar Tipo de Combustível
                                <i class="fa fa-plus"></i>
                            </router-link>
                        </div>
                        <div class="card-body table-responsive p-0">
                            <list :columnName="columnName" :columnData="columnData" :data="combustiveis" @editar="editar" />
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
        name: 'adm.combustivel',
        components: {
            ContentWrapper,
            Navbar,
            List
        },
        data () {
            return {
                combustiveis: [],
                columnName: ['Descrição'],
                columnData: ['nome'],
            }
        },
        methods: {
            getTiposCombustiveis: function () {
                this.axios.get(this.baseUrlAPI + 'veiculo/combustivel').then(response => {
                    this.combustiveis = response.data;
                })
            },
            editar: function (data) {
                this.$router.push({name: 'adm.combustivel.editar', params: { id: data.id_veiculo_combustivel }});
            }
        },
        mounted() {
            this.getTiposCombustiveis();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
