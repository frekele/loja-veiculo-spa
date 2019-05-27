<template>
    <div class="form-group">
        <label :for="label">{{ label }}</label>
        <select v-model="model" :id="label" class="form-control">
            <option v-for="d in data">{{ d[column] }}</option>
        </select>
    </div>
</template>
<script>
    export default {
        name: 'SelectForm',
        props: ['data', 'label', 'column', 'model'],
    };
</script>