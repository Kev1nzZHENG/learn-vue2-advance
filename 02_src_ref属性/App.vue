<template>
  <div>
    <h1 ref="test">测试文字</h1>
    <button @click="showDom" ref="btn">展示上面的DOM元素</button>
    <MySchool ref="school" id="sch"></MySchool>
  </div>
</template>

<script>
// 引入组件
import MySchool from "./components/MySchool.vue";
export default {
  name: "App",
  components: {
    MySchool,
  },
  methods: {
    showDom() {
      console.log(this.$refs.test); //真实DOM元素
      console.log(this.$refs.btn); //真实DOM元素
      console.log(this.$refs.school); //school组件的实例
      console.log(document.querySelector("#sch")); //school的template
    },
  },
};
</script>
