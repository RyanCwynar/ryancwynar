<template>
  <Layout>
    <div class="section">
      <div class="bg-cover bg-top  h-full relative" style="background-image: url(images/mission-control.jpg)">
      <div class="absolute bottom-0 px-4 pb-1 md:p-16 md:static">
        <h1 class="text-4xl md:text-6xl w-max bg-black text-white px-2 md:px-4">Ryan Cwynar</h1>
        <h3 class="text-xl md:text-3xl px-2 md:px-4">Software Engineer</h3>
      </div>
      </div>
    </div>
    <div class="section">
      <div class="bg-green-300 p-4 md:p-16 h-full relative">
        <h2 class="text-4xl md:text-6xl w-max bg-black text-white px-4">What I Do</h2>
        <div class="px-4 pr-10 w-full max-w-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-xl">
          <p class="my-4">I write code professionally.</p>
          <p class="my-4">Primarily I write modern JavaScript: Node, Express, Vue, and GraphQL.</p>
          <p class="my-4">I also have an unusual amount of WordPress and WooCommerce experience.</p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="bg-blue-200 bg-top p-4 md:p-16 h-full relative">
        <h2 class="text-4xl md:text-6xl w-max bg-black text-white px-4">Work With Me</h2>
        <div class="px-4 pr-10 w-full max-w-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-xl">
          <p class="my-4">You can have me start writing code for your project immediately by starting a subscription to my agency:
            <a class="block my-4 text-center md:inline underline" href="https://fueledonbacon.com">Fueled on Bacon.</a>
          <p class="my-4">Under some circumstances you can also hire me directly.</p>
          <p class="my-4">Here's my <a class="underline" href="https://bitly.com/ryan-swe-resume">resume</a>.</p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="bg-orange-300 bg-top p-4 md:p-16 h-full relative">
        <h2 class="text-4xl md:text-6xl w-max bg-black text-white px-4 pr-8">Questions?</h2>
        <div class="px-4 pr-10 w-full max-w-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-xl">
          <p class="text-center md:text-left my-4">Email me at 
            <a class="block my-4 text-center md:inline underline" href="mailto:ryan@fueledonbacon.com">ryan@fueledonbacon.com</a>
          </p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home",
  },
};
</script>

<style>
</style>
