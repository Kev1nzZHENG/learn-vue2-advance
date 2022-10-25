<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
	<br>
	<br>
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  methods: {
	 /* getStudents() {
      axios.get("http://localhost:8080/students").then(
        (response) => {
          console.log("请求成功了", response.data); //response.data获取响应对象的数据
        },
        (error) => {
          console.log("请求失败了", error.message); //error.message请求失败的原因
        }
      );
    }, */
    getStudents() {
      axios.get("http://localhost:8080/atguigu/students").then(
        (response) => {
          console.log("请求成功了", response.data); //response.data获取响应对象的数据
        },
        (error) => {
          console.log("请求失败了", error.message); //error.message请求失败的原因
        }
      );
    },
    getCars() {
      axios.get("http://localhost:8080/demo/cars").then(
        (response) => {
          console.log("请求成功了", response.data); //response.data获取响应对象的数据
        },
        (error) => {
          console.log("请求失败了", error.message); //error.message请求失败的原因
        }
      );
    },
  },
};
</script>
