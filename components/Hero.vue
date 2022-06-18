<template>
  <section class="max-w-6xl mx-auto md:flex items-center py-10 px-4">
    <div class="space-y-11">
      <h1 class="capitalize text-3xl font-medium">
        Discover
        <span class="text-penito-yellow font-bold">The Best</span> Furniture for
        <span class="text-penito-black font-bold"> your Interior</span>
      </h1>
      <p class="text-penito-gray font-medium text-lg">
        We design pieces of furniture and objects that perfectly gap between
        Beauty and functionality
      </p>
      <div class="flex gap-14 text-center md:text-left">
        <button
          class="px-8 py-4 text-white bg-penito-blue-dark rounded-lg font-semibold text-lg flex items-center gap-3.5"
        >
          Shop Now
          <div
            class="w-6 h-6 rounded-full bg-penito-yellow flex justify-center items-center"
          >
            <svg
              width="14px"
              height="14px"
              viewBox="0 0 14 14"
              id="magicoon-Regular"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <style>
                  .cls-1 {
                    fill: #1c2a2f;
                  }
                </style>
              </defs>
              <title>chevron-right</title>
              <g id="chevron-right-Regular">
                <path
                  id="chevron-right-Regular-2"
                  data-name="chevron-right-Regular"
                  class="cls-1"
                  d="M10.226 7.309l-5.25 5.25a0.438 0.438 0 0 1 -0.619 -0.619L9.297 7 4.358 2.059A0.438 0.438 0 0 1 4.976 1.441l5.25 5.25A0.437 0.437 0 0 1 10.226 7.309Z"
                />
              </g>
            </svg>
          </div>
        </button>

        <!-- <div class="w-8 h-8 rounded-full border-l-4 border-penito-yellow"></div> -->

        <button class="flex items-center gap-5 font-semibold text-lg">
          <div
            class="w-9 h-9 rounded-full flex justify-center items-center play"
          >
            <svg
              width="14px"
              height="14px"
              viewBox="0 0 14 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke="#000"
                stroke-width="1.1666666666666667"
                d="M1.75 12.833L12.25 7L1.75 1.167L1.75 12.833ZM2.917 11.083L10.267 7L2.917 2.917L2.917 11.083ZM4.083 9.333L8.283 7L4.083 4.667L4.083 9.333ZM5.25 7.583L6.3 7L5.25 6.417L5.25 7.583Z"
              />
            </svg>
          </div>
          Watch Video
        </button>
      </div>
    </div>

    <div class="flex gap-3 w-full">
      <div class="self-end">
        <img src="@/assets/images/hero-two.svg" alt="" />
      </div>
      <div class="space-y-3">
        <img src="@/assets/images/hero-one.svg" alt="" />
        <img src="@/assets/images/hero-three.svg" alt="" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.play {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
}
</style>
