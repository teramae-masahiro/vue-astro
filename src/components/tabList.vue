<template>
  <VueTabs>
    <VueTab label="ホームページ制作" active>
      <div class="flex justify-start">
        <div class="wrapper">
          <p class="text-md">HP制作</p>
          <ul class="flex flex-col gap-1">
            <li class="text-sm">コーポレイトサイト(10ページ) : 550,000〜</li>
            <li class="text-sm">LP : 300,000〜</li>
          </ul>
        </div>
      </div>
    </VueTab>
    <VueTab label="コーディングのご依頼">
      <div class="flex justify-start">
        <div class="wrapper">
          <p class="text-md">HP制作</p>
          <ul class="flex flex-col gap-1">
            <li class="text-sm"> WP : 150,000〜</li>
            <li class="text-sm"> LP : 100,000〜</li>
            <li class="text-sm"> Jamstack : 200,000〜</li>
          </ul>
        </div>
      </div>
    </VueTab>
    <VueTab label="GTM・GA4のご依頼">
      <div class="flex justify-start">
        <div class="wrapper">
          <p class="text-md">データ解析</p>
          <ul class="flex flex-col gap-1">
            <li class="text-sm">GTM設置 : 50,000〜</li>
            <li class="text-sm">GA4設定 : 50,000〜</li>
            <li class="text-sm">サイト分析 : 80,000~</li>
            <li class="text-sm"> 分析レポート(Looker Studio) : 50,000〜</li>
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
