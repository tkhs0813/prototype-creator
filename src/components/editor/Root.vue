<script setup lang="ts">
import { ContainerDom, ContainerStyle } from "../../types";

const props = defineProps<{ rootElement: ContainerDom }>();
const emit = defineEmits<{
  (e: "update:rootElement", value: ContainerDom): void;
}>();

const handleInputAttribute = (
  attribute: keyof ContainerDom,
  e: { target: { value: string } }
) => {
  const updatedElement = Object.assign(props.rootElement, {
    id: e.target.value,
  });
  emit("update:rootElement", updatedElement);
};

const handleInputStyle = (
  style: keyof ContainerStyle,
  e: { target: { value: string } }
) => {
  const updatedElementStyle = Object.assign(props.rootElement.style, {
    [style]: e.target.value,
  });
  const updatedElement = Object.assign(props.rootElement, updatedElementStyle);
  emit("update:rootElement", updatedElement);
};
</script>

<template>
  <div class="root-element-editor">
    <h3>Root Style</h3>
    <label>
      ID:
      <input
        type="text"
        @input="handleInputAttribute('id', $event)"
        :value="rootElement.id"
      />
    </label>
    <label>
      Width:
      <input
        type="text"
        @input="handleInputStyle('width', $event)"
        :value="rootElement.style.width"
      />
    </label>
    <label>
      Height:
      <input
        type="text"
        @input="handleInputStyle('height', $event)"
        :value="rootElement.style.height"
      />
    </label>
    <label>
      Background:
      <input
        type="text"
        @input="handleInputStyle('background', $event)"
        :value="rootElement.style.background"
      />
    </label>
    <label>
      Margin:
      <input
        type="text"
        @input="handleInputStyle('margin', $event)"
        :value="rootElement.style.margin"
      />
    </label>
    <label>
      Padding:
      <input
        type="text"
        @input="handleInputStyle('padding', $event)"
        :value="rootElement.style.padding"
      />
    </label>
  </div>
</template>

<style scoped>
.root-element-editor {
  display: flex;
  flex-direction: column;
}
</style>
