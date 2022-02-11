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
      appId: 'XW96KWG67H',
      apiKey: '0b143ff5cc7a5a40747e290d20f1bf85',
      siteId: 'c73e73c4-d5d0-44fd-808a-1ad9b6d76b23',
      branch: 'main',
      selector: 'div#search',
      placeholder: 'Search...',
      detached: true,
    })
  },
}
</script>
