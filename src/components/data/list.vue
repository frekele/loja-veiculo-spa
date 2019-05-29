<template>
    <table class="table table-hover">
        <thead>
            <tr>
                <th v-for="head in columnName">{{ head }}</th>
                <th>Ação</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="d in data">
                <td v-for="column in columnData">{{ montarVisualizacao(d, column) }}</td>
                <td>
                    <button v-on:click="editar(d)" class="btn btn-sm btn-primary">
                        Editar
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>
    export default {
        name: 'List',
        props: ['columnName', 'data', 'columnData', 'format'],
        methods: {
            editar(data) {
                this.$emit('editar', data);
            },
            montarVisualizacao(d, column) {
                let columns = column.split('.');
                let data = d;

                for (let i in columns) {
                    data = data[columns[i]]

                    console.log(this.format);
                    if (typeof this.format !== 'undefined') {
                        if (this.format.hasOwnProperty(columns[i]) && typeof this.format[columns[i]] === 'function') {
                            data = this.format[columns[i]](data);
                        }
                    }
                }

                return data;
            }
        }
    };
</script>