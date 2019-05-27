<template>
    <div>
        <navbar />
        <content-wrapper>
            <template v-slot:titulo>
                Cadastro de Veículo
            </template>
            <div class="row">
                <div class="col-12">
                    <div class="card card-default">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="nome">Modelo/Descrição</label>
                                        <input v-model="veiculo.descricao" type="text" class="form-control" id="nome" placeholder="Modelo">
                                    </div>
                                    <div class="form-group">
                                        <label for="ano_modelo">Ano/Modelo</label>
                                        <input v-model="veiculo.ano_modelo" type="text" class="form-control" id="ano_modelo" placeholder="Ano/Modelo">
                                    </div>
                                    <div class="form-group">
                                        <label for="potencia">Potência</label>
                                        <input v-model="veiculo.potencia" type="text" class="form-control" id="potencia" placeholder="Potência">
                                    </div>
                                    <div class="form-group">
                                        <label for="cor">Cor</label>
                                        <input v-model="veiculo.cor" type="text" class="form-control" id="cor" placeholder="Cor">
                                    </div>
                                    <div class="form-group">
                                        <label for="imagem">Imagens</label>
                                        <div class="input-group">
                                            <div class="custom-file">
                                                <input v-on:change="processFile($event)" multiple type="file" class="custom-file-input" id="imagem">
                                                <label class="custom-file-label" for="imagem">Escolha as imagens do veículo</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="tipo">Tipo de Veículo</label>
                                        <select v-model="veiculo.id_veiculo_tipo" id="tipo" class="form-control">
                                            <option v-for="tipo in adicionais.tipos" :value="tipo.id_veiculo_tipo">{{ tipo.nome }}</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="categoria">Categoria</label>
                                        <select v-model="veiculo.id_veiculo_categoria" id="categoria" class="form-control">
                                            <option v-for="categoria in adicionais.categorias" :value="categoria.id_veiculo_categoria">{{ categoria.nome }}</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="fabricante">Fabricante</label>
                                        <select v-model="veiculo.id_veiculo_fabricante" id="fabricante" class="form-control">
                                            <option v-for="fabricante in adicionais.fabricantes">{{ fabricante.nome }}</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="combustivel">Combustível</label>
                                        <select v-model="veiculo.id_veiculo_combustivel" id="combustivel" class="form-control">
                                            <option v-for="combustivel in adicionais.tiposCombustivel">{{ combustivel.nome }}</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label>Opcionais</label><br/>
                                        <div class="checkbox" v-for="opcional in adicionais.opcionais">
                                            <label style="font-weight: normal" :for="opcional.id_opcional">
                                                <input v-model="veiculo.opcional" :value="opcional.id_opcional" type="checkbox" :id="opcional.id_opcional">
                                                {{ opcional.nome }}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <router-link :to="{ name: 'adm.veiculo' }" class="btn btn-sm btn-default">Voltar</router-link>
                            <button v-on:click="save" class="btn btn-primary btn-sm">Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
        </content-wrapper>
    </div>
</template>

<script>
    import Navbar from '@/components/layout/navbar'
    import ContentWrapper from "@/components/layout/content-wrapper";

    export default {
        name: 'adm.veiculo.cadastro',
        components: {
            ContentWrapper,
            Navbar
        },
        data () {
            return {
                veiculo: {
                    descricao: '',
                    ano_modelo: '',
                    potencia: '',
                    cor: '',
                    cambio: '',
                    placa: '',
                    id_veiculo_tipo: '',
                    id_veiculo_categoria: '',
                    id_veiculo_combustivel: '',
                    id_veiculo_fabricante: '',
                    opcional: [],
                    imagem: [],
                },
                adicionais: {
                    categorias: [],
                    opcionais: [],
                    tipos: [],
                    tiposCombustivel: [],
                    fabricantes: [],
                }
            }
        },
        methods: {
            processFile(event) {
                this.veiculo.imagem = event.target.files;
            },
            getVeiculo: function () {
                this.axios.get(this.baseUrlAPI + 'veiculo/' + this.$route.params.id).then(response => {
                    this.veiculo = response.data.veiculo;
                })
            },
            getAdicionais: function () {
                this.axios.get(this.baseUrlAPI + 'veiculo/informacoes-veiculo').then(response => {
                    this.adicionais = response.data;
                })
            },
            save: function () {

                let url = this.baseUrlAPI + 'veiculo/';
                url += (typeof this.$route.params.id === 'undefined') ? 'cadastro' : 'editar/' + this.$route.params.id;

                let method = (typeof this.$route.params.id === 'undefined') ? 'post' : 'put';

                let formData = new FormData();
                formData.append('descricao', this.veiculo.descricao);
                formData.append('ano_modelo', this.veiculo.ano_modelo);
                formData.append('potencia', this.veiculo.potencia);
                formData.append('cor', this.veiculo.cor);
                formData.append('cambio', this.veiculo.cambio);
                formData.append('placa', this.veiculo.placa);
                formData.append('id_veiculo_tipo', this.veiculo.id_veiculo_tipo);
                formData.append('id_veiculo_categoria', this.veiculo.id_veiculo_categoria);
                formData.append('id_veiculo_combustivel', this.veiculo.id_veiculo_combustivel);
                formData.append('id_veiculo_fabricante', this.veiculo.id_veiculo_fabricante);

                if (this.veiculo.opcional.length > 0) {
                    for(var i = 0; i < this.veiculo.opcional.length; i++ ) {
                        formData.append('opcional[' + i + ']', this.veiculo.opcional[i]);
                    }
                }

                if (this.veiculo.imagem.length > 0) {
                    for(var i = 0; i < this.veiculo.imagem.length; i++ ){
                        let file = this.veiculo.imagem[i];
                        formData.append('imagem[' + i + ']', this.veiculo.imagem[i]);
                    }
                }

                this.axios({
                    method: method,
                    url: url,
                    data: formData,
                    headers: {
                        Authorization: 'Bearer ' +  this.$store.getters.getUsuario.token,
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(response => {
                    this.$router.push({name: 'adm.veiculo'});
                }).catch(response => {
                    alert('Erro ao salvar' + response.data.message)
                });
            }
        },
        mounted() {
            if (typeof this.$route.params.id !== 'undefined') {
                this.getVeiculo();
            }

            this.getAdicionais();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
