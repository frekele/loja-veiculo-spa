<template>
    <div>
        <navbar />
        <content-wrapper>
            <template v-slot:titulo>
                Cadastro de Usuário
            </template>
            <div class="row">
                <div class="col-12">
                    <div class="card card-default">
                        <div class="card-body">
                            <div class="form-group">
                                <label for="nome">Login</label>
                                <input v-model="usuario.login" type="text" class="form-control" id="nome" placeholder="Login do usuário">
                            </div>
                            <div class="form-group">
                                <label for="senha">Senha</label>
                                <input type="password" class="form-control" id="senha">
                            </div>
                            <div class="form-group">
                                <label>Ativo</label><br/>
                                <div class="radio">
                                    <label style="font-weight: normal">
                                        <input v-model="usuario.ativo" value="1" type="radio">
                                        Sim
                                    </label>
                                    <label style="font-weight: normal; margin-left: 20px">
                                        <input v-model="usuario.ativo" value="0" type="radio">
                                        Não
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <router-link :to="{ name: 'adm.usuario'}" class="btn btn-sm btn-default">Voltar</router-link>
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
        name: 'adm.usuario.cadastro',
        components: {
            ContentWrapper,
            Navbar,
        },
        data () {
            return {
                usuario: {
                    login: '',
                    senha: '',
                    ativo: ''
                }
            }
        },
        methods: {
            getUsuario: function () {
                this.axios.get(this.baseUrlAPI + 'usuario/' + this.$route.params.id).then(response => {
                    this.usuario = response.data.usuario;
                })
            },
            save: function () {

                let url = this.baseUrlAPI + 'usuario/';
                url += (typeof this.$route.params.id === 'undefined') ? 'cadastro' : 'editar/' + this.$route.params.id;

                let method = (typeof this.$route.params.id === 'undefined') ? 'post' : 'put';

                let data = this.usuario;
                data.senha = $('#senha').val();

                this.axios({
                    method: method,
                    url: url,
                    data: data,
                    headers: { Authorization: 'Bearer ' +  this.$store.getters.getUsuario.token }
                }).then(response => {
                    this.flash('Salvo com sucesso!', 'success');
                    this.$router.push({name: 'adm.usuario'});
                }).catch(error => {
                    console.log(error.response);
                    if (error.response.status === 400) {
                        this.flash('Erro ao salvar <br/>' + error.response.data.message, 'error');
                    }
                });
            }
        },
        mounted() {
            if (typeof this.$route.params.id !== 'undefined') {
                this.getUsuario();
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
