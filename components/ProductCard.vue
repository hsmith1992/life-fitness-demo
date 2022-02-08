<template>
  <div class="shadow hover:shadow-xl cursor-pointer rounded p-2">
    <div class="">
      <NuxtLink :to="`/products/${product.handle}`">
        <img
          class="object-contain"
          :src="featuredImage.src"
          :alt="featuredImage.altText"
        />
      </NuxtLink>
    </div>
    <div class="product-card-text">
      <h3 class="product-card-title">{{ product.title }}</h3>
      <p class="product-card-description">{{ shortDescription }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    featuredImage() {
      return this.product.images.edges[0].node
    },
    shortDescription() {
      return this.product.description.substring(0, 60) + '...'
    },
  },
}
</script>

<style lang="scss" scoped>
.product-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}

.product-card-description {
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: hidden;
  width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.product-card-frame {
  height: 120px;
  display: flex;
  align-content: center;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
}

.product-card-text {
  margin: 0.5rem 0;
}

.product-card-title {
  margin: 0.5rem 0;
  text-align: center;
  font-weight: 700;
}
</style>
