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
                            <router-link :to="{ name: 'opcional/cadastro'}" class="btn btn-sm btn-default">
                                Cadastrar Opcional
                                <i class="fa fa-plus"></i>
                            </router-link>
                        </div>
                        <div class="card-body table-responsive p-0">
                            <table class="table table-hover">
                                <thead>
                                <tr>
                                    <th>Descricao</th>
                                    <th>Acao</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="opcional in opcionais">
                                        <td>{{ opcional.nome }}</td>
                                        <td>
                                            <router-link :to="{ name: 'opcional/editar', params: { id: opcional.id_opcional }}" class="btn btn-sm btn-primary">
                                                Editar
                                            </router-link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </content-wrapper>
    </div>
</template>

<script>
    import Navbar from '@/components/layout/navbar'
    import ContentWrapper from "../../components/layout/content-wrapper";

    export default {
        name: 'home',
        components: {
            ContentWrapper,
            Navbar,
        },
        data () {
            return {
                opcionais: []
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
