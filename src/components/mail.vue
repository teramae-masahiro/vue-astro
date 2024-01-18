<template>
  <div class="bg-white px-6 py-24 lg:px-8">
    <div class="mx-auto max-w-xl text-center">
      <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">お問い合わせ</h2>
      <p class="mt-2 text-lg text-gray-600">無料相談受付中！</p>
    </div>
    <form @submit.prevent="handleSubmit" method="POST" data-netlify="true" class="mx-auto mt-16 max-w-xl sm:mt-20">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="name">社名 / お名前</label>
          <input type="text" name="name" id="name" v-model="formState.name" />
          <ul>
            <li v-for="message in errorMessagesState.name" :key="message">
              {{ message }}
            </li>
          </ul>
        </div>
        <div>
          <label for="email">メールアドレス</label>
          <input type="email" name="email" id="email" v-model="formState.email" />
          <ul>
            <li v-for="message in errorMessagesState.email" :key="message">
              {{ message }}
            </li>
          </ul>
        </div>
        <div>
          <label for="message">お問い合わせ内容</label>
          <textarea name="message" id="message" rows="4" v-model="formState.message"></textarea>
          <ul>
            <li v-for="message in errorMessagesState.message" :key="message">
              {{ message }}
            </li>
          </ul>
        </div>
      </div>
      <button type="submit">送信する</button>
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
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}]))$/;
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
  email: [notBlank(), validateEmail()],
  message: [notBlank()],
};

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
    console.log("エラーメッセージ:", errorMessagesState);
  console.log("フォームの状態:", formState);
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
