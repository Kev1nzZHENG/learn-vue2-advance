<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 过渡效果 -->
    <transition name="hello2" :appear="true">
      <h1 v-show="isShow">过渡效果</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test2",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: orange;
  /* 过渡效果写法1：给谁添加过渡效果，过渡相关写在该属性 */
  /* transition: all 0.8s linear; */
}
/* 过渡效果写法2 */
.hello2-enter-active,
.hello2-leave-active {
  transition: all 0.8s linear;
}
/* 进入的起点、离开的终点 */
.hello2-enter,
.hello2-leave-to {
  transform: translateX(-100%);
}
/* 进入的终点、离开的起点 */
.hello2-enter-to,
.hello2-leave {
  transform: translateX(0);
}
</style>>
