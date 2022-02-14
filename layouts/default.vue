<template>
  <div>
    <app-header />
    <nuxt />
    <app-footer />
  </div>
</template>

<script>
export default {
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css',
        },
      ],
      script: [
        {
          type: 'text/javascript',
          src: 'https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js',
        },
      ],
    }
  },

  mounted() {
    window.algoliasearchNetlify({
      appId: 'QUO6YDMRR1',
      apiKey: '270d3a343be0075da664f8ffb4c34dc3',
      siteId: 'b5be802d-17da-49dd-bc91-9fcb9495fb99',
      branch: 'main',
      selector: 'div#search',
      placeholder: 'Search...',
      detached: true,
    })
  },
}
</script>
