<script>
import { autoPlaceData } from './diagram-data';

export default {
  data: () => ({
    editor: null,
  }),
  mounted() {
    this.editor = new dhx.DiagramEditor(this.$refs.editor, {
      type: 'default', // ['org', 'minimap']
      autoplacement: {
        mode: 'direct',
      },
    });
    this.editor.parse(autoPlaceData);
  },
};
</script>

<template>
  <q-page style="width: 100%; height: calc(100vh - 100px)">
    <div class="dhx_sample-container">
      <div class="dhx_sample-widget" ref="editor"></div>
    </div>
  </q-page>
</template>
