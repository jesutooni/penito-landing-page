<template>
  <section class="py-24 px-4 bg-white max-w-6xl mx-auto">
    <h1
      class="font-semibold text-2xl md:text-4xl text-penito-black text-center max-w-[780px] mx-auto"
    >
      A Huge Collection of Furniture Products for your Interior
    </h1>
    <p class="mt-5 text-lg md:text-xl text-penito-gray text-center max-w-[860px] mx-auto">
      If you have the experience of ten years in an industry, no apostrohe is
      needed. If you have ten years' experience, an apostrophe is needed.
    </p>

    <div class="mt-10 hidden lg:flex justify-center gap-5">
      <div
        @click="currentIndex = index"
        v-for="(product, index) in category"
        :key="index"
        :class="`py-2.5 px-5 rounded-full cursor-pointer font-semibold text-xs ${
          currentIndex === index
            ? ' text-penito-white bg-penito-green-light'
            : 'text-penito-blue-dark bg-penito-white'
        }`"
      >
        {{ product }}
      </div>
    </div>

    <div class="mt-10 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 lg:gap-7 xl:gap-9">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="rounded-lg bg-penito-white p-4"
      >
        <img
          class="w-40 h-40 mx-auto"
          :src="require(`@/assets/images/product-${index + 1}.svg`)"
          alt=""
        />
        <div class="text-sm font-semibold mt-9">
          <h1 class="text-penito-black">{{ product.name }}</h1>
          <h1 class="space-x-3.5 mt-1.5">
            <span class="line-through text-[#A8B6BB]"
              >${{ product.price }}.00</span
            ><span class="text-penito-green-light font-bold"
              >${{ product.discount }}.00</span
            >
          </h1>
          <div class="flex mt-1.5">
            <svg
              v-for="n in 4"
              :key="n"
              width="12px"
              height="12px"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FFC95E"
                fill-rule="evenodd"
                points="12 16.667 5 22 8 14 2 9.5 9.5 9.5 12 2 14.5 9.5 22 9.5 16 14 19 22"
                d="M6 8.334L2.5 11L4 7L1 4.75L4.75 4.75L6 1L7.25 4.75L11 4.75L8 7L9.5 11Z"
              />
            </svg>
            <svg
              width="12px"
              height="12px"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#000"
                  fill-opacity=".2"
                  points="12 16.667 12 2 14.5 9.5 22 9.5 16 14 19 22"
                  d="M6 8.334L6 1L7.25 4.75L11 4.75L8 7L9.5 11Z"
                />
                <path
                  fill="#FFC95E"
                  points="12 16.667 5 22 8 14 2 9.5 9.5 9.5 12 2"
                  d="M6 8.334L2.5 11L4 7L1 4.75L4.75 4.75L6 1Z"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center">
      <button
        class="mt-9 text-penito-white bg-penito-blue-dark py-2.5 px-8 rounded-full"
      >
        See more
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      category: [
        "All Furnitures",
        "Living Room",
        "Office",
        "Bedroom",
        "Sofas",
        "Outdoor",
        "Kitchen",
        "More",
      ],
      currentIndex: 0,
      products: [
        {
          name: "Home Wooden Leg Chair",
          price: "520",
          discount: "445",
        },
        {
          name: "Sofa Wooden Leg Chair",
          price: "490",
          discount: "420",
        },
        {
          name: "Home Wooden Leg Table",
          price: "468",
          discount: "411",
        },
        {
          name: "Plastic Chair",
          price: "180",
          discount: "130",
        },
        {
          name: "Wooden Room Light",
          price: "185",
          discount: "120",
        },
        {
          name: "Couch Sofa",
          price: "475",
          discount: "410",
        },
        {
          name: "Lounge Chair",
          price: "430",
          discount: "365",
        },
        {
          name: "Foot Rest Couch",
          price: "405",
          discount: "355",
        },
        {
          name: "Room Table Lamp",
          price: "160",
          discount: "105",
        },
      ],
    };
  },
};
</script>
