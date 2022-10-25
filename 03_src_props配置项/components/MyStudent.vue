<template>
  <div class="demo2">
    <h1>{{ msg }}</h1>
    <h2>学生名字：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ MyAge + 1 }}</h2>
    <button @click="updateAge">尝试修改收到的年龄++</button>
  </div>
</template>

<script>
export default {
  name: "MyStudent",
  data() {
    return {
      msg: "测试文字",
      // name: "牛马",
      // sex: "男",
      MyAge: this.age,
    };
  },
  //简单声明接收
  // props: ["name", "sex", "age"]

  // 接受的同时对数据进行类型限制
  /* props: {
    name: String,
    sex: String,
    age: Number,
  }, */

  // 接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
  props: {
    name: {
      type: String, //name的类型字符串
      required: true, //name是必须的
    },
    age: {
      type: Number,
      default: 99, //默认值99
    },
    sex: {
      type: String,
      default: "男",
    },
  },
  methods: {
    updateAge() {
      this.MyAge++;
    },
  },
};
</script>
