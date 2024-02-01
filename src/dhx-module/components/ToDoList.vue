<script>
import { users, tasks, projects } from './todolist-data';

export default {
  data() {
    return {
      todolist: null,
    };
  },
  mounted() {
    this.todolist = new todo.ToDo(this.$refs.cont, {});
    this.todolist.parse({ users, tasks, projects });
  },
};
</script>

<template>
  <q-page>
    <div ref="cont" style="width: 100%; height: calc(100vh - 50px)"></div>
  </q-page>
</template>
