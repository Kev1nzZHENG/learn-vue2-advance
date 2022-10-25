<template>
  <div class="school">
    <h2 @click="showName">学校名字：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
// 引入局部混合
// import { mixin1, mixin2 } from "../mixin";
export default {
  name: "MyStudent",
  data() {
    return {
      name: "尚硅谷",
      address: "北京昌平",
    };
  },
  // 注册混合
  // mixins: [mixin1, mixin2],
};
</script>
