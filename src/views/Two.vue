<template>
  <div class="two">
    <p>2.请选择你的兴趣爱好</p>
    <p><input type="checkbox" v-model="check"  value="看书" />看书
    <input type="checkbox" v-model="check" value="游泳" />游泳
    <input type="checkbox" v-model="check" value="跑步" />跑步
    <input type="checkbox" v-model="check" value="看电影" />看电影
    <input type="checkbox" v-model="check" value="听音乐" />听音乐
    <input type="checkbox" v-model="check" value="动漫" />动漫</p>
    <p>
      <a @click="doClick()">下一步</a>
      <a @click="doClick2()">上一步</a>
      <a href="#" @click="reset()">重置</a></p>
  </div>
</template>
<script>
    export default {
        name:"two",
        data(){
            return{
                check:[]
            }
        },
        methods: {
            doClick() {
                this.$router.push("/three")
                this.$store.commit("addHobbies",this.check);
            },
            doClick2(){
                this.$router.push("/")
            },
            reset(){
                this.check=[]
            }
        }
    }
</script>
<style>
  .two{
    text-align: center;
    color: #2c3e50;
  }

  p a{
    text-decoration: none;
    padding: 10px;
    color: #2c3e50;
  }
</style>
