<template>
        <div>
            <navbar />
        <div class="content-wrapper" style="min-height: calc(100vh - 73px)">
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-12">
                        </div>
                        <div class="col-sm-6">
                            <h1 class="m-0 text-dark">Home page</h1>
                        </div>
                    </div>
                </div>
            </div>
            <section class="content">
                <div class="container-fluid">
                    <p>inicio</p>
                </div>
            </section>
        </div>
        </div>
</template>

<script>
    import Navbar from '@/components/layout/navbar'

    export default {
        name: 'home',
        components: {
            Navbar,
        },
        data () {
            return {
                // anuncios: [],
                // filtros: {
                //     categoria: [],
                //     fabricante: [],
                //     tipo: [],
                // },
                // selecionados: {
                //     categoria: '',
                //     tipo: '',
                //     fabricante: '',
                //     descricao: '',
                // },
                // loading: true,
                // semAnuncio: false
            }
        },
        methods: {
            // getVeiculos: function () {
            //
            //     this.loading = true;
            //     this.semAnuncio = false;
            //     this.anuncios = [];
            //     let urlBuscaApi = this.baseUrlAPI + 'anuncio';
            //     let params = { params: this.selecionados };
            //
            //     this.axios.get(urlBuscaApi, params).then(response => {
            //
            //         let anuncios = response.data.anuncios;
            //         this.loading = false;
            //         this.anuncios = anuncios;
            //
            //         if (anuncios.length === 0) {
            //             this.semAnuncio = true;
            //         }
            //     });
            // },
            // onChange: function () {
            //     this.getVeiculos();
            // },
            // getFiltros: function () {
            //     this.axios.get(this.baseUrlAPI + 'filtros').then(response => {
            //         this.filtros = response.data.filtros;
            //     });
            // }

        },
        mounted () {
            // this.getVeiculos();
            // this.getFiltros();
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    /*.card-horizontal {*/
        /*display: flex;*/
        /*flex: 1 1 auto;*/
    /*}*/

    /*div.item img:hover {*/
        /*transform: scale(1.03);*/
        /*transition: .3s;*/
    /*}*/

    /*div.item img {*/
        /*transform: scale(1);*/
        /*transition: .3s;*/
    /*}*/

    /*img.heig-img {*/
        /*height: 200px;*/
    /*}*/

    /*div.margin-bt {*/
        /*margin-bottom: 30px;*/
    /*}*/

    /*.list-group-flush li {*/
        /*padding: 5px 0px;*/
    /*}*/
</style>
