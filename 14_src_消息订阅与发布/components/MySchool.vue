<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学校名字：{{ schoolName }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "MySchool",
  data() {
    return {
      schoolName: "尚硅谷",
      address: "北京昌平",
    };
  },
  mounted() {
    this.pubId = pubsub.subscribe("receiveStudentName", (msgName, data) => {
      console.log("有人发布了receiveStudentName信息", "@", msgName, "@", data);
      console.log("接收到student组件的学生名@", data);
    });
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

<style scoped >
.demo {
  background-color: pink;
  padding: 5px;
}
</style>