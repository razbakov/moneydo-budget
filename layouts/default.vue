<template>
  <div>
    <div
      class="container mx-auto max-w-screen-sm p-4 md:p-0 md:pt-4 md:flex justify-between items-center mb-4"
    >
      <div class="py-4 flex justify-center">
        <logo class="h-16" />
      </div>
      <nav>
        <div class="flex justify-center mb-3">
          <nuxt-link
            to="/"
            class="text-black py-2 px-4 border border-white rounded-full mr-4"
          >
            Planner
          </nuxt-link>
          <nuxt-link
            to="/tracker"
            class="text-black py-2 px-4 border border-white rounded-full"
          >
            Tracker
          </nuxt-link>
        </div>
      </nav>
    </div>
    <nuxt class="container mx-auto max-w-screen-sm" />
  </div>
</template>

<script>
import Logo from '~/components/Logo'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.nuxt-link-exact-active,
.nuxt-link-exact-active:hover {
  @apply bg-white;
}

.bg-brand {
  background: #ece3f7;
}

body {
  @apply bg-brand;
}
</style>
