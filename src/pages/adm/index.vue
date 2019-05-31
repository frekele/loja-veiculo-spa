<template>
    <div>
        <navbar />
        <content-wrapper>
            <template v-slot:titulo>
                Home
            </template>
            <div class="row">
                <div class="col-12 col-sm-6 col-md-4">
                    <router-link :to="{ name: 'adm.anuncio' }" class="info-box mb-3 text-black-50">
                        <span class="info-box-icon bg-warning elevation-1"><i class="fa fa-bullhorn"></i></span>
                        <div class="info-box-content">
                            <span class="info-box-text">Anúncios Ativos</span>
                            <span class="info-box-number">{{ info.anuncios }}</span>
                        </div>
                    </router-link>
                </div>
                <div class="col-12 col-sm-6 col-md-4">
                    <router-link :to="{ name: 'adm.veiculo' }" class="info-box mb-3 text-black-50">
                        <span class="info-box-icon bg-success elevation-1"><i class="fa fa-car"></i></span>

                        <div class="info-box-content">
                            <span class="info-box-text">Veículos Cadastrados</span>
                            <span class="info-box-number">{{ info.veiculos }}</span>
                        </div>
                    </router-link>
                </div>
                <div class="col-12 col-sm-6 col-md-4">
                    <router-link :to="{ name: 'adm.contato' }" class="info-box mb-3 text-black-50">
                        <span class="info-box-icon bg-danger elevation-1"><i class="fa fa-comment"></i></span>
                        <div class="info-box-content">
                            <span class="info-box-text">Contatos Site</span>
                            <span class="info-box-number">{{ info.contatos }}</span>
                        </div>
                    </router-link>
                </div>
            </div>
        </content-wrapper>
    </div>
</template>

<script>
    import Navbar from '@/components/layout/adm/navbar'
    import ContentWrapper from "@/components/layout/adm/content-wrapper";

    export default {
        name: 'adm',
        components: {
            ContentWrapper,
            Navbar,
        },
        data () {
            return {
                info: {}
            }
        },
        methods: {
            getInfoHome: function () {
                this.axios.get(this.baseUrlAPI + 'info-home').then(response => {
                    this.info = response.data;
                })
            },
        },
        mounted() {
            this.getInfoHome();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
