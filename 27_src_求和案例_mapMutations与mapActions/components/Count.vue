<template>
  <div>
    <h1>当前求和为:{{ sum }}</h1>
    <h3>当前求和放大10倍:{{ bigSum }}</h3>
    <h3>我在{{ school }}，学习{{ subject }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  methods: {
    //  程序员亲自写方法
    /* increment() {
      this.$store.commit("JIA", this.n);
    },
    decrement() {
      this.$store.commit("JIAN", this.n);
    }, */

    // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（对象写法）
    ...mapMutations({ increment: "JIA", decrement: "JIAN" }),
    // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（数组写法）
    // ...mapMutations(['JIA','JIAN']),

    // *****************************************
    //  程序员亲自写方法
    /* incrementOdd() {
      this.$store.dispatch("jiaOdd", this.n);
    },
    incrementWait() {
      this.$store.dispatch("jiaWait", this.n);
    }, */

    // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（对象写法）
    ...mapActions({ incrementOdd: "jiaOdd", incrementWait: "jiaWait" }),
    // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（数组写法）
    // ...mapActions(["JIA", "JIAN"]),
  },
  computed: {
    // 靠程序员自己亲自去写计算属性
    /*     sum() {
      return this.$store.state.sum;
    },
    school() {
      return this.$store.state.school;
    },
    subject() {
      return this.$store.state.subject;
    }, */

    // 借助mapState生成计算属性，从state中读取数据（对象写法）
    // ...mapState({ sum: 'sum', school: 'school', subject: 'subject'}),

    // 借助mapState生成计算属性，从state中读取数据（数组写法）  mapState和mapGetters中，若要使用数组写法，需要计算属性名和state/getters中属性名一致，才可使用；
    ...mapState(["sum", "school", "subject"]),

    // ···
    /*     bigSum() {
      return this.$store.getters.bigSum;
    }, */

    // 借助mapGetters生成计算属性，从getter中读取数据（对象写法）
    // ...mapGetters({ bigSum: "bigSum" }),

    // 借助mapGetters生成计算属性，从getter中读取数据（数组写法） mapState和mapGetters中，若要使用数组写法，需要计算属性名和state/getters中属性名一致，才可使用；
    ...mapGetters(["bigSum"]),
  },
};
</script>

<style lang="css">
button {
  margin-left: 5px;
}
</style>
