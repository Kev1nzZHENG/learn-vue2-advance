<template>
  <div class="demo">
    <h2>学生名字：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>当前的n值为:{{ num }}</h2>
    <button @click="add">点我n+1</button>
    <br />
    <button @click="sendStudentName">把学生姓名给APP</button>
    <button @click="unbindSend">解绑传送学生姓名事件</button>
    <br />
    <button @click="AllEvents">多个事件触发</button>
    <button @click="UnbindAllEvents">解绑多个事件</button>
    <br />
    <button @click="death">点我销毁Student组件</button>
  </div>
</template>

<script>
export default {
  name: "MyStudent",
  data() {
    return {
      name: "牛马",
      age: 18,
      num: 0,
    };
  },
  methods: {
    sendStudentName() {
      // 触发Student组件实例上的demo事件，并把vc.name传递给APP组件
      this.$emit("demo", this.name);
      // this.$emit("click");
    },
    AllEvents() {
      this.$emit("demo");
      this.$emit("demo2");
    },
    unbindSend() {
      this.$off("demo"); //解绑一个自定义事件
    },
    UnbindAllEvents() {
      // this.$off(["demo", "demo2"]); //解绑多个自定义事件，多个自定义事件：数组接受
      this.$off(); //解绑所有自定义事件
    },
    death() {
      this.$destroy(); //销毁了当前Student组件的实例，销毁后所有Student实例的自定义事件都不奏效
    },
    add() {
      console.log("add函数被调用");
      this.num++;
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
