<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 多个元素过渡使用 transition-group -->
    <!-- 集成第三方动画 -->
    <transition-group
      :appear="true"
      name="animate__animated animate__bounce"
      enter-active-class="animate__flash"
      leave-active-class="animate__backOutDown"
    >
      <h1 v-show="isShow" key="1">集成第三方动画</h1>
    </transition-group>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "Test3",
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
</style>>
