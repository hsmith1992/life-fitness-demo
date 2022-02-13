<template>
  <main class="flex z-50 flex-col">
    <div class="w-full">
      <div
        class="h-48 md:h-56 lg:h-76 flex items-center justify-centergit overflow-hidden relative shadow"
      >
        <video
          class="object-contain w-full z-0"
          src="https://www.lifefitness.com/resource/blob/1406052/165dff9c33e7d5573481dd96f0d1156a/sl-console-homepage-3-seconds-data.mp4"
          data-cm-video=""
          controls=""
          autoplay=""
          loop=""
          muted=""
          preload="none"
        >
          No video available.
        </video>
        <div
          class="absolute w-full h-full bg-black bg-opacity-30 flex items-center justify-center"
        >
          <h1 class="text-white text-4xl font-bold">
            THE WORLD’S MOST TRUSTED FITNESS BRANDS IS COMING SOON
          </h1>
        </div>
      </div>
    </div>

    <product-grid class="" :product-list="filteredProductList" />
  </main>
</template>

<script>
export default {
  async asyncData({ $http, $route }) {
    const productListResponse = await $http.$post('/api/get-product-list')

    return {
      productList: productListResponse.products.edges,
    }
  },
  head: () => ({
    title: 'Life Fitness',
  }),
  computed: {
    filteredProductList() {
      if (this.$route.query.type) {
        return this.productList.filter(
          (product) => product.node.productType === this.$route.query.type
        )
      } else {
        return this.productList
      }
    },
  },
  mounted() {
    // Get local cart
    const localCart = window.localStorage.getItem('shopifyNuxtCart')

    if (localCart) {
      this.$store.dispatch('cart/updateBase', JSON.parse(localCart))
    }
  },
}
</script>

<style lang="scss" scoped>
.home-page {
  margin: 30px 0 45px;
}
</style>
