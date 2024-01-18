<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const message = ref("");
const submitted = ref(false);
const emailError = ref("");

const validateEmail = () => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}]))$/;
  return re.test(String(email.value).toLowerCase());
};



const handleSubmit = () => {
  let isValid = true;

  // 名前のバリデーション
  if (name.value.trim() === '') {
    // エラーメッセージを設定
    isValid = false;
  }

  // メールアドレスのバリデーション
  if (!validateEmail()) {
    // エラーメッセージを設定
    isValid = false;
  }

  // メッセージのバリデーション
  if (message.value.trim() === '') {
    // エラーメッセージを設定
    isValid = false;
  }

  if (isValid) {
    // バリデーションが成功した場合、フォームを送信
    submitted.value = true;
  } else {
    // バリデーションが失敗した場合、エラーメッセージを表示
  }
};

</script>

<template>
  <div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">

    </div>
    <div class="mx-auto max-w-xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">お問い合わせ</h2>
      <p class="mt-2 text-lg leading-8 text-gray-600">無料相談受付中！</p>
    </div>
    <form @submit.prevent="handleSubmit" method="POST" data-netlify="true" class="mx-auto mt-16 max-w-xl sm:mt-20">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="name" class="block text-sm font-semibold leading-6 text-gray-900">社名 / お名前</label>
          <div class="mt-2.5">
            <input v-model="Name" type="text" name="name" id="name" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">メールアドレス</label>
          <div class="mt-2.5">
            <input v-model="email" type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            <p v-if="emailError">{{ emailError }}</p>
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">お問い合わせ内容</label>
          <div class="mt-2.5">
            <textarea v-model="message" name="message" id="message" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
          </div>
        </div>
      </div>
      <div class="mt-10">
        <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">送信する</button>
      </div>
      <p v-if="submitted">Thank you for your message!</p>
    </form>
  </div>
</template>

<style>
  .bg-indigo-600 {
    background: #ECFAEC
  }
</style>
