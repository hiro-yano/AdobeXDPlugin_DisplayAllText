/*
 * Sample plugin scaffolding for Adobe XD.
 *
 * Visit http://adobexdplatform.com/ for API docs and more sample code.
 */

// setTimeoutとclearTimeoutを定義しないとエラーになるため、書いておきます
global.setTimeout = function(fn) {
  fn();
};
global.clearTimeout = function() {};

const { Artboard, Text } = require("scenegraph");
const Vue = require("vue").default;
const App = require("./App.vue").default;

function createDialog(result, id = "dialog") {
  document.body.innerHTML = `<dialog id="${id}"><div id="container"></div></dialog>`;
  let dialog = document.getElementById(id);
  new Vue({
    el: "#container",
    components: { App },
    render(h) {
      return h(App, { props: { dialog, result} });
    }
  });

  return dialog;
}

function findText(element, txtList) {
  element.forEach(elm => {
    if (elm instanceof Text) {
      txtList.push(elm.text);
    } else {
      findText(elm.children, txtList);
    }
  });
}

function myPluginCommand(selection, root) {
  let list = new Array();

  console.log("=== display start ===");
  root.children.forEach(elm => {
    findText(elm.children, list);
  });

  list.sort();
  let noDupList = list.filter((x, i, self) => self.indexOf(x) === i);
  console.log(noDupList.join("\n"));
  console.log("=== display end ===");

  const dialog = createDialog(noDupList.join("\n"));
  const result = dialog.showModal();
}

module.exports = {
  commands: {
    myPluginCommand: myPluginCommand
  }
};
