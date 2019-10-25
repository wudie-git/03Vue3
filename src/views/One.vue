<template>
  <div class="one">
<p>1.请问你的性别是</p>
<p>
  <input type="radio" v-model="redios" name="sex" value="男"/>男
  <input type="radio" v-model="redios" name="sex" value="女"/>女
  <input type="radio" v-model="redios" name="sex" value="保密"/>保密
</p>
<p><a href="#" @click="doClick()">下一步</a>
  <a href="#" @click="reset()">重置</a></p>
    <router-view/>
  </div>
</template>
<script>
    export default {
        name:"two",
        data(){
            return{
                redios:''
            }
        },
        methods: {
            doClick() {
                this.$router.push("/two")
                this.$store.commit("addSex",this.redios);
            },
            reset(){
                this.redios=''
            }
        }
    }
</script>
<style>
  .one{
    text-align: center;
    color: #2c3e50;
  }

  p a{
    text-decoration: none;
    padding: 10px;
    color: #2c3e50;
  }
</style>
