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
                <td v-for="column in columnData">{{ d[column] }}</td>
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
        props: ['columnName', 'data', 'columnData'],
        methods: {
            editar(data) {
                this.$emit('editar', data);
            }
        }
    };
</script>