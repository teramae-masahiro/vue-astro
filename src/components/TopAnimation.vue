<template>
  <section>
    <div class="card">
      <div class="card-info">
        <h2 class="text-xl" id="card-info-title">{{ cards[currentNum].title }}</h2>
        <p class="text-sm" id="card-info-desc">{{ cards[currentNum].description }}</p>
        <a href="#">
          <p>more detail</p>
        </a>
      </div>
      <div class="card-photo">
        <div class="mask-1 mask"></div>
        <div class="mask-2 mask"></div>
        <a href="#" @click="nextCard">
          <p>Next</p>
        </a>
        <img :src="cards[currentNum].photo" alt="Card Image" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from "vue";
import gsap from "gsap";

const cards = reactive([
  {
    id: 1,
    title: "Cincinntati",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci vulputate, eget tincidunt nisl ultricies.",
    photo: "https://picsum.photos/500/600",
  },
  {
    id: 2,
    title: "Csofa",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci vulputate, eget tincidunt nisl ultricies.",
    photo: "https://picsum.photos/500/600",
  },
  {
    id: 3,
    title: "Sofa",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci vulputate, eget tincidunt nisl ultricies.",
    photo: "https://picsum.photos/500/600",
  },
]);
let currentNum = ref(0);

const playFowrd = () => {
  let tl = gsap.timeline({
    defaults: {
      duration: 0.7,
      ease: "sine.out",
    },
    onComplete: () => {
      playreverse();
      currentNum.value++;
      console.log(currentNum.value);
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
  )
    .to(
      "#card-info-title",
      {
        clipPath: "polygon(0 0, 100% 0, 100% 0%, 0% 0%)",
      },
      "<.2"
    )
    .to(
      "#card-info-desc",
      {
        clipPath: "polygon(0 0, 100% 0, 100% 0%, 0% 0%)",
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
  )
    .to(
      "#card-info-title",
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      },
      "<.4"
    )
    .to(
      "#card-info-desc",
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      },
      "<.3"
    );
};
const nextCard = () => {
  playFowrd();
};
</script>

<style scoped>
.card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  background: var(--white);
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
.card-info {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  padding: 1em 2em;
}
.card-info h2 {
  font-family: "Allura", serif;
  color: var(--dark-green);
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}
.card-info p {
  font-size: 0.85em;
  line-height: 2.2;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}
.card-info a {
  display: grid;
  grid-template-columns: max-content 20px;
  font-size: 0.85em;
  color: var(--dark-green);
  align-items: center;
  font-size: 0.85em;
  font-weight: bold;
  align-self: center;
  justify-self: flex-end;
  transform: translateX(0px);
  transition: transform 0.3s ease-in-out;
}
.card-info a:hover {
  transform: translateX(5px);
}
.card-photo {
  position: relative;
  object-fit: cover;
  overflow: hidden;
}
.card-photo img {
  max-width: 100%;
  aspect-ratio: 1/1;
}
.card-photo a {
  position: absolute;
  color: var(--white);
  bottom: 5%;
  right: 8%;
  font-size: 1rem;
  font-weight: bold;
  align-self: flex-start;
  transform: translateX(0px);
  transition: transform 0.3s ease-in-out;
}
.card-photo a:hover {
  transform: translateX(5px);
}
.card-photo .mask {
  position: absolute;
  top: 0;
  height: 100%;
  width: 50%;
  z-index: 5;
  background: var(--white);
}
.mask-1 {
  left: 0;
  transform: translateY(-100%);
}
.mask-2 {
  right: 0;
  transform: translateY(100%);
}
</style>
