<script>
import { columns, cards } from './kanban-data';

export default {
  mounted() {
    new kanban.Kanban(this.$refs.cont, {
      cards: cards,
      columns: columns,
    });
  },
};
</script>

<template>
  <div ref="cont" style="width: 100%; height: 100%"></div>
</template>
