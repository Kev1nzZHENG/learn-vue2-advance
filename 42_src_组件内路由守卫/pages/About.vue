<template>
  <h2>About组件内容</h2>
</template>

<script>
export default {
  name: "About",

  // 进入守卫：通过路由规则，进入该组件时调用
  beforeRouteEnter(to, from, next) {
    if (localStorage.getItem("school") === "atguigu") {
      console.log("About--beforeRouteEnter", to, from);
      //localStorage的school是否为atguigu，若是可以访问
      next();
    } else {
      alert("学校名不对，无权限不能访问");
    }
  },
  // 离开守卫：通过路由规则，离开该组件时被调用
  beforeRouteLeave(to, from, next) {
    console.log("About--beforeRouteLeave", to, from);
    let t = confirm("确定是否离开关于页面");
    // console.log(t);
    if (t) {
      next();
    }
  },
};
</script>
