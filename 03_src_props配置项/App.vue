<template>
  <div>
    <MyStudent name="张三" sex="男" :age="18"></MyStudent>
    <hr />
  </div>
</template>

<script>
// 引入组件
import MyStudent from "./components/MyStudent.vue";
export default {
  name: "App",
  components: {
    MyStudent,
  },
};
</script>
