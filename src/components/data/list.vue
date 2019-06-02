<template>
    <table class="table table-hover">
        <thead>
            <tr>
                <th v-for="head in columnName">{{ head }}</th>
                <th v-if="acoes">Ação</th>
            </tr>
        </thead>
        <tbody v-if="data.length > 0">
            <tr v-for="d in data">
                <td v-for="column in columnData">{{ montarVisualizacao(d, column) }}</td>
                <td v-if="acoes">
                    <button v-for="acao in acoes" v-if="acao.isButton" :class="acao.class" v-on:click="acao.acao(d)">{{ acao.nomeAcao }}</button>
                    <router-link target="_blank" v-else-if="acao.isLink" :class="acao.class" :to="acao.url(d)" >{{ acao.nomeAcao }}</router-link>
                </td>
            </tr>
        </tbody>
        <tbody v-else>
            <tr>
                <td :colspan="columnName.length + acoes.length">Nenhum registro encontrado</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
    export default {
        name: 'List',
        props: ['columnName', 'data', 'columnData', 'format', 'acoes'],
        methods: {
            montarVisualizacao(d, column) {
                let columns = column.split('.');
                let data = d;

                for (let i in columns) {

                    data = data[columns[i]];

                    if (data === null) {
                        return ''
                    } else {
                        if (typeof this.format !== 'undefined') {
                            if (this.format.hasOwnProperty(columns[i]) && typeof this.format[columns[i]] === 'function') {
                                data = this.format[columns[i]](data);
                            }
                        }

                    }

                }

                return data;
            }
        }
    };
</script>
<style scoped>
    .margin-left-btn-list {
        margin-left: 10px;
    }
</style>