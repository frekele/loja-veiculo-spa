<template>
    <div>
        <navbar />
        <content-wrapper>
            <template v-slot:titulo>
                Opcionais
            </template>
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <router-link :to="{ name: 'adm.opcional.cadastro'}" class="btn btn-sm btn-default">
                                Cadastrar Opcional
                                <i class="fa fa-plus"></i>
                            </router-link>
                        </div>
                        <div class="card-body table-responsive p-0">
                            <list :acoes="botoesAcao" :columnName="columnName" :columnData="columnData" :data="opcionais" />
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
        name: 'adm.opcional',
        components: {
            ContentWrapper,
            Navbar,
            List
        },
        data () {
            return {
                opcionais: [],
                columnName: ['Descrição'],
                columnData: ['nome'],
                botoesAcao: [
                    {
                        'isLink': true,
                        'class': 'btn btn-sm btn-primary',
                        'nomeAcao': 'Editar',
                        'url': function (data) {
                            return { name: 'adm.opcional.editar', params: { id: data.id_opcional }};
                        }
                    }
                ]
            }
        },
        methods: {
            getOpcionais: function () {
                this.axios.get(this.baseUrlAPI + 'veiculo/opcional').then(response => {
                    this.opcionais = response.data;
                })
            },
        },
        mounted() {
            this.getOpcionais();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
