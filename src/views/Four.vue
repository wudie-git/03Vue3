<template>
    <div id="four">
        <p>您的性别是：{{sex}}</p>
        <p>你的爱好是：{{hobbies}}</p>
        <p>个人简介：{{msg}}</p>
    </div>
</template>

<script>
    export default {
        name:"four",
        data(){
            return{
                sex:this.$store.state.sex,
                hobbies:this.$store.state.hobbies.join(","),
                msg:this.$store.state.msg
            }
        },
        methods: {

        }
    }
</script>
<style scoped>

</style>