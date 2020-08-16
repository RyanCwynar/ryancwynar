<template>
  <Layout>
    <ClientOnly>
      <full-page ref="fullpage" :options="options" id="fullpage">
        <div class="section">
          <div
            class="bg-cover bg-top h-full relative"
            style="background-image: url(images/mission-control.jpg)"
          >
            <div class="absolute bottom-0 px-4 pb-1 md:p-16 md:static">
              <h1 class="text-4xl md:text-6xl w-max bg-black text-white px-2 md:px-4">Not Found</h1>
            </div>
          </div>
        </div>
      </full-page>
    </ClientOnly>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Not found",
  },
  data: () => ({
    options: {
      licenseKey: "140569C6-E8DB49A5-BEF373F3-E4003E0D",
      navigation: true,
    },
  }),
};
</script>

<style>
</style>
