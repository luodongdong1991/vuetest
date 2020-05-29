<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <el-button>nihao</el-button>
    <form action>
      <input type="text" name="name" v-model="comments.name" />
      <input type="text" name="message" v-model="comments.message" />
      <button @click='postMsg' type="submit">clickmepost</button>
    </form>
  </div>
</template>

<script>
import apiData from "../api/api";
import api from '../api/api';
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      kk: "10",
      //评论
      comments: {
        name: "0",
        message: ""
      }
    };
  },
  methods: {
    async postMsg(e){
      e.preventDefault();     
      let ret = await apiData.comments.postData({name:'10',message:'10'})
      console.log(ret.data)
    }
  },
  async created() {
    let ret = await apiData.banner.getData();
    console.log(ret.data);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
