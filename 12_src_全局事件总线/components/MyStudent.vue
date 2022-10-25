<template>
  <div class="demo">
    <h2>学生名字：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="sendStudentName">把学生名发送给school组件</button>
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
  methods: {
    sendStudentName() {
      this.$bus.$emit("receiveStudentName", this.name);
    },
  },
};
</script>

<style scoped>
.demo {
  background-color: skyblue;
  padding: 5px;
  margin-top: 30px;
}
</style>
