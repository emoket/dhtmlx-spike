<template>
  <div ref="container" class="widget-box"></div>
</template>

<script>
export default {
  props: {
    target: String,
    mode: { type: String, default: 'list' },
    autosend: Boolean,
    toolbar: Boolean,
    data: Object,
  },
  mounted: function () {
    this.vault = new dhx.Vault(this.$refs.container, {
      data: this.data,
      mode: this.mode,
      uploader: {
        autosend: this.autosend,
        target: this.target,
      },
      toolbar: this.toolbar,
    });
  },
  beforeUnmount: function () {
    this.vault.destructor();
  },
};
</script>
