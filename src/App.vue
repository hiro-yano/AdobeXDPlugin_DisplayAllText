<template>
  <div class="wrapper">
    <form>
      <h1>すべてのテキストを表示します。</h1>
      <MyTextArea
        ref="text"
        label="実行結果"
        :textnode="result"
      ></MyTextArea>
      <MyFooter
        @onClickCancel="onCancelHandler"
      ></MyFooter>
    </form>
  </div>
</template>
<script>
import MyFooter from "./MyFooter.vue";
import MyTextArea from "./MyTextArea.vue";

//const clipboard = require("clipboard");

export default {
  components: {
    MyFooter,
    MyTextArea
  },
  props: {
    dialog: {
      type: Object,
      required: true
    },
    result: {
      type: String,
      required: true
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
    },
    onCancelHandler() {
      this.dialog.close();
    }
  }
};
</script>
<style scoped>
.wrapper {
  width: 500px;
}

.attention {
  color: #999;
  font-size: 12px;
}
</style>
