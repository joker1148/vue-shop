<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script>
import storage from './stroage/index.js'
export default {
  data(){
    return {
      res:""
    }
  },
  mounted(){
    // storage.setItem("a",{a:1})
    storage.clear("a")

    // let url = "/api/common/adver-getadver"
    // // this.$http.get(url).then((res)=>{
    // //   console.log(res)
    // // })
    // this.$jsonp(url,(err,res)=>{
    //   console.log(res)
    // })

    //本地集成mock.js实现数据mock
    this.$http.get("/user/login").then((res)=>{
      console.log(res)
      this.res = res
    })
  }  
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
