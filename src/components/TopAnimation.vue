<template>
  <section class="max-w-4xl mx-auto px-5">
    <p class="num">{{ cards[currentNum].id + 1 }} / {{ cards.length }}</p>
    <div class="card grid grid-cols-1 md:grid-cols-2 auto-rows-auto bg-white mx-auto">
      <div class="card-info grid grid-rows-3 p-4 gap-4">
        <h2 class="text-xl" id="card-info-title">{{ cards[currentNum].title }}</h2>
        <p class="text-sm" id="card-info-desc">{{ cards[currentNum].description }}</p>
        <a class="grid grid-cols-[max-content_20px] items-center self-center justify-self-end transform transition-transform duration-300 ease-in-out" :href="`/works/${cards[currentNum].id}`">
          <p class="detail-btn text-xl">More Detail</p>
        </a>
      </div>
      <div class="card-photo relative overflow-hidden">
        <div class="mask-1 mask absolute top-0 left-0 transform -translate-y-full h-full w-1/2"></div>
        <div class="mask-2 mask absolute top-0 right-0 transform translate-y-full h-full w-1/2"></div>
        <button class="absolute text-white bottom-5 right-8 text-lg font-bold self-start" @click="nextCard">
          <span class="next-btn text-xl">Next</span>
        </button>
        <img @load="onImageLoaded" class="w-full object-cover" :src="cards[currentNum].photo" :key="cards[currentNum].id" :alt="cards[currentNum].title"  />
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from "vue";
import { worksDetail } from "../data/detail";
import gsap from "gsap";

const cards = reactive(worksDetail);
let currentNum = ref(0);
const playFowrd = () => {
  let tl = gsap.timeline({
    defaults: {
      duration: 0.7,
      ease: "sine.out",
    },
    onComplete: () => {
      // playreverse();
      currentNum.value++;
      if (currentNum.value >= cards.length) {
        currentNum.value = 0;
      }
    },
  });
  tl.to(".mask-1", {
    yPercent: 100,
    scaleY: 1.4,
  });
  tl.to(
    ".mask-2",
    {
      yPercent: -100,
      scaleY: 1.4,
    },
    "<"
  );
  tl.to(
    "#card-info-title",
    {
      clipPath: "polygon(0 0, 100% 0, 100% 0%, 0% 0%)",
    },
    "<.2"
  );
  tl.to(
    "#card-info-desc",
    {
      clipPath: "polygon(0 0, 100% 0, 100% 0%, 0% 0%)",
    },
    "<.2"
  );
  tl.to(
    ".detail-btn",
    {
      opacity: 0,
    },
    "<.2"
  );
};
const playreverse = () => {
  let tl = gsap.timeline({
    defaults: {
      duration: 0.7,
      ease: "sine.out",
    },
  });
  tl.to(".mask-1", {
    yPercent: -100,
    scaleY: 1.4,
  });
  tl.to(
    ".mask-2",
    {
      yPercent: 100,
      scaleY: 1.4,
    },
    "<"
  );
  tl.to(
    "#card-info-title",
    {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    },
    "<.4"
  );
  tl.to(
    "#card-info-desc",
    {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    },
    "<.3"
  );
  tl.to(
    ".detail-btn",
    {
      opacity: 1,
    },
    "<.2"
  );
};
const nextCard = () => {
  playFowrd();
};
const onImageLoaded = () => {
  setTimeout((()=>playreverse()),100)
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap");
.num {
  font-style: italic;
}
.card {
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  aspect-ratio : 2/1;
}
.card-info h2 {
  color: var(--dark-green);
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}
.card-info p {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}
.card-info a {
  color: var(--dark-green);
}
.card-info a:hover {
  transform: translateX(5px);
}
.card-photo::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  z-index: 0;
  clip-path: polygon(100% 60%, 60% 100%, 100% 100%);
}
.card-photo button {
  color: var(--white);
  transform: translateX(0px);
  transition: transform 0.3s ease-in-out;
}
.card-photo button:hover {
  transform: translateX(5px);
}
.card-photo .mask {
  z-index: 5;
  background: var(--white);
}
.next-btn,
.detail-btn {
  color: var(--dark-green);
  font-style: italic;
}
</style>
