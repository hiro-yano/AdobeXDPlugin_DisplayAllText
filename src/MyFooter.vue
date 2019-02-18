<template>
  <footer>
    <button type="submit" @click="onCancelHandler">閉じる</button>
  </footer>
</template>
<script>
export default {
  methods: {
    onCancelHandler() {
      this.$emit("onClickCancel");
    }
  }
};
</script>
