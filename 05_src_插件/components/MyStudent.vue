<template>
  <div class="demo2">
    <h2>学生名字：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <input type="text" v-fbind:value="n" />
    <br /><br />
    <button @click="n++">点我n+1</button>
    <button @click="test">点我测试hello方法</button>
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
    test() {
      this.$hello();
    },
  },
};
</script>
