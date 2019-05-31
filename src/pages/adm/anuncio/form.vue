<template>
    <div>
        <navbar />
        <content-wrapper>
            <template v-slot:titulo>
                Cadastro de Anúncio
            </template>
            <div class="row">
                <div class="col-12">
                    <div class="card card-default">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="veiculo">Veículo</label>
                                        <select v-model="anuncio.id_veiculo" id="veiculo" class="form-control">
                                            <option value="">Selecione</option>
                                            <option v-for="veiculo in veiculos" :value="veiculo.id_veiculo">{{ veiculo.descricao }}</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="nome">Valor</label>
                                        <input v-model="anuncio.valor" type="text" class="form-control" id="nome" placeholder="Valor">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="imagem">Imagem da Capa do Anúncio</label>
                                        <div class="input-group">
                                            <div class="custom-file">
                                                <input v-on:change="processFile($event)" type="file" class="custom-file-input" id="imagem">
                                                <label class="custom-file-label" for="imagem">Escolha a imagem do anúncio</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="edit && todasImagens.length > 0">
                                        <div v-for="imagem in todasImagens" class="text-center">
                                            <img style="max-width: 100%" class="responsive-img" :src="urlImg + anuncio.id_anuncio + '/' + imagem">
                                            <br/>
                                            <button v-on:click="removerImagem(imagem)" class="btn btn-sm btn-danger">Remover</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <router-link :to="{ name: 'adm.anuncio'}" class="btn btn-sm btn-default">Voltar</router-link>
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
        name: 'adm.anuncio.cadastro',
        components: {
            ContentWrapper,
            Navbar,
        },
        data () {
            return {
                anuncio: {
                    id_veiculo: '',
                    valor: '',
                    observacao: '',
                    imagem_capa: ''
                },
                veiculos: [],
                urlImg: 'http://localhost:1234/upload/anuncio/',
                edit: false,
                todasImagens: []
            }
        },
        methods: {
            processFile(event) {
                this.anuncio.imagem_capa = event.target.files;
            },
            removerImagem: function (img) {
                this.todasImagens.splice(this.todasImagens.indexOf(img), 1);
            },
            getAnuncio: function () {
                let url = this.baseUrlAPI + 'anuncio/';

                this.axios.get(url + this.$route.params.id).then(response => {

                    this.anuncio = response.data.anuncio;
                    this.todasImagens.push(JSON.parse(JSON.stringify(response.data.anuncio.imagem_capa)));
                    this.anuncio.imagem_capa = response.data.anuncio.imagem_capa;
                })

            },
            getVeiculos: function () {

                let url = this.baseUrlAPI + 'veiculo';

                this.axios.get(url).then(response => {

                    let veiculos = [];

                    for (let i in response.data) {
                        let v = {
                            descricao: response.data[i].descricao + ' - ' + response.data[i].fabricante.nome + ' - ' + response.data[i].ano_modelo,
                            id_veiculo: response.data[i].id_veiculo
                        };

                        veiculos.push(v);
                    }

                    this.veiculos = veiculos;
                })
            },
            save: function () {


                let url = this.baseUrlAPI + 'anuncio/',
                    method = '',
                    header = { Authorization: 'Bearer ' +  this.$store.getters.getUsuario.token },
                    data;

                if (typeof this.$route.params.id !== 'undefined') {
                    method = 'put';
                    url += 'editar/' + this.$route.params.id;
                    data = this.anuncio;

                    let formData = new FormData();
                    formData.append('imagem_capa[1]', this.anuncio.imagem_capa[0]);

                    this.axios({
                        method: 'post',
                        url: this.baseUrlAPI + 'anuncio/edit-imagem/' + this.$route.params.id,
                        data: formData,
                        headers: {
                            Authorization: 'Bearer ' +  this.$store.getters.getUsuario.token,
                            'Content-Type': 'multipart/form-data'
                        }
                    }).then(response => {
                    }).catch(response => {
                    });

                } else {
                    method = 'post';
                    url += 'cadastro';
                    header['Content-Type'] = 'multipart/form-data';
                    let formData = new FormData();
                    formData.append('valor', this.anuncio.valor);
                    formData.append('id_veiculo', this.anuncio.id_veiculo);
                    formData.append('imagem_capa[1]', this.anuncio.imagem_capa[0]);

                    data = formData;
                }

                this.axios({
                    method: method,
                    url: url,
                    data: data,
                    headers: header
                }).then(response => {
                    this.flash('Anúncio salvo com sucesso!', 'success');
                    this.$router.push({name: 'adm.anuncio'});
                }).catch(response => {
                    console.log(response);
                    this.flash('Erro ao salvar anúncio ', 'error');
                });
            }
        },
        mounted() {
            if (typeof this.$route.params.id !== 'undefined') {
                this.getAnuncio();
                this.edit = true;
            }

            this.getVeiculos();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
