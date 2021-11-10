<script setup lang="ts">
import { ref } from "vue";
import DomRenderer from "./components/DomRenderer.vue";
import { Dom } from "./types";

const style = ref({
  width: "60px",
  height: "60px",
  background: "#DDD",
});

const dom = ref<Dom>({
  id: "div1",
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
      id: "div2",
      type: "container",
      style: {
        width: "100%",
        height: "60px",
        background: "#333",
        margin: "0",
        padding: "0",
      },
      children: [
        {
          id: "input1",
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
          id: "input2",
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
      <label>
        ID:
        <input type="text" v-model="dom.id" />
      </label>
      <label>
        Width:
        <input type="text" v-model="dom.style.width" />
      </label>
      <label>
        Height:
        <input type="text" v-model="dom.style.height" />
      </label>
      <label>
        Background:
        <input type="text" v-model="dom.style.background" />
      </label>
      <label>
        Margin:
        <input type="text" v-model="dom.style.margin" />
      </label>
      <label>
        Padding:
        <input type="text" v-model="dom.style.padding" />
      </label>
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
</style>
