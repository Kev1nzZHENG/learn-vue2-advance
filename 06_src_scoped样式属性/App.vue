<template>
  <div>
    <h1 class="demo">测试文字1</h1>
    <MySchool></MySchool>
    <hr />
    <MyStudent></MyStudent>
  </div>
</template>

<script>
// 引入组件
import MySchool from "./components/MySchool.vue";
import MyStudent from "./components/MyStudent.vue";
export default {
  name: "App",
  components: {
    MySchool,
    MyStudent,
  },
};
</script>

<style lang="less">
.demo {
  background-color: pink;
  .qwe {
    color: red;
  }
}
</style>
