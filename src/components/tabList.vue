<template>
  <VueTabs>
    <VueTab label="一般サービス" active>
      <div class="flex justify-around">
        <div class="wrapper">
          <p class="text-md">HP制作</p>
          <ul class="flex flex-col gap-1">
            <li class="text-sm">コーポレイトサイト : 150,000〜</li>
            <li class="text-sm">LP : 120,000〜</li>
          </ul>
        </div>
        <div class="">
          <p class="text-md">運用</p>
          <ul class="flex flex-col gap-1">
            <li class="text-sm">GTM GA4導入・設定 : 30,000〜</li>
            <li class="text-sm">広告運用・分析代行：50,000〜</li>
          </ul>
        </div>
      </div>
    </VueTab>
    <VueTab label="制作会社様向け">
      <div class="flex justify-around">
        <div class="wrapper">
          <p class="text-md">HP制作</p>
          <ul class="flex flex-col gap-1">
            <li class="text-sm">基本料金 : 35,000〜</li>
            <li class="text-sm"> WP : 50,000〜</li>
            <li class="text-sm"> LP : 30,000〜</li>
            <li class="text-sm"> Jamstack : 50,000〜</li>
          </ul>
        </div>
        <div class="">
          <p class="text-md">運用</p>
          <ul class="flex flex-col gap-1">
            <li class="text-sm">GTM GA4導入・設定 : 30,000〜</li>
          </ul>
        </div>
      </div>
    </VueTab>
  </VueTabs>
</template>

<script setup>
import VueTabs from "./tabs.vue";
import VueTab from "./tab.vue";
</script>
