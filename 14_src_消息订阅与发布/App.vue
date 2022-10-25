<template>
  <div class="app">
    <MySchool></MySchool>
    <MyStudent></MyStudent>
  </div>
</template>

<script>
// 引入组件
import MySchool from "./components/MySchool.vue";
import MyStudent from "./components/MyStudent.vue";
export default {
  name: "App",
  data() {
    return {
      studentName: "",
      schoolName: "",
    };
  },
  components: {
    MySchool,
    MyStudent,
  },
};
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>


