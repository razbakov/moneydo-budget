<template>
  <div class="md:shadow-md border md:rounded bg-white">
    <div
      class="flex bg-gray-100 items-center justify-between border-b p-4 mb-2"
    >
      <h2 class="block text-gray-700 text-xl font-bold">
        Create Budget
      </h2>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 border rounded"
      >
        Save
      </button>
    </div>
    <div class="flex items-center mb-4 p-4">
      <label for="budgetName" class="text-gray-600 mr-4 w-1/3">
        Budget name
      </label>
      <input
        id="budgetName"
        class="w-full shadow appearance-none border rounded w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-mono"
        autocomplete="off"
        @focus="$event.target.select()"
        v-model="name"
      />
    </div>
    <div class="bg-gray-100 p-4 rounded p-4">
      <div class="flex mb-4 items-center">
        <dl class="mb-4 w-full p-2 border-b-2 border-dotted mr-4">
          <dt class="font-bold text-gray-700">
            Needs (~{{ Math.round(needs / 30) }} per day)
          </dt>
          <dd class="text-gray-500">
            Things you can’t live without, like food, toilet paper and shampoo.
          </dd>
        </dl>
        <input
          class="text-right shadow appearance-none border rounded w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-mono"
          autocomplete="off"
          type="tel"
          @focus="$event.target.select()"
          placeholder="Amount"
          v-model="needs"
        />
      </div>
      <div class="flex mb-4 items-center">
        <dl class="mb-4 w-full p-2 border-b-2 border-dotted mr-4">
          <dt class="font-bold text-gray-700">
            Wants (~{{ Math.round(wants / 30) }} per day)
          </dt>
          <dd class="text-gray-500">
            Purchases you enjoy but don’t need, like a takeout meal or pair of
            new shoes.
          </dd>
        </dl>
        <input
          class="text-right shadow appearance-none border rounded w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-mono"
          autocomplete="off"
          type="tel"
          @focus="$event.target.select()"
          placeholder="Amount"
          v-model="wants"
        />
      </div>
      <div class="flex mb-4 items-center">
        <dl class="mb-4 w-full p-2 border-b-2 border-dotted mr-4">
          <dt class="font-bold text-gray-700">
            Culture (~{{ Math.round(culture / 30) }} per day)
          </dt>
          <dd class="text-gray-500">
            Things like movies, books, museum visits and education.
          </dd>
        </dl>
        <input
          class="text-right shadow appearance-none border rounded w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-mono"
          autocomplete="off"
          type="tel"
          @focus="$event.target.select()"
          placeholder="Amount"
          v-model="culture"
        />
      </div>
      <div class="flex items-center">
        <dl class="mb-4 w-full p-2 border-b-2 border-dotted mr-4">
          <dt class="font-bold text-gray-700">
            Extra (~{{ Math.round(extra / 30) }} per day)
          </dt>
          <dd class="text-gray-500">
            Expenses you aren't going to anticipate, like a doctor’s visit, car
            repair or unplanned presents.
          </dd>
        </dl>
        <input
          class="text-right shadow appearance-none border rounded w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-mono"
          autocomplete="off"
          type="tel"
          @focus="$event.target.select()"
          placeholder="Amount"
          v-model="extra"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    needs: 0,
    wants: 0,
    culture: 0,
    extra: 0,
    name: 'March'
  })
}
</script>
