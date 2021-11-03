<script>
import { onMounted, computed, ref } from 'vue';

export default {
  setup() {
    const hand = ref(null);

    const prizes17 = ref([]);
    const prizes18 = ref([]);

    const year = ref(17);

    const windIndex = ref(0);
    const orignAngle = ref(0);
    const prizeWindName = ref('');

    const isShow17 = ref(false);
    const isShow18 = ref(false);

    async function getData() {
      const res = await (await fetch('/api/prize.json')).json();
      prizes17.value = res[0].prizes2017;
      prizes18.value = res[0].prizes2018;
    }

    const eachRotDeg = computed(() => {
      const calPercent = (year) => {
        if (year === 17) {
          return prizes17.value.map((element, index, arr) => {
            return `rotate(${(360 / arr.length) * index}deg)`;
          });
        } else {
          return prizes18.value.map((element, index, arr) => {
            return `rotate(${(360 / arr.length) * index}deg)`;
          });
        }
      };
      return { year17: calPercent(17), year18: calPercent(18) };
    });
    const eachPercent = computed(() => {
      const calPercent = () => {
        if (year.value === 17) {
          return `rotate(${360 / prizes17.value.length}deg)`;
        } else {
          return `rotate(${360 / prizes18.value.length}deg)`;
        }
      };
      return { year17: calPercent(17), year18: calPercent(18) };
    });
    const awardItemDeg = computed(() => {
      const calDeg = () => {
        if (year.value === 17) {
          return {
            transform: `rotate(${360 / prizes17.value.length / 2}deg)`,
          };
        } else {
          return {
            transform: `rotate(${360 / prizes18.value.length / 2}deg)`,
          };
        }
      };
      return { year17: calDeg(17), year18: calDeg(18) };
    });

    function pickPrize() {
      isShow17.value = false;
      isShow18.value = false;
      reduceItem(year.value);
      prizeWindName.value = '';
      let array = [];
      if (year.value === 17) {
        prizes17.value.forEach((item, index) => {
          for (let i = 0; i < item['amount']; i++) {
            array.push(index);
          }
        });
      } else {
        prizes18.value.forEach((item, index) => {
          for (let i = 0; i < item['amount']; i++) {
            array.push(index);
          }
        });
      }
      windIndex.value = array[Math.floor(Math.random() * array.length)];
      rotateHand();
    }
    function rotateHand() {
      let newAngle = [];
      if (year.value === 17) {
        newAngle = prizes17.value.map((element, index, arr) => {
          return (360 / arr.length) * index;
        });
      } else {
        newAngle = prizes18.value.map((element, index, arr) => {
          return (360 / arr.length) * index;
        });
      }
      let rotateDeg = newAngle[windIndex.value];
      hand.value.classList.add('animate');
      if (rotateDeg - orignAngle.value < 180) {
        hand.value.style.transform = `rotate(${rotateDeg + 1080}deg)`;
      } else {
        hand.value.style.transform = `rotate(${rotateDeg + 720}deg)`;
      }
      orignAngle.value = rotateDeg;
      setTimeout(() => {
        hand.value.classList.remove('animate');
        hand.value.style.transform = `rotate(${orignAngle.value}deg)`;
        if (year.value === 17) {
          isShow17.value = true;
          prizeWindName.value = prizes17.value[windIndex.value].prizeName;
          prizes17.value[windIndex.value].amount -= 1;
        } else {
          isShow18.value = true;
          prizeWindName.value = prizes18.value[windIndex.value].prizeName;
          prizes18.value[windIndex.value].amount -= 1;
        }
      }, 2000);
    }
    function reduceItem() {
      if (year.value === 17) {
        if (prizes17.value.length < 0) return;
        prizes17.value = prizes17.value.filter((item) => item.amount > 0);
      } else {
        if (prizes18.value.length < 0) return;
        prizes18.value = prizes18.value.filter((item) => item.amount > 0);
      }
    }

    onMounted(() => {
      getData();
    });

    return {
      prizes17,
      prizes18,

      eachRotDeg,
      eachPercent,
      awardItemDeg,

      hand,

      pickPrize,
      windIndex,
      prizeWindName,

      year,
      isShow17,
      isShow18,
    };
  },
};
</script>

