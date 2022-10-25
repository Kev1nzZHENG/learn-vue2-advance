<template>
  <div>
    <Count></Count>
    <hr />
    <Person></Person>
  </div>
</template>

<script>
// 引入组件
import Count from "./components/Count.vue";
import Person from "./components/Person.vue";
export default {
  name: "App",
  components: {
    Count,
    Person,
  },
  mounted() {
    console.log(this.$store);
  },
};
</script>


