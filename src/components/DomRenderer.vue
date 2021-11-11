<script setup lang="ts">
import { inject } from "vue";
import { storeToRefs } from "pinia";
import { useSelectedElement } from "../stores/selectedElement";
import { Dom } from "../types";
defineProps<{ dom: Dom }>();
const store = useSelectedElement();

const handleClickElement = (dom: Dom) => {
  store.update(dom);
};
</script>

<template>
  <div
    v-if="dom.type === 'container'"
    @click.stop.prevent="handleClickElement(dom)"
    class="container"
    :id="dom.id"
    :style="dom.style"
  >
    <dom-renderer v-for="child in dom.children" :key="child.id" :dom="child" />
  </div>
  <input
    v-else-if="dom.type === 'input-text'"
    @click.stop.prevent="handleClickElement(dom)"
    type="text"
    :id="dom.id"
    :style="dom.style"
  />
</template>

<style scoped>
.container {
  display: flex;
  width: 100%;
}
</style>
