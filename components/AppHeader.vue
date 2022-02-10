<template>
  <header class="sticky top-0 z-50">
    <div
      class="w-full bg-gray-800 transition-all duration-500"
      :class="{ '-translate-y-10': !showNavbar }"
    >
      <ul class="flex w-full h-10">
        <li>
          <h2 class="py-2 text-center w-52 font-bold bg-gray-200">
            COMMERCIAL USE
          </h2>
        </li>
        <li>
          <h2
            class="
              py-2
              px-3
              font-bold
              border-r border-white
              bg-gray-800
              text-white text-center
              w-52
            "
          >
            HOME USE
          </h2>
        </li>
      </ul>
    </div>
    <div
      class="
        flex
        bg-white
        text-xl
        sticky
        top-0
        shadow-xl
        transition-all
        duration-500
      "
      :class="{ '-translate-y-10': !showNavbar }"
    >
      <div class="p-3">
        <img class="w-64" src="/images/lf-logo.svg" />
      </div>
      <nav class="border-b w-full flex items-center">
        <ul class="flex h-full items-center">
          <li class="h-full">
            <nuxt-link exact to="/">
              <div
                class="
                  h-full
                  hover:text-red-800 hover:underline
                  uppercase
                  border-r border-white
                  cursor-pointer
                  flex
                  items-center
                  px-4
                  py-2
                  font-bold
                "
              >
                Products
              </div>
            </nuxt-link>
          </li>
          <li class="h-full">
            <nuxt-link exact to="/cart">
              <div
                class="
                  h-full
                  hover:text-red-800 hover:underline
                  uppercase
                  border-r border-white
                  cursor-pointer
                  flex
                  items-center
                  px-4
                  py-2
                  font-bold
                  relative
                "
              >
                <div
                  v-if="cartSize > 0"
                  class="
                    absolute
                    bg-black
                    text-white
                    rounded-full
                    h-6
                    w-6
                    text-sm
                    flex
                    items-center
                    top-2
                    -right-3
                    justify-center
                  "
                >
                  <p>{{ cartSize }}</p>
                </div>
                Cart
              </div>
            </nuxt-link>
          </li>

          <!-- <li
            class="
              uppercase
              font-bold
              h-full
              hover:text-red-800 hover:underline
              border-r border-white
              cursor-pointer
              flex
              items-center
              px-4
              py-2
              relative
            "
          >
            <nuxt-link to="/cart">Cart</nuxt-link>
          </li> -->
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
const OFFSET = 60

export default {
  data() {
    return { showNavbar: true, lastScrollPosition: 0, scrollValue: 0 }
  },
  computed: {
    ...mapGetters({
      cartSize: 'cart/size',
    }),
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
    const viewportMeta = document.createElement('meta')
    viewportMeta.name = 'viewport'
    viewportMeta.content = 'width=device-width, initial-scale=1'
    document.head.appendChild(viewportMeta)
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },

  methods: {
    onScroll() {
      if (window.pageYOffset < 0) {
        return
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return
      }
      this.showNavbar = window.pageYOffset < 60 // this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
    },
  },
}
</script>

<style lang="scss" scoped>
.app-header {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 40px 40px 0;
}

.main-nav {
  display: flex;
  width: 80vw;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 8px 0;

  ul {
    padding-left: 0;
  }
}

.main-nav-item {
  position: relative;
  display: inline;
  padding: 0 3px;
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  @include breakpoint($deviceXs) {
    padding: 0 8px;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    font-size: 0.7rem;
  }

  @include breakpoint($deviceSm) {
    padding: 0 10px;
    font-size: 0.8rem;
  }

  a {
    color: black;
    &:hover {
      color: $brandprimary;
    }
  }
}
.cart-size {
  position: absolute;
  top: -18px;
  right: -20px;
  width: 25px;
  height: 25px;
  padding: 6px 10px;
  border-radius: 1000px;
  background: black;
  text-align: center;
  color: white;
  font-size: 10px;
  font-weight: bold;

  @include breakpoint($deviceMd) {
    right: -18px;
  }
}
</style>
