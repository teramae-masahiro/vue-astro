<template>
  <div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="mx-auto max-w-xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">お問い合わせ</h2>
      <p class="mt-2 text-lg leading-8 text-gray-600">無料相談受付中！</p>
    </div>
    <form @submit.prevent="handleSubmit" method="POST" data-netlify="true" name="contact" class="mx-auto mt-16 max-w-xl sm:mt-20">
       <input type="hidden" name="form-name" value="contact" />
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="name" class="block text-sm font-semibold leading-6 text-gray-900">社名 / お名前</label>
          <div class="mt-2.5">
            <input
              :class="['block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6', { 'formGroup__input-error': errorMessagesState.name.length }]"
              type="text"
              name="name"
              id="name"
              autocomplete="given-name"
              v-model="formState.name"
            />
            <ul class="formGroup__errorMessages">
              <li v-for="message in errorMessagesState.name" :key="message">
                {{ message }}
              </li>
            </ul>
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">メールアドレス</label>
          <div class="mt-2.5">
            <input
              :class="['block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6', { 'formGroup__input-error': errorMessagesState.email.length }]"
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              v-model="formState.email"
            />
            <ul class="formGroup__errorMessages">
              <li v-for="message in errorMessagesState.email" :key="message">
                {{ message }}
              </li>
            </ul>
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">お問い合わせ内容</label>
          <div class="mt-2.5">
            <textarea
              :class="['block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6', { 'formGroup__input-error': errorMessagesState.message.length }]"
              name="message"
              id="message"
              rows="4"
              v-model="formState.message"
            ></textarea>
            <ul class="formGroup__errorMessages">
              <li v-for="message in errorMessagesState.message" :key="message">
                {{ message }}
              </li>
            </ul>
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

<script setup>
import { reactive } from "vue";

const notBlank = () => {
  return (v) => {
    if (!v.trim()) {
      return "入力してください。";
    }
    return "";
  };
};
const validateEmail = () => {
  return (v) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(v).toLowerCase())) {
      return "有効なメールアドレスを入力してください。";
    }
    return "";
  };
};


const formState = reactive({
  name: "",
  email: "",
  message: "",
});
const errorMessagesState = reactive({
  name: [],
  email: [],
  message: [],
});
const validatorsState = {
  name: [notBlank()],
  email: [validateEmail()],
  message: [notBlank()],
};

const submitted = ref(false);
const handleSubmit = () => {
  let isValid = true;

  Object.keys(formState).forEach((key) => {
    errorMessagesState[key] = validatorsState[key].map((validate) => validate(formState[key])).filter((msg) => msg !== "");

    if (errorMessagesState[key].length > 0) {
      isValid = false;
    }
  });

  if (isValid) {
    submitted.value = true;
  }
};
</script>

<style>
.bg-indigo-600 {
  background: #ecfaec;
}
.formGroup__input-error {
  border-color: red;
}
.formGroup__errorMessages {
  color: red;
}
</style>
