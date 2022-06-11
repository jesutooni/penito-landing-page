<template>
  <section class="py-24 px-4 bg-white max-w-6xl mx-auto">
    <h1
      class="font-semibold text-2xl md:text-4xl text-penito-black text-center max-w-[780px] mx-auto"
    >
      A Huge Collection of Furniture Products for your Interior
    </h1>
    <p class="mt-5 text-xl text-penito-gray text-center max-w-[860px] mx-auto">
      If you have the experience of ten years in an industry, no apostrohe is
      needed. If you have ten years' experience, an apostrophe is needed.
    </p>

    <div class="mt-10 flex justify-center gap-5">
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

    <div class="mt-10"></div>
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
