<template>
<ClientOnly>
  <full-page ref="fullpage" :options="options" id="fullpage">
    <slot />
  </full-page>
</ClientOnly>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
export default {
  data: ()=>({
    options: {
      licenseKey: '140569C6-E8DB49A5-BEF373F3-E4003E0D',
      navigation: true,
    }
  })
}
</script>
<style>


</style>
