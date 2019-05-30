<template>
    <div>
        <navbar />
        <content-wrapper>
            <template v-slot:titulo>
                Cadastro de Tipo de Combustível
            </template>
            <div class="row">
                <div class="col-12">
                    <div class="card card-default">
                        <div class="card-body">
                            <div class="form-group">
                                <label for="nome">Descricao</label>
                                <input v-model="combustivel.nome" type="text" class="form-control" id="nome" placeholder="Nome do Tipo de Combustível">
                            </div>
                        </div>
                        <div class="card-footer">
                            <router-link :to="{ name: 'adm.combustivel' }" class="btn btn-sm btn-default">Voltar</router-link>
                            <button v-on:click="save" class="btn btn-primary btn-sm">Salvar</button>
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

    export default {
        name: 'adm.combustivel.cadastro',
        components: {
            ContentWrapper,
            Navbar,
        },
        data () {
            return {
                combustivel: {
                    nome: ''
                }
            }
        },
        methods: {
            getTipoCombustivel: function () {
                this.axios.get(this.baseUrlAPI + 'combustivel/' + this.$route.params.id).then(response => {
                    this.combustivel = response.data.combustivel;
                })
            },
            save: function () {

                let url = this.baseUrlAPI + 'combustivel/';
                url += (typeof this.$route.params.id === 'undefined') ? 'cadastro' : 'editar/' + this.$route.params.id;

                let method = (typeof this.$route.params.id === 'undefined') ? 'post' : 'put';

                this.axios({
                    method: method,
                    url: url,
                    data: this.combustivel,
                    headers: { Authorization: 'Bearer ' +  this.$store.getters.getUsuario.token }
                }).then(response => {
                    this.$router.push({name: 'adm.combustivel'});
                }).catch(response => {
                    alert('Erro ao salvar' + response.data.message)
                });
            }
        },
        mounted() {
            if (typeof this.$route.params.id !== 'undefined') {
                this.getTipoCombustivel();
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
