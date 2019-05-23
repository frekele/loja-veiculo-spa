<template>
    <div class="content-wrapper" style="min-height: calc(100vh - 73px)">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-12">
                    </div>
                    <div class="col-sm-6">
                        <h1 class="m-0 text-dark"><slot name="titulo">Titulo</slot></h1>
                    </div>
                </div>
            </div>
        </div>
        <section class="content">
            <div class="container-fluid">
                <slot></slot>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'content-wrapper',
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
