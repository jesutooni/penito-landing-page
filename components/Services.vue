<template>
  <section class="py-16 px-4 bg-white max-w-6xl mx-auto">
    <h1
      class="font-semibold text-2xl md:text-4xl text-penito-black text-center"
    >
      Our Services & Benefits
    </h1>
    <div class="mt-12 lg:flex justify-between">
      <div class="grid grid-cols-2 gap-14 text-center xs:text-left">
        <div
          v-for="service in services"
          :key="service.benefit"
          class="xs:max-w-[300px]"
        >
          <img class="mx-auto xs:mx-0"
            :src="require(`@/assets/images/icons/${service.icon}.svg`)"
            alt=""
          />
          <h1 class="mt-6 text-2xl text-penito-black font-semibold">{{ service.benefit }}</h1>
          <p class="mt-5 text-xl text-penito-gray">{{ service.description }}</p>
        </div>
      </div>
      <div class="hidden lg:block">
        <img class="h-[512px]" src="@/assets/images/services-image.svg" alt="" />
      </div>
    </div>

    <button
        class="mt-9 text-penito-white bg-penito-blue-dark py-2.5 px-8 rounded-full"
      >
        Know more
      </button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          icon: "delivery",
          benefit: "Fast & Free Shipping",
          description:
            "Sign up to premier delivery in Nigeria for unlimited free shipping from USA.",
        },
        {
          icon: "support",
          benefit: "24/7 Support",
          description:
            "24/7 support is a kind of support that is available throughout.",
        },
        {
          icon: "return",
          benefit: "Hassle Free Returns",
          description:
            "Free return within 15 days for official store items and 7 days for other eligible items.",
        },
        {
          icon: "ribbon",
          benefit: "Your Best Price Matching",
          description:
            "Ask to speak to a manger, show him the competitor's lower price.",
        },
      ],
    };
  },
};
</script>
