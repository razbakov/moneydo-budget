<template>
  <div class="container mt-4 mx-auto max-w-screen-sm shadow-md rounded">
    <div>
      <div class="p-4 bg-gray-200 text-right flex justify-between items-center">
        <h1 class="text-gray-700 text-xl font-bold">Edit Budget</h1>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
      </div>
      <div class="px-8 pt-6 pb-8">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="budgetName">
            Budget Name
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="budgetName" type="text" placeholder="Budget Name" v-model="name" />
        </div>
        <div>
          <div class="flex mb-4">
            <label class="w-full py-2 border-b-2 border-dotted text-gray-700 leading-tight mr-4 text-green-700" for="income">Income</label>
            <input class="text-right shadow appearance-none border rounded w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-mono" id="income" type="tel" placeholder="100" v-model="income" />
          </div>
          <div v-for="envelope in envelopes" :key="envelope.name" class="flex mb-4">
            <label class="w-full py-2 border-b-2 border-dotted text-gray-700 leading-tight mr-4 text-red-700" :for="envelope.name">{{ envelope.name }}</label>
            <input class="text-right shadow appearance-none border rounded w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-mono" :id="envelope.name" type="tel" placeholder="100" v-model="envelope.planned" />
          </div>
          <div class="flex mb-4 border-t-2 py-2">
            <label class="w-full py-2 text-gray-700 font-bold leading-tight mr-4 text-grey-700">Balance</label>
            <span class="py-2 px-4 text-gray-700 leading-tight font-mono">{{ balance }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: "March",
    income: 1000,
    dirty: false,
    envelopes: [
      {
        name: "Needs",
        planned: 500,
        percent: 0.5
      },
      {
        name: "Wants",
        planned: 300,
        percent: 0.3
      },
      {
        name: "Goals",
        planned: 200,
        percent: 0.2
      },
    ]
  }),
  metaInfo() {
    return {
      title: "Budget Edit"
    };
  },
  watch: {
    income(val) {
      if (!this.dirty) {
        this.envelopes.forEach(envelope => {
          envelope.planned = val * envelope.percent
        })
      }
    }
  },
  computed: {
    balance () {
      const reducer = (accumulator, item) => accumulator + parseInt(item.planned);

      return parseInt(this.income) - this.envelopes.reduce(reducer, 0);
    }
  }
}
</script>
