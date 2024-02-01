<script>
import { data } from './spreadsheet-data';

export default {
  data() {
    return {
      spreadsheet: null,
    };
  },

  mounted() {
    this.spreadsheet = new dhx.Spreadsheet(this.$refs.cont, {});
    this.spreadsheet.parse(data);
  },
};
</script>

<template>
  <q-page>
    <div ref="cont" style="width: 100%; height: calc(100vh - 100px)"></div>
  </q-page>
</template>
