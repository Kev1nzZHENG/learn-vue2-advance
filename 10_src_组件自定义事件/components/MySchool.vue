<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学校名字：{{ schoolName }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="sendSchoolName">把学校名给APP</button>
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
  props: ["getSchoolName"],
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.schoolName);
    },
  },
};
</script>

<style scoped >
.demo {
  background-color: pink;
  padding: 5px;
}
</style>