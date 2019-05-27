<template>
    <div>
        <navbar />
        <content-wrapper>
            <template v-slot:titulo>
                Categorias
            </template>
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <router-link :to="{ name: 'adm.categoria.cadastro'}" class="btn btn-sm btn-default">
                                Cadastrar Categoria
                                <i class="fa fa-plus"></i>
                            </router-link>
                        </div>
                        <div class="card-body table-responsive p-0">
                            <list :tableHead="head" :tableBody="categorias" @editar="editar" />
                        </div>
                    </div>
                </div>
            </div>
        </content-wrapper>
    </div>
</template>

<script>
    import Navbar from '@/components/layout/navbar'
    import ContentWrapper from "@/components/layout/content-wrapper";
    import List from "@/components/data/list";

    export default {
        name: 'adm.categoria',
        components: {
            ContentWrapper,
            Navbar,
            List
        },
        data () {
            return {
                categorias: [],
                head: [{'nome' : 'Descrição'}]
            }
        },
        methods: {
            getCategorias: function () {
                this.axios.get(this.baseUrlAPI + 'veiculo/categoria').then(response => {
                    this.categorias = response.data;
                })
            },
            editar: function (data) {
                this.$router.push({name: 'adm.categoria.editar', params: { id: data.id_veiculo_categoria }});
            }
        },
        mounted() {
            this.getCategorias();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
