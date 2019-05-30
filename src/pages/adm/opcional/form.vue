<template>
    <div>
        <navbar />
        <content-wrapper>
            <template v-slot:titulo>
                Cadastro de Opcional
            </template>
            <div class="row">
                <div class="col-12">
                    <div class="card card-default">
                        <div class="card-body">
                            <div class="form-group">
                                <label for="nome">Descricao</label>
                                <input v-model="opcional.nome" type="text" class="form-control" id="nome" placeholder="Nome do Opcional">
                            </div>
                        </div>
                        <div class="card-footer">
                            <router-link :to="{ name: 'adm.opcional'}" class="btn btn-sm btn-default">Voltar</router-link>
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
        name: 'adm.opcional.cadastro',
        components: {
            ContentWrapper,
            Navbar,
        },
        data () {
            return {
                opcional: {
                    nome: ''
                }
            }
        },
        methods: {
            getOpcional: function () {
                this.axios.get(this.baseUrlAPI + 'opcional/' + this.$route.params.id).then(response => {
                    this.opcional = response.data.opcional;
                })
            },
            save: function () {

                let url = this.baseUrlAPI + 'opcional/';
                url += (typeof this.$route.params.id === 'undefined') ? 'cadastro' : 'editar/' + this.$route.params.id;

                let method = (typeof this.$route.params.id === 'undefined') ? 'post' : 'put';

                this.axios({
                    method: method,
                    url: url,
                    data: this.opcional,
                    headers: { Authorization: 'Bearer ' +  this.$store.getters.getUsuario.token }
                }).then(response => {
                    this.$router.push({name: 'adm.opcional'});
                }).catch(response => {
                    alert('Erro ao salvar' + response.data.message)
                });
            }
        },
        mounted() {
            if (typeof this.$route.params.id !== 'undefined') {
                this.getOpcional();
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
