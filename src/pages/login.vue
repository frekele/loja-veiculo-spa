<template>
    <div class="login-box">
        <div class="login-logo">
            <a ><b>RF</b>Veiculos</a>
        </div>
        <div class="card">
            <div class="card-body login-card-body">
                <div class="input-group mb-3">
                    <input type="text" ref="login" v-model="usuario.login" class="form-control" placeholder="Login">
                    <div class="input-group-append">
                        <span class="fa fa-envelope input-group-text"></span>
                    </div>
                </div>
                <div class="input-group mb-3">
                    <input type="password" ref="login" v-model="usuario.senha" class="form-control" placeholder="Senha">
                    <div class="input-group-append">
                        <span class="fa fa-lock input-group-text"></span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <button v-on:click="login" type="submit" class="btn btn-primary btn-block btn-flat">Entrar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data () {
            return {
                usuario: {
                    login: '',
                    senha: '',
                }
            }
        },
        methods: {
            login: function () {

                if (this.usuario.login.trim().length === 0) {
                    return false;
                }

                if (this.usuario.senha.trim().length === 0) {
                    return false;
                }

                this.axios.post(this.baseUrlAPI + 'login', this.usuario).then(response => {

                    this.$store.commit('setUsuario', JSON.stringify(response.data.usuario));
                    this.$router.push('adm');

                }).catch(error => {
                    if (error.response.status === 401) {
                        alert('usuario ou senha invalido');
                    }
                });
            }
        },
        mounted () {
            if (this.$store.getters.getUsuario !== null) {
                this.$router.push('adm');
            }

            $('body').css('background', '#e9ecef');
        },
    }
</script>

<style scoped>

</style>
