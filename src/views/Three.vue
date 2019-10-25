<template>
    <div class="tree">
        <p>3.请介绍一下自己</p>
        <textarea rows="4" cols="40" v-model="message"></textarea>
        <p>
            <a @click="doClick()">提交</a>
            <a @click="doClick2()">上一步</a>
            <a href="#" @click="reset()">重置</a></p>
    </div>
</template>

<<script>
    export default {
        name:"three",
        data(){
            return{
                message:''
            }
        },
        methods: {
            doClick() {
                this.$router.push("/four")
                this.$store.commit("addMsg",this.message);

            },
            doClick2() {
                this.$router.push("/two")
            },
            reset(){
                this.message=''
            }
        }
    }
</script>

<style scoped>

</style>