<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.completed"
        @change="handleCheck(todo.id)"
      />
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input
        type="text"
        v-show="todo.isEdit"
        :value="todo.title"
        @blur="handleBlur(todo, $event)"
        @keyup.enter="handleBlur(todo, $event)"
        ref="inputTitle"
      />
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button
      class="btn btn-edit"
      @click="handleEdit(todo)"
      v-show="!todo.isEdit"
    >
      编辑
    </button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  props: ["todo"],
  /*   mounted() {
    console.log(this.todo);
  }, */
  methods: {
    // 勾选
    handleCheck(id) {
      // this.checkTodo(id);
      this.$bus.$emit("checkTodo", id);
    },
    // 删除
    handleDelete(id) {
      if (confirm("确认删除吗")) {
        // console.log(id);
        // this.deleteTodo(id);
        this.$bus.$emit("deleteTodo", id);
      }
    },
    // 编辑
    handleEdit(todo) {
      // todo.Edit = true; //无法响应式
      if (todo.hasOwnProperty("isEdit")) {
        todo.isEdit = true;
      } else {
        this.$set(todo, "isEdit", true);
      }
      this.$nextTick(() => {
        // console.log(this);  //vc
        this.$refs.inputTitle.focus();
      });
      /* this.$nextTick(function () {
        //console.log(this);  //vc
        this.$refs.inputTitle.focus();
      }); */
    },
    // 失去焦点，真正执行修改逻辑
    handleBlur(todo, e) {
      // this.$set(todo, "isEdit", false);
      todo.isEdit = false;
      // console.log(e.target.value);
      if (!e.target.value.trim()) return alert("输入的内容不能为空！");
      this.$bus.$emit("updateTodo", todo.id, e.target.value);
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover {
  background-color: #ddd;
}
li:hover button {
  display: block;
}
</style>