<template>
  <!-- 组件的结构 -->
  <div class="demo1">
    <h2>学校名字：{{ schoolName }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showName">点我提示学校名字</button>
  </div>
</template>

<script>
// 组件交互相关的代码（数据、方法等等）
/* 分别暴露：export  */ export default {
  name: "MySchool",
  data() {
    return {
      schoolName: "尚硅谷",
      address: "北京昌平",
    };
  },
  methods: {
    showName() {
      alert(this.schoolName);
    },
  },
};
// 统一暴露

// export {school}
// 默认暴露
// export default school;
</script>

<style>
/* 组件的样式 */
.demo {
  background-color: pink;
}
</style>