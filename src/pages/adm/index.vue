<template>
    <div>
        <navbar />
        <content-wrapper>
            <template v-slot:titulo>
                Home
            </template>
        </content-wrapper>
    </div>
</template>

<script>
    import Navbar from '@/components/layout/navbar'
    import ContentWrapper from "@/components/layout/content-wrapper";

    export default {
        name: 'adm',
        components: {
            ContentWrapper,
            Navbar,
        },
        data () {
            return {
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
