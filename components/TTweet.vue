<template>
  <div class="container bg-gray-100 text-center p-4 w-full md:max-w-xl mx-auto border border-gray-400">
    <p class="mb-4">If you reached this far, tweet to the author to show him you care.</p>
    <a class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        :href="tweetUrl"
        target="_blank"
        rel="noopener noreferrer">
      Tweet a thanks
    </a>
  </div>
</template>

<script>
export default {
  computed: {
    tweetUrl() {
      const text = encodeURI(
        'Thank you @razbakov for Budget Planner' + '\n\n' +
        window.location.href
      )

      return `https://twitter.com/intent/tweet?text=${text}`
    }
  }
}
</script>
