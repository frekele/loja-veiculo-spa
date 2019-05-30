<template>
    <div>
        <navbar />
        <content-wrapper>
            <template v-slot:titulo>
                Cadastro de Categoria
            </template>
            <div class="row">
                <div class="col-12">
                    <div class="card card-default">
                        <div class="card-body">
                            <div class="form-group">
                                <label for="nome">Descricao</label>
                                <input v-model="categoria.nome" type="text" class="form-control" id="nome" placeholder="Nome da Categoria">
                            </div>
                        </div>
                        <div class="card-footer">
                            <router-link :to="{ name: 'adm.categoria'}" class="btn btn-sm btn-default">Voltar</router-link>
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
        name: 'adm.categoria.cadastro',
        components: {
            ContentWrapper,
            Navbar,
        },
        data () {
            return {
                categoria: {
                    nome: ''
                }
            }
        },
        methods: {
            getCategoria: function () {
                this.axios.get(this.baseUrlAPI + 'categoria/' + this.$route.params.id).then(response => {
                    this.categoria = response.data.categoria;
                })
            },
            save: function () {

                let url = this.baseUrlAPI + 'categoria/';
                url += (typeof this.$route.params.id === 'undefined') ? 'cadastro' : 'editar/' + this.$route.params.id;

                let method = (typeof this.$route.params.id === 'undefined') ? 'post' : 'put';

                this.axios({
                    method: method,
                    url: url,
                    data: this.categoria,
                    headers: { Authorization: 'Bearer ' +  this.$store.getters.getUsuario.token }
                }).then(response => {
                    this.flash('Salvo com sucesso!', 'success');
                    this.$router.push({name: 'adm.categoria'});
                }).catch(response => {
                    this.flash('Erro ao salvar', 'error');
                });
            }
        },
        mounted() {
            if (typeof this.$route.params.id !== 'undefined') {
                this.getCategoria();
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
