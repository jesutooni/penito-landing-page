<template>
  <section class="py-16 bg-penito-gray-bg px-2 md:px-4">
    
    <h1 class="text-xl md:text-3xl font-semibold text-penito-black max-w-6xl mx-auto">
      Visit Our Instagram Gallery
    </h1>

    <div class="flex gap-3 md:gap-6 mt-11 overflow-scroll">
      <div
        v-for="image in images"
        :key="image"
        class="min-w-[176px] h-44 md:min-w-[240px] md:h-60 rounded-xl flex items-center overflow-hidden relative group cursor-pointer"
      >
        <img
          class="min-h-full"
          :src="image"
          alt="furniture"
        />
        <div
          class="flex items-center justify-center absolute inset-0 bg-black bg-opacity-60 z-20 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"
        >
          <img
            class="w-16 h-16"
            src="@/assets/images/icons/instagram-big.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1616486886892-ff366aa67ba4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGluaW5nJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1615968679312-9b7ed9f04e79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZGluaW5nJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1616594266774-769089710d76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGRpbmluZyUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1615920606214-6428b3324c74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRpbmluZyUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      ],
    };
  },
};
</script>

<style>
/* width */
::-webkit-scrollbar {
  display: none;
}
</style>
