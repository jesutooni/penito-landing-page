<template>
  <div class="flex items-center justify-between max-w-6xl mx-auto py-6 px-4">
    <div class="flex items-center space-x-2">
      <img src="@/assets/images/icons/penito-icon.svg" alt="" />
      <h1 class="font-semibold text-2xl lg:text-[2rem] text-penito-black">
        Penito
      </h1>
    </div>

    <nav class="hidden md:block">
      <ul class="flex gap-3 lg:gap-6">
        <li
          v-for="(nav, index) in navs"
          :key="index"
          @mouseover="currentIndex = index"
          @mouseleave="currentIndex = null"
          class="text-base font-medium text-penito-black cursor-pointer"
        >
          <h1 class="py-3">
            {{ nav }}
          </h1>
          <div
            :class="
              currentIndex === index
                ? 'w-8 bg-opacity-100'
                : 'w-0 bg-opacity-40'
            "
            class="h-[3px] bg-penito-black mx-auto transition-all duration-300 ease-in-out"
          ></div>
        </li>
      </ul>
    </nav>

    <div class="flex items-center gap-4 lg:gap-8">
      <div
        class="w-10 h-10 rounded-full bg-penito-white flex items-center justify-center cursor-pointer"
      >
        <img src="@/assets/images/icons/cart.svg" alt="" />
      </div>
      <div
        class="w-10 h-10 rounded-full bg-penito-white flex items-center justify-center cursor-pointer"
      >
        <img src="@/assets/images/icons/search.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      currentIndex: null,
      navs: ["Living Room", "Office", "Bedroom", "Sofas", "Outdoor", "Kitchen"],
    };
  },
};
</script>
