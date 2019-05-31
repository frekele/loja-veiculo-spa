<template>
    <div>
        <navbar />
        <content-wrapper>
            <template v-slot:titulo>
                Usuários
            </template>
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <router-link :to="{ name: 'adm.usuario.cadastro'}" class="btn btn-sm btn-default">
                                Cadastrar Usuário
                                <i class="fa fa-plus"></i>
                            </router-link>
                        </div>
                        <div class="card-body table-responsive p-0">
                            <list :acoes="botoesAcao" :columnName="columnName" :columnData="columnData" :data="usuarios" :format="format" />
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
    import List from "@/components/data/list";

    export default {
        name: 'adm.usuario',
        components: {
            ContentWrapper,
            Navbar,
            List
        },
        data () {
            return {
                usuarios: [],
                columnName: ['Login', 'Ativo'],
                columnData: ['login', 'ativo'],
                botoesAcao: [
                    {
                        'isLink': true,
                        'class': 'btn btn-sm btn-primary',
                        'nomeAcao': 'Editar',
                        'url': function (data) {
                            return { name: 'adm.usuario.editar', params: { id: data.id_usuario }};
                        }
                    }
                ],
                format: {
                    ativo: (data) => {
                        return data === '1' ? 'Sim' : 'Não'
                    }
                },
            }
        },
        methods: {
            getUsuarios: function () {
                this.axios.get(this.baseUrlAPI + 'usuario').then(response => {
                    this.usuarios = response.data.usuarios;
                })
            }
        },
        mounted() {
            this.getUsuarios();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
