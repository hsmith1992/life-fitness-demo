<template>
  <main class="cart-page">
    <article class="cart-page-content">
      <h1>Your Cart</h1>
      <div v-if="cartItems.length > 0">
        <cart-table />
        <cart-total />
        <div class="flex justify-end p-2">
          <a
            class="p-2 bg-green-600 rounded shadow text-white"
            target="blank"
            :href="checkoutUrl"
            ><span class="text-white">Checkout</span></a
          >
        </div>
      </div>
      <section v-else>
        <p class="cart-page-message">Your cart is empty, fill it up!</p>
        <nuxt-link to="/" class="cart-page-button is-dark">
          Back to Products
        </nuxt-link>
      </section>
    </article>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  head: () => ({
    title: 'Life Fitness - Cart',
  }),
  computed: {
    ...mapGetters({
      cartId: 'cart/id',
      cartItems: 'cart/items',
      checkoutUrl: 'cart/checkoutUrl',
    }),
  },
  async mounted() {
    // Get local cart id
    const localCart = window.localStorage.getItem('shopifyNuxtCart')
    if (localCart) {
      this.$store.dispatch('cart/updateBase', JSON.parse(localCart))
    } else {
      const shopifyResponse = await this.$http.$post('/api/get-cart', {
        cartId: this.cartId,
      })

      if (shopifyResponse) {
        this.$store.dispatch('cart/updateBase', shopifyResponse.cart)
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.cart-page {
  width: 80vw;
  margin: 0 auto;
}

.cart-page-button.is-dark {
  background: #222;
  color: #f8f8f8;
  padding: 10px 14px;
  display: inline-block;
}

.cart-page-content {
  margin: 2rem 0 3rem;
  text-align: center;
}

.cart-page-message {
  margin-bottom: 1.5rem;
}
</style>
