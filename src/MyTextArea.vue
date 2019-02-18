<template>
  <div>
    <p>{{ label }}</p>
    <textarea class="textarea" readonly="readonly" type="text">{{ textnode }}</textarea>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    textnode: {
      type: String,
      required: true
    }
  }
};
</script>
<style scoped>
.textarea {
  width: 500px;
  height: 300px;
}
</style>
