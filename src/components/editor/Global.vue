<script setup lang="ts">
import { ContainerDom, ContainerStyle } from "../../types";

const props = defineProps<{ grobalElement: ContainerDom }>();
const emit = defineEmits<{
  (e: "update:grobalElement", value: ContainerDom): void;
}>();

const handleInputAttribute = (
  attribute: keyof ContainerDom,
  e: { target: { value: string } }
) => {
  const updatedElement = Object.assign(props.grobalElement, {
    id: e.target.value,
  });
  emit("update:grobalElement", updatedElement);
};

const handleInputStyle = (
  style: keyof ContainerStyle,
  e: { target: { value: string } }
) => {
  const updatedElementStyle = Object.assign(props.grobalElement.style, {
    [style]: e.target.value,
  });
  const updatedElement = Object.assign(
    props.grobalElement,
    updatedElementStyle
  );
  emit("update:grobalElement", updatedElement);
};
</script>

<template>
  <div class="grobal-element-editor">
    <h3>Grobal Style</h3>
    <label>
      ID:
      <input
        type="text"
        @input="handleInputAttribute('id', $event)"
        :value="grobalElement.id"
      />
    </label>
    <label>
      Width:
      <input
        type="text"
        @input="handleInputStyle('width', $event)"
        :value="grobalElement.style.width"
      />
    </label>
    <label>
      Height:
      <input
        type="text"
        @input="handleInputStyle('height', $event)"
        :value="grobalElement.style.height"
      />
    </label>
    <label>
      Background:
      <input
        type="text"
        @input="handleInputStyle('background', $event)"
        :value="grobalElement.style.background"
      />
    </label>
    <label>
      Margin:
      <input
        type="text"
        @input="handleInputStyle('margin', $event)"
        :value="grobalElement.style.margin"
      />
    </label>
    <label>
      Padding:
      <input
        type="text"
        @input="handleInputStyle('padding', $event)"
        :value="grobalElement.style.padding"
      />
    </label>
  </div>
</template>

<style scoped>
.grobal-element-editor {
  display: flex;
  flex-direction: column;
}
</style>
