<script setup lang="ts">
import { Dom } from "../types";
defineProps<{ dom: Dom }>();
</script>

<template>
  <div v-if="dom.type === 'container'" class="container" :style="dom.style">
    <dom-renderer v-for="child in dom.children" :key="child.id" :dom="child" />
  </div>
  <input v-else-if="dom.type === 'input-text'" type="text" :style="dom.style" />
</template>

<style scoped>
.container {
  display: flex;
  width: 100%;
}
</style>
