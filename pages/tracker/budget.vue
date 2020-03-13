<template>
  <div>
    <div class="grid grid-cols-2 gap-4 m-4">
      <div
        v-for="i in Array(4)"
        :key="i"
        class="bg-white rounded-lg border flex text-center justify-center items-center h-32 shadow"
      >
        <div>
          <div class="text-xl font-bold text-gray-700">Needs</div>
          <div class="rounded-full bg-blue-500 text-white p-2">20</div>
        </div>
        <!-- <div>300</div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
