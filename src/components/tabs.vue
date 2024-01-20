<template>
  <div class="tabs">
    <div class="tabs__list ">
      <div class="tabs__tab" :class="{ tabs__current: i === activeTab }" v-for="(tab, i) in tabs" :key="i" @click="selectTab(i)">{{ tab.label }}</div>
    </div>
    <div class="tabs__content bg-white">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, provide } from "vue";

const tabs = ref([]);
const activeTab = ref(0);

provide("tabs", tabs);
provide("activeTab", activeTab);

function selectTab(selectedIndex) {
  activeTab.value = selectedIndex;
}
</script>

<style >
.tabs__list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  border-bottom: 1px solid #ccc;
}
.tabs__tab {
  padding: 10px 15px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-bottom: none;
  background-color: #f9f9f9;
}
.tabs__current {
  background-color: white;
  border-bottom: 1px solid white;
}
.tabs__content {
  border: 1px solid #ccc;
  padding: 15px;
}
  .tab-pane_active {
    display: block;
  }
</style>
