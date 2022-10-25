<template>
  <div>
    <MySchool></MySchool>
    <hr />
    <MyStudent></MyStudent>
  </div>
</template>

<script>
// 引入组件
import MyStudent from "./components/MyStudent.vue";
import MySchool from "./components/MySchool.vue";
export default {
  name: "App",
  components: {
    MyStudent,
    MySchool,
  },
};
</script>
