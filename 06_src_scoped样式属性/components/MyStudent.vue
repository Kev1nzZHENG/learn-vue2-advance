<template>
  <div class="demo">
    <h2 class="qwe">学生名字：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: "MyStudent",
  data() {
    return {
      name: "牛马",
      age: 18,
    };
  },
};
</script>

<style lang="less" scoped>
.demo {
  background-color: skyblue;
  .qwe {
    font-size: 40px;
    color: red;
  }
}
</style>
