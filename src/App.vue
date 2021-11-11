<script setup lang="ts">
import { ref } from "vue";
import { Dom } from "./types";
import DomRenderer from "./components/DomRenderer.vue";
import GlobalStyleEditor from "./components/editor/Global.vue";

const dom = ref<Dom>({
  id: "container-1",
  type: "container",
  style: {
    width: "100%",
    height: "100%",
    background: "#DDD",
    margin: "0",
    padding: "0",
  },
  children: [
    {
      id: "container-2",
      type: "container",
      style: {
        width: "100%",
        height: "60px",
        background: "#333",
        margin: "10px",
        padding: "0",
      },
      children: [
        {
          id: "input-test-1",
          type: "input-text",
          style: {
            width: "400px",
            height: "20px",
            background: "",
            margin: "10px",
            padding: "0",
          },
          children: [],
        },
        {
          id: "input-text-2",
          type: "input-text",
          style: {
            width: "100%",
            height: "20px",
            background: "",
            margin: "10px",
            padding: "0",
          },
          children: [],
        },
      ],
    },
  ],
});
</script>

<template>
  <div class="container">
    <div class="canvas">
      <dom-renderer :dom="dom" />
    </div>
    <div class="editor">
      <global-style-editor v-model:grobalElement="dom" />
      <div class="selected-element-style">
        <h3>Selected Element Style</h3>
        Please select element.
      </div>
    </div>
  </div>
</template>

<style>
html,
body {
  margin: 0px;
}

.container {
  display: flex;
  height: 100vh;
}

.canvas {
  display: flex;
  width: 100%;
}

.editor {
  margin-left: auto;
  width: 400px;
  display: flex;
  flex-direction: column;
}

.grobal-style {
  display: flex;
  flex-direction: column;
}
</style>
