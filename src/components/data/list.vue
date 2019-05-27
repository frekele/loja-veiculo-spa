<template>
    <table class="table table-hover">
        <thead>
            <tr>
                <th v-for="head in tableHead">{{ head.nome }}</th>
                <th>Ação</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="data in tableBody">
                <td>{{ data.nome }}</td>
                <td>
                    <button v-on:click="editar(data)" class="btn btn-sm btn-primary">
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
        props: [ 'tableHead', 'tableBody' ],
        methods: {
            editar(data) {
                this.$emit('editar', data);
            }
        }
    };
</script>