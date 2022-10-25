<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 动画效果 -->
    <transition name="hello" :appear="true">
      <h1 v-show="isShow">动画效果</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test",
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
}
/* 没给transition命名 */
/* .v-enter-active {
  animation: atguigu 0.8s linear;
}
.v-leave-active {
  animation: atguigu 0.8s linear reverse;
} */
.hello-enter-active {
  animation: atguigu 0.8s linear;
}
.hello-leave-active {
  animation: atguigu 0.8s linear reverse;
}
@keyframes atguigu {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>>
