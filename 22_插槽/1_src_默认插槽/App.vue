<template>
  <div class="container">
    <Category title="美食">
      <img
        src="https://img1.baidu.com/it/u=1292111373,1625509292&fm=253&fmt=auto&app=120&f=JPEG?w=638&h=500"
        alt=""
      />
    </Category>
    <Category title="游戏">
      <ul>
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
    </Category>
    <Category title="电影">
      <video src="./assets/1.mp4" controls></video>
    </Category>
  </div>
</template>

<script>
// 引入组件
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: {
    Category,
  },
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
      films: ["《教父》", "《拆弹专家》", "《你好，李焕英》", "《尚硅谷》"],
    };
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}

</style>

