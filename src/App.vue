<script setup lang="ts">
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import DomRenderer from "./components/DomRenderer.vue";
import RootElementEditor from "./components/editor/Root.vue";
import { useSelectedElement } from "./stores/selectedElement";
import { flat } from "./utils/flat";
import { Dom } from "./types";

const store = useSelectedElement();
const { selectedElement } = storeToRefs(store);

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
      <root-element-editor v-model:rootElement="dom" />
      <div class="selected-element-style">
        <h3>Selected Element Style</h3>
        <div v-if="selectedElement">
          <pre>{{ selectedElement }}</pre>
        </div>
        <div v-else>Please select element.</div>
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
