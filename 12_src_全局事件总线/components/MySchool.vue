<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学校名字：{{ schoolName }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "MySchool",
  data() {
    return {
      schoolName: "尚硅谷",
      address: "北京昌平",
    };
  },
  mounted() {
    this.$bus.$on("receiveStudentName", (data) => {
      console.log("school组件收到了数据:", data);
    });
  },
  beforeDestroy() {
    this.$bus.$off("receiveStudentName"); //最好在接受数据组件的beforeDestory钩子中，用`$off`去解绑当前组件所用到的事件
  },
};
</script>

<style scoped >
.demo {
  background-color: pink;
  padding: 5px;
}
</style>