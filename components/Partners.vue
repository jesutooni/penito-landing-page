<template>
  <div class="py-24 px-4 bg-white max-w-6xl mx-auto">
    <h1
      class="font-semibold text-2xl md:text-4xl text-penito-black text-center"
    >
      Our Partners & Sponsors
    </h1>
    <div
      class="mt-8 md:mt-16 flex gap-x-16 gap-y-6 md:gap-y-12 flex-wrap justify-center"
    >
      <img
        v-for="partner in partners"
        :key="partner"
        :src="require(`@/assets/images/logos/${partner}.svg`)"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partners: [
        "google",
        "coursera",
        "airbnb",
        "microsoft",
        "duolingo",
        "udemy",
        "pluralsight",
        "airtable",
      ],
    };
  },
};
</script>
