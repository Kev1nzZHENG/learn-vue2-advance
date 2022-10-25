<template>
  <div class="app">
    <h1>学校名字为:{{ schoolName }}</h1>
    <h1>学生名字为:{{ studentName }}</h1>
    <!-- 1.通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <MySchool :getSchoolName="getSchoolName"></MySchool>
    <!-- 2.通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，@或v-on）  -->
    <!-- <MyStudent v-on:demo="getStudentName" v-on:demo2="demoTest"></MyStudent> -->
    <!-- 只能点击一次 -->
    <!-- <MyStudent v-on:demo.once="getStudentName"></MyStudent> -->
    <!-- 简写 -->
    <!-- <MyStudent @demo="getStudentName"></MyStudent> -->
    <!-- 3.通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法ref） -->
    <MyStudent ref="student" @click.native="show"></MyStudent>
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
  methods: {
    getSchoolName(name) {
      console.log("APP收到了学校名:", name);
      this.schoolName = name;
    },
    getStudentName(name) {
      console.log("APP收到了学生姓名:", name);
      this.studentName = name;
    },
    demoTest() {
      console.log("demo事件触发了");
    },
    show() {
      alert(123);
    },
  },
  mounted() {
    // this.$refs.student.$on("demo", this.getStudentName); //绑定自定义事件

    this.$refs.student.$on("demo", (name) => {
      console.log("APP收到了学生姓名:", name);
      this.studentName = name;
    }); //绑定自定义事件

    // this.$refs.student.$once("demo", this.getStudentName); //绑定自定义事件（一次性）
  },
};
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>


