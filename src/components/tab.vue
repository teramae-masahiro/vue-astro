<template>
  <div v-show="isActive" class="tab-pane">
    <slot />
  </div>
</template>

<script setup>
import { inject, onMounted, ref, watch } from 'vue';

const props = defineProps({
  label: String,
  active: Boolean
});

const isActive = ref(props.active);
const tabs = inject('tabs');
const activeTab = inject('activeTab');

onMounted(() => {
  tabs.value.push({ label: props.label });
  console.log(tabs.value);
  if (props.active) {
    activeTab.value = tabs.value.length - 1;
  }
});

watch(activeTab, (newVal) => {
  isActive.value = newVal === tabs.value.findIndex(tab => tab.label === props.label);
});
</script>
