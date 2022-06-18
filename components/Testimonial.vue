<template>
  <section class="bg-penito-gray-bg py-16 px-4">
    <div class="max-w-6xl mx-auto flex items-center justify-between gap-5">
      <div class="max-w-lg md:max-w-md lg:max-w-[594px]">
        <h1 class="text-[1.75rem] text-penito-black font-semibold">
          Our Customer Say
        </h1>
        <p class="text-penito-gray text-base leading-4 mt-5">
          Purus, eget vitae quam quam id neque. Risus integer pharetra viverra
          sit. Non, sed consequat morbi sit vitae mollis. Mauris eu diam
          adipiscing et amet, ut. Donec viverra sed est elit pretium nibh et. Ut
          varius erat vulputate augue nulla consectetur. Blandit tortor,
          bibendum mi magna sapien dictum. Ullamcorper ut risus pretium ac
          aliquam. Risus ante in sit ac pellentesque aliquam ut. Commodo
          tristique commodo mi malesuada. Sed tristique pharetra tincidunt quis
          convallis in elementum, aliquam blandit.
        </p>

        <div class="flex mt-4">
          <svg
            v-for="n in 4"
            :key="n"
            width="20px"
            height="20px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#FFC95E"
              fill-rule="evenodd"
              points="12 16.667 5 22 8 14 2 9.5 9.5 9.5 12 2 14.5 9.5 22 9.5 16 14 19 22"
              d="M10 13.889L4.167 18.333L6.667 11.667L1.667 7.917L7.917 7.917L10 1.667L12.083 7.917L18.333 7.917L13.333 11.667L15.833 18.333Z"
            />
          </svg>
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fill-rule="evenodd">
              <path
                fill="#000"
                fill-opacity=".2"
                points="12 16.667 12 2 14.5 9.5 22 9.5 16 14 19 22"
                d="M10 13.889L10 1.667L12.083 7.917L18.333 7.917L13.333 11.667L15.833 18.333Z"
              />
              <path
                fill="#FFC95E"
                points="12 16.667 5 22 8 14 2 9.5 9.5 9.5 12 2"
                d="M10 13.889L4.167 18.333L6.667 11.667L1.667 7.917L7.917 7.917L10 1.667Z"
              />
            </g>
          </svg>
        </div>
        <h1 class="text-[#122025] font-semibold mt-1.5">Oyeniyi Adedoyin</h1>
        <p class="text-penito-gray text-sm mt-2">Digital Marketer</p>
      </div>
      <div class="w-full max-w-md hidden md:block">
        <img src="@/assets/images/testimonial-room-image.svg" alt="" />
      </div>
    </div>
  </section>
</template>
