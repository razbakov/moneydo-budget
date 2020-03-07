<template>
  <div class="container md:mt-4 mx-auto max-w-screen-sm md:shadow-md rounded">
    <div>
      <div class="p-4 bg-gray-200 text-right flex justify-between items-center">
        <h1 class="text-gray-700 text-xl font-bold">Planning your first budget</h1>
        <span class="text-gray-700">{{ step }} / 6</span>
      </div>
      <div class="px-8 pt-6 pb-8">
        <div v-if="step === 1">
          <div class="flex">
            <div class="w-2/3">
              <div class="font-serif text-gray-700 leading-loose">
                <p>Hello Master,</p>
                <p><br/></p>
                <p>I am going to help you to plan your first budget.</p>
                <p>We are going to use Kakeibo and 50/30/20 methods.</p>
              </div>
              <div>
                <dl class="m-3">
                  <dt @mousedown="faq1 = !faq1" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-3">What is Kakeibo?</dt>
                  <dd v-if="faq1" class="px-2 text-gray-600 mb-3">Kakeibo was invented in 1904 by Japan’s first female journalist, Motoko Hani.</dd>
                  <dt @mousedown="faq2 = !faq2" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-3">What is 50/30/20?</dt>
                  <dd v-if="faq2" class="px-2 text-gray-600 mb-3">Elizabeth Warren popularized 50/30/20 budget rule in her book "All Your Worth: The Ultimate Lifetime Money Plan".</dd>
                </dl>
              </div>
            </div>
            <div class="w-1/3 mr-4">
              <img src="~/assets/img/undraw_super_woman_dv0y.svg" alt="Virtual Assitant" />
            </div>
          </div>
          <div class="text-right">
            <button @click="step += 1" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Next
            </button>
          </div>
        </div>
        <div v-if="step === 2">
          <div>
            <h2 class="block text-gray-700 text-xl font-bold mb-2">
              Your net income (after tax)
            </h2>
            <p class="mb-4 text-gray-500">If your income is not consistent each month, make an educated guess.</p>
            <div class="mb-4 bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative" role="alert">
              <strong class="font-bold">Tip:</strong>
              <span class="block sm:inline">Round everything up to whole numbers to make calculations simpler.</span>
            </div>
            <div v-for="(income, index) in incomes" :key="index" class="flex mb-4">
              <input @keyup="adjustArray(incomes, income, index)" tabindex="-1" class="w-full p-2 border-b-2 border-dotted text-gray-700 leading-tight mr-4" type="text" placeholder="Income name" v-model="income.name" autocomplete="off" />
              <input v-if="income.name" class="text-right shadow appearance-none border rounded w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-mono" autocomplete="off" type="tel" placeholder="Amount" v-model="income.amount" />
            </div>
            <div class="flex mb-4 border-t-2 py-2">
              <label class="w-full py-2 text-gray-700 font-bold leading-tight mr-4 text-grey-700">Income total</label>
              <span class="text-right py-2 px-4 text-gray-700 leading-tight font-mono">{{ total(incomes) }}</span>
            </div>
            <div class="text-right">
              <button @click="step -= 1" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                Back
              </button>
              <button @click="step += 1" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Next
              </button>
            </div>
          </div>
        </div>
        <div v-if="step === 3">
          <h2 class="block text-gray-700 text-xl font-bold mb-2">
            Your regular outgoings
          </h2>
          <p class="mb-4 text-gray-500">List your regular outgoings here. That's anything that recurs each month, such as rent, mortgage, utility bills, season tickets, credit card payments, phone, parking permit, gym membership, home, car, health, insurance, loans, etc.</p>
          <div class="mb-4 bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative" role="alert">
            <strong class="font-bold">Tip:</strong>
            <span class="block sm:inline">Use previous bills for anything you need to estimate, and don't be afraid to round numbers up - it's better to plan for higher costs than lower.</span>
          </div>
          <div v-for="(expense, index) in expenses" :key="index" class="flex mb-4">
            <input @keyup="adjustArray(expenses, expense, index)" tabindex="-1" class="w-full p-2 border-b-2 border-dotted text-gray-700 leading-tight mr-4" type="text" placeholder="Expense name" v-model="expense.name" autocomplete="off" />
            <input v-if="expense.name" class="text-right shadow appearance-none border rounded w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-mono" autocomplete="off" type="tel" placeholder="Amount" v-model="expense.amount" />
          </div>
          <div class="flex mb-4 border-t-2 py-2">
            <label class="w-full py-2 text-gray-700 font-bold leading-tight mr-4 text-grey-700">Expense total</label>
            <span class="text-right py-2 px-4 text-gray-700 leading-tight font-mono">{{ total(expenses) }}</span>
          </div>
          <div class="text-right">
            <button @click="step -= 1" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Back
            </button>
            <button @click="step += 1" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Next
            </button>
          </div>
        </div>
        <div v-if="step === 4">
          <h2 class="block text-gray-700 text-xl font-bold mb-2">
            Needs or Wants?
          </h2>
          <p class="mb-4 text-gray-500">Uncheck which of those regular expenses are not absolute must for your survival.</p>
          <div class="mb-4 bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative" role="alert">
            <strong class="font-bold">Tip:</strong>
            <span class="block sm:inline">If it is from needs category, but premium and more costly then it comes to wants.</span>
          </div>
          <div v-for="(expense, index) in filled(expenses)" :key="index" class="flex mb-4 items-center">
            <input type="checkbox" v-model="expense.needs" />
            <span class="w-full p-2 border-b-2 border-dotted text-gray-700 leading-tight mr-4">{{ expense.name }}</span>
            <span class="text-right py-2 px-4 text-gray-700 leading-tight font-mono">{{ expense.amount }}</span>
          </div>
          <div class="flex mb-4 border-t-2 py-2">
            <label class="w-full py-2 text-gray-700 font-bold leading-tight mr-4 text-grey-700">Needs total</label>
            <span class="text-right py-2 px-4 text-gray-700 leading-tight font-mono">{{ total(expenses, {needs: true}) }}</span>
          </div>
          <div class="flex mb-4 border-t-2 py-2">
            <label class="w-full py-2 text-gray-700 font-bold leading-tight mr-4 text-grey-700">Wants total</label>
            <span class="text-right py-2 px-4 text-gray-700 leading-tight font-mono">{{ total(expenses, {needs: false}) }}</span>
          </div>
          <div class="text-right">
            <button @click="step -= 1" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Back
            </button>
            <button @click="step += 1" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Next
            </button>
          </div>
        </div>
        <div v-if="step === 5">
          <h2 class="block text-gray-700 text-xl font-bold mb-2">
            Savings target
          </h2>
          <p class="mb-4 text-gray-500">Work out how much you have to spend this month and decide what you want to save.</p>
          <div class="mb-4 bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative" role="alert">
            <strong class="font-bold">Tip:</strong>
            <span class="block sm:inline">Method 50/30/20 recommends to save 20% of income. I calculated this value for you.</span>
          </div>
          <div class="flex mb-4">
            <label class="w-full p-2 border-b-2 border-dotted text-gray-700 leading-tight mr-4">Total projected income</label>
            <span class="py-2 px-4 text-green-700 leading-tight font-mono">+</span>
            <span class="w-1/3 text-right py-2 px-4 text-green-700 leading-tight font-mono">{{ total(incomes) }}</span>
          </div>
          <div class="flex mb-4">
            <label class="w-full p-2 border-b-2 border-dotted text-gray-700 leading-tight mr-4">Less regular expenses</label>
            <span class="py-2 px-4 text-red-700 leading-tight font-mono">-</span>
            <span class="w-1/3 text-right py-2 px-4 text-red-700 leading-tight font-mono">{{ total(expenses) }}</span>
          </div>
          <div class="flex mb-4">
            <label class="w-full p-2 border-b-2 border-dotted text-gray-700 leading-tight mr-4" for="savingAmount">How much do you want to save this month?</label>
            <span class="py-2 px-4 text-red-700 leading-tight font-mono">-</span>
            <input class="w-1/3 text-right shadow appearance-none border rounded w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-mono" autocomplete="off" id="savingAmount" type="tel" placeholder="Amount" v-model="savingAmount" />
          </div>
          <div class="flex mb-4 border-t-2 py-2">
            <label class="w-full py-2 text-gray-700 font-bold leading-tight mr-4 text-grey-700">What's left for you to spend?</label>
            <span class="w-1/3 text-right py-2 px-4 text-gray-700 leading-tight font-mono">{{ availableAmount }}</span>
          </div>
          <div class="text-right">
            <button @click="step -= 1" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Back
            </button>
            <button @click="step += 1" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Next
            </button>
          </div>
        </div>
        <div v-if="step === 6">
          <h2 class="block text-gray-700 text-xl font-bold mb-2">
            Envelopes
          </h2>
          <p class="mb-4 text-gray-500">Let's plan your daily spending limits.</p>
          <div class="mb-4 bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative" role="alert">
            <strong class="font-bold">Tip:</strong>
            <span class="block sm:inline">Method 50/30/20 recommends to allocate 50% for needs and 30% for wants. I calculated those values for you.</span>
          </div>
          <div class="flex mb-4 items-center">
            <label class="w-full p-2 border-b-2 border-dotted text-gray-700 leading-tight mr-4">Needs</label>
            <input class="text-right shadow appearance-none border rounded w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-mono" autocomplete="off" type="tel" placeholder="Amount" v-model="needsAmount" />
            <span class="text-right ml-2 text-gray-700 leading-tight w-1/4">~ {{ Math.round(needsAmount/30) }} per day</span>
          </div>
          <div class="flex mb-4 items-center">
            <label class="w-full p-2 border-b-2 border-dotted text-gray-700 leading-tight mr-4">Wants</label>
            <input class="text-right shadow appearance-none border rounded w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-mono" autocomplete="off" type="tel" placeholder="Amount" v-model="wantsAmount" />
            <span class="text-right ml-2 text-gray-700 leading-tight w-1/4">~ {{ Math.round(wantsAmount/30) }} per day</span>
          </div>
          <div class="flex mb-4 items-center">
            <label class="w-full p-2 border-b-2 border-dotted text-gray-700 leading-tight mr-4">Culture</label>
            <input class="text-right shadow appearance-none border rounded w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-mono" autocomplete="off" type="tel" placeholder="Amount" v-model="cultureAmount" />
            <span class="text-right ml-2 text-gray-700 leading-tight w-1/4">~ {{ Math.round(cultureAmount/30) }} per day</span>
          </div>
          <div class="flex mb-4 items-center">
            <label class="w-full p-2 border-b-2 border-dotted text-gray-700 leading-tight mr-4">Extra</label>
            <input class="text-right shadow appearance-none border rounded w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-mono" autocomplete="off" type="tel" placeholder="Amount" v-model="extraAmount" />
            <span class="text-right ml-2 text-gray-700 leading-tight w-1/4">~ {{ Math.round(extraAmount/30) }} per day</span>
          </div>
          <div class="flex mb-4 border-t-2 py-2">
            <label class="w-full py-2 text-gray-700 font-bold leading-tight mr-4 text-grey-700" :class="{'text-red-700': balance < 0 }">Balance</label>
            <span class="text-right py-2 px-4 text-gray-700 leading-tight font-mono" :class="{'text-red-700': balance < 0 }">{{ balance }}</span>
          </div>
          <div class="text-right">
            <button @click="step -= 1" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Back
            </button>
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
    faq1: false,
    faq2: false,
    step: 1,
    savingAmount: 0,
    needsAmount: 0,
    wantsAmount: 0,
    cultureAmount: 0,
    extraAmount: 0,
    incomes: [
      {
        name: "Salary",
        amount: ""
      },
      {
        name: "Freelance",
        amount: ""
      },
      {
        name: "Benefits",
        amount: ""
      },
      {
        name: "Airbnb",
        amount: ""
      },
      {
        name: "",
        amount: ""
      }
    ],
    expenses: [
      {
        name: "Rent",
        amount: "",
        needs: true
      },
      {
        name: "Electricity",
        amount: "",
        needs: true
      },
      {
        name: "Internet",
        amount: "",
        needs: true
      },
      {
        name: "Phone",
        amount: "",
        needs: true
      },
      {
        name: "Transport",
        amount: "",
        needs: true
      },
      {
        name: "Gym",
        amount: "",
        needs: false
      },
      {
        name: "Netflix",
        amount: "",
        needs: false
      },
      {
        name: "Amazon Prime",
        amount: "",
        needs: false
      },
      {
        name: "",
        amount: "",
        needs: true
      }
    ],
  }),
  metaInfo() {
    return {
      title: "Budget Edit"
    };
  },
  mounted() {
    this.calculate();
  },
  watch: {
    incomeTotal() {
      this.calculate();
    },
    expenseTotal() {
      this.calculate();
    }
  },
  computed: {
    incomeTotal () {
      return this.total(this.incomes);
    },
    expenseTotal () {
      return this.total(this.expenses);
    },
    availableAmount () {
      return this.total(this.incomes) - this.total(this.expenses) - this.savingAmount;
    },
    balance () {
      return this.availableAmount - this.needsAmount - this.cultureAmount - this.extraAmount - this.wantsAmount;
    }
  },
  methods: {
    calculate() {
      this.savingAmount = this.incomeTotal * 0.2;
      this.needsAmount = this.incomeTotal * 0.5 - this.total(this.expenses, {needs: true});
      const wantsAmount = this.incomeTotal * 0.3 - this.total(this.expenses, {needs: false});
      this.cultureAmount = wantsAmount * 0.1;
      this.extraAmount = wantsAmount * 0.1;
      this.wantsAmount = wantsAmount - parseInt(this.cultureAmount) -  parseInt(this.extraAmount)
    },
    total (items, filter) {
      let filteredItems = items

      if (typeof filter === 'object') {
        const key = Object.keys(filter)[0]
        filteredItems = filteredItems.filter(item => item[key] === filter[key])
      }

      const reducer = (accumulator, item) => accumulator + parseInt(item.amount ? item.amount : 0);

      return filteredItems.reduce(reducer, 0);
    },
    filled (items) {
      return items.filter(item => item.amount);
    },
    adjustArray(items, item, index) {
      if (item.name && index === items.length - 1) {
        items.push({
          name: "",
          amount: "",
          needs: true
        })
      }
      if (!item.name && index < items.length - 1) {
        items.splice(index, 1)
      }
    }
  }
}
</script>
