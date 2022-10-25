<template>
  <div class="student">
    <h2 @click="showName">学生名字：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ age }}</h2>
  </div>
</template>

<script>
// 引入局部混合
// import { mixin1, mixin2 } from "../mixin";
export default {
  name: "MyStudent",
  data() {
    return {
      name: "牛马",
      sex: "男",
      age: 18,
      x: 666,
    };
  },
  mounted() {
    console.log("mounted!!!!!");
  },
  // 注册混合
  // mixins: [mixin1, mixin2],
};
</script>
