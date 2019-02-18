/*
 * Sample plugin scaffolding for Adobe XD.
 *
 * Visit http://adobexdplatform.com/ for API docs and more sample code.
 */

const { Artboard, Text } = require("scenegraph");
var list = new Array();

function findText(element) {
    element.forEach(elm => {
        if(elm instanceof Text){
            list.push(elm.text);
        }
        else{
            findText(elm.children) 
        } 
    });
}

function myPluginCommand(selection, root) {
    console.log("=== display start ===");
    root.children.forEach(elm => {
        findText(elm.children);
    });

    list.sort();
    list.forEach(elm => {
        console.log(elm);
    });
    console.log("=== display end ===");
}

module.exports = {
    commands: {
        myPluginCommand: myPluginCommand
    }
};