<template>
  <div class="bg-[#5858B9]">
    <div class="absolute z-30 top-10 left-10">
      <button
        type="button"
        class="px-5 py-3 font-black bg-gray-500 rounded hover:bg-gray-200"
        :class="{ 'bg-red-400': year === 17 }"
        @click="year = 17"
      >
        2017
      </button>
      <button
        type="button"
        class="px-5 py-3 ml-5 font-black bg-gray-500 rounded hover:bg-gray-200"
        :class="{ 'bg-red-400': year === 18 }"
        @click="year = 18"
      >
        2018
      </button>
    </div>
    <div
      class="relative flex items-center justify-center w-full h-screen overflow-hidden "
      v-if="year === 17"
    >
      <ul
        class="
          md:w-[540px] md:h-[540px]
          w-[270px]
          h-[270px]
          bg-whell
          relative
          turnTable17
          z-10
        "
      >
        <li
          class="absolute w-full h-full overflow-hidden rounded-full"
          :class="[prizeWindName === item.prizeName && 'choiced-style']"
          v-for="(item, index) in prizes17"
          :key="item.prizeName"
          style="clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)"
          :style="{
            '--eachPercent': eachPercent.year17,
            transform: eachRotDeg.year17[index],
          }"
        >
          <div
            class="
              md:pt-8
              pt-3
              text-center
              awardItem
              font-black
              text-[#343BAA]
              md:text-3xl
              text-base
              h-1/2
              origin-bottom
            "
            :class="[prizeWindName === item.prizeName && 'choiced-style']"
            :style="awardItemDeg.year17"
          >
            <span class="material-icons md:text-[48px] text-[32px]">
              {{ item.iconClassName }}
            </span>
            <p>{{ item.prizeName }}</p>
            <p>({{ item.amount }})</p>
          </div>
        </li>
      </ul>
      <div
        class="
          md:w-[128px] md:h-[128px]
          w-[64px]
          h-[64px]
          absolute
          inset-0
          m-auto
          rounded-full
          bg-[#1F1172]
          text-[#F101B5]
          font-black
          flex
          items-center
          justify-center
          md:text-3xl
          text-base
          hover:bg-gray-300
          cursor-pointer
          z-20
        "
        @click="pickPrize(17)"
      >
        PRESS
        <div class="hand" style="--handRotate: 360deg" ref="hand"></div>
      </div>
      <div
        class="
          md:h-[400px]
          h-[200px]
          hidden
          bg-[#343BAA]
          text-white
          absolute
          inset-0
          sm:flex
          m-auto
          justify-around
          items-center
        "
        v-if="isShow17"
      >
        <p class="font-black md:text-[72px] text-[36px]">
          WELL <br />
          DONE!
        </p>
        <div class="md:w-[540px] md:h-[540px] w-[270px] h-[270px] mr-20"></div>
        <div class="font-black">
          <p class="text-2xl md:text-3xl">YOU GET A FREE ...</p>
          <p class="underline text-[#FF00BA] md:text-[72px] text-[36px]">
            {{ prizeWindName }}
          </p>
        </div>
      </div>
    </div>
    <div
      class="relative flex items-center justify-center w-full h-screen overflow-hidden "
      v-if="year === 18"
    >
      <ul
        class="
          md:w-[540px] md:h-[540px]
          w-[270px]
          h-[270px]
          bg-whell
          relative
          turnTable18
          z-10
        "
      >
        <li
          class="absolute w-full h-full overflow-hidden rounded-full"
          :class="[prizeWindName === item.prizeName && 'choiced-style']"
          v-for="(item, index) in prizes18"
          :key="item.prizeName"
          style="clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)"
          :style="{
            '--eachPercent': eachPercent.year18,
            transform: eachRotDeg.year18[index],
          }"
        >
          <div
            class="
              md:pt-8
              pt-3
              text-center
              awardItem
              font-black
              text-[#343BAA]
              md:text-3xl
              text-base
              h-1/2
              origin-bottom
            "
            :class="[prizeWindName === item.prizeName && 'choiced-style']"
            :style="awardItemDeg.year18"
          >
            <p>{{ item.prizeName }}</p>
            <p>({{ item.amount }})</p>
          </div>
        </li>
      </ul>
      <div
        class="
          md:w-[128px] md:h-[128px]
          w-[64px]
          h-[64px]
          absolute
          inset-0
          m-auto
          rounded-full
          bg-[#1F1172]
          text-[#F101B5]
          font-black
          flex
          items-center
          justify-center
          md:text-3xl
          text-base
          hover:bg-gray-300
          cursor-pointer
          z-20
        "
        @click="pickPrize()"
      >
        PRESS
        <div class="hand" style="--handRotate: 360deg" ref="hand"></div>
      </div>
      <div
        class="
          md:h-[400px]
          h-[200px]
          hidden
          bg-[#343BAA]
          text-white
          absolute
          inset-0
          sm:flex
          m-auto
          justify-around
          items-center
        "
        v-if="isShow18"
      >
        <p class="font-black md:text-[72px] text-[36px]">
          WELL <br />
          DONE!
        </p>
        <div class="md:w-[540px] md:h-[540px] w-[270px] h-[270px] mr-20"></div>
        <div class="font-black">
          <p class="text-2xl md:text-3xl">YOU GET Number ...</p>
          <p class="underline text-[#FF00BA] md:text-[72px] text-[36px]">
            {{ prizeWindName }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.bg-whell::after,
.hand,
.hand::before {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.turnTable17 {
  transform: rotate(-30deg);
}
.turnTable18 {
  transform: rotate(-10deg);
}
.bg-whell::after {
  content: '';
  width: 540px;
  height: 540px;
  background-image: url('@/assets/wheel-outside.svg');
  background-position: center;
  background-size: cover;
}
.choiced-style {
  color: white !important;
}
.choiced-style::before {
  background: #ff00ba !important;
}
.bg-whell li::before {
  content: '';
  width: 50%;
  height: 100%;
  display: block;
  transform-origin: right center;
  background-color: #f0beff;
  position: absolute;
  transform: var(--eachPercent);
}
.bg-whell li:nth-child(even)::before {
  background-color: #343baa;
}
.bg-whell li:nth-child(even) .awardItem {
  color: #f0beff;
}
.animate {
  transition: all 2s;
}
.hand {
  width: 1px;
  height: 1px;
  margin: auto;
  transform-origin: bottom right;
  transform: rotate(var(--handRotate));
}
.hand::before {
  content: '';
  width: 130px;
  height: 226px;
  background-image: url('@/assets/hand.svg');
  background-repeat: no-repeat;
  margin: auto;
  transform: translate(-50%, -15%);
}
@media (max-width: 768px) {
  .bg-whell,
  .bg-whell::after {
    width: 270px;
    height: 270px;
    background-size: cover;
  }
  .hand::before {
    width: 68px;
    height: 115px;
    background-size: contain;
  }
}
</style>