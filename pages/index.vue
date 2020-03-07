<template>
  <div class="container md:mt-4 mx-auto max-w-screen-sm md:shadow-md rounded">
    <div>
      <div class="p-4 bg-gray-200 text-right flex justify-between items-center">
        <h1 class="text-gray-700 text-xl font-bold">MoneyDo: Budget Planner</h1>
        <span class="text-gray-700">{{ step }} / 9</span>
      </div>
      <div class="px-8 pt-6 pb-8">
        <div v-if="step === 1">
          <div class="flex">
            <div class="w-2/3">
              <div class="font-serif text-gray-700 leading-loose">
                <p>Hello Master,</p>
                <p><br/></p>
                <p>I am going to help you to define your personal finance strategy and plan your first budget.</p>
                <p>We are going to use Kakeibo and 50/30/20 methods.</p>
                <p>Interactions are 100% secure and private. Your answers won't be recorded or transfered.</p>
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
              Motivation
            </h2>
            <p class="mb-4 text-gray-500">Why do you need a personal finance strategy?</p>
            <div v-for="(motivation, index) in motivations" :key="index" class="flex mb-4 items-center">
              <input :id="`motivation-${index}`" type="checkbox" v-model="motivation.answer" />
              <label :for="`motivation-${index}`" class="w-full p-2 border-b-2 border-dotted text-gray-700 leading-tight mr-4">{{ motivation.name }}</label>
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
          <div>
            <h2 class="block text-gray-700 text-xl font-bold mb-2">
              Questionnaire
            </h2>
            <p class="mb-4 text-gray-500">Answers to following questions will help us to set finance priorities.</p>
            <h3 class="block text-gray-700 font-bold mb-2">Your actual situation</h3>
            <div v-for="(context, index) in contexts" :key="`context-${index}`" class="flex mb-4 items-center">
              <label class="w-full p-2 border-b-2 border-dotted text-gray-700 leading-tight mr-4">{{ context.name }}</label>
              <div class="flex items-center">
                <label>
                  <span>Yes</span>
                  <input type="radio" v-model="context.answer" :value="true" />
                </label>
                <label>
                  <span>No</span>
                  <input type="radio" v-model="context.answer" :value="false" />
                </label>
              </div>
            </div>
            <h3 class="block text-gray-700 font-bold mb-2">Your income</h3>
            <div v-for="(context, index) in contextsIncome" :key="`context-income-${index}`" class="flex mb-4 items-center">
              <label class="w-full p-2 border-b-2 border-dotted text-gray-700 leading-tight mr-4">{{ context.name }}</label>
              <div class="flex items-center">
                <label>
                  <span>Yes</span>
                  <input type="radio" v-model="context.answer" :value="true" />
                </label>
                <label>
                  <span>No</span>
                  <input type="radio" v-model="context.answer" :value="false" />
                </label>
              </div>
            </div>
            <h3 class="block text-gray-700 font-bold mb-2">Your expenses</h3>
            <div v-for="(context, index) in contextsExpense" :key="`context-expense-${index}`" class="flex mb-4 items-center">
              <label class="w-full p-2 border-b-2 border-dotted text-gray-700 leading-tight mr-4">{{ context.name }}</label>
              <div class="flex items-center">
                <label>
                  <span>Yes</span>
                  <input type="radio" v-model="context.answer" :value="true" />
                </label>
                <label>
                  <span>No</span>
                  <input type="radio" v-model="context.answer" :value="false" />
                </label>
              </div>
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
        <div v-if="step === 4">
          <div>
            <h2 class="block text-gray-700 text-xl font-bold mb-2">
              Your actual situation
            </h2>
            <div v-for="(amount, index) in amounts" :key="index" class="flex mb-4">
              <input @keyup="adjustArray(amounts, amount, index)" tabindex="-1" class="w-full p-2 border-b-2 border-dotted text-gray-700 leading-tight mr-4" type="text" placeholder="Amount name" v-model="amount.name" autocomplete="off" />
              <input v-if="amount.name" class="text-right shadow appearance-none border rounded w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-mono" autocomplete="off" type="tel" placeholder="Amount" v-model="amount.amount" />
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
        <div v-if="step === 5">
          <div>
            <h2 class="block text-gray-700 text-xl font-bold mb-2">
              Monthly net income (after tax)
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
        <div v-if="step === 6">
          <h2 class="block text-gray-700 text-xl font-bold mb-2">
            Your regular outgoings
          </h2>
          <p class="mb-4 text-gray-500">List your regular expenses here. That's anything that recurs each month, such as rent, mortgage, utility bills, season tickets, credit card payments, phone, parking permit, gym membership, home, car, health, insurance, loans, etc.</p>
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
        <div v-if="step === 7">
          <h2 class="block text-gray-700 text-xl font-bold mb-2">
            Absolute needs
          </h2>
          <p class="mb-4 text-gray-500">Uncheck which of those regular expenses are not absolute must for your survival.</p>
          <div class="mb-4 bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative" role="alert">
            <strong class="font-bold">Tip:</strong>
            <span class="block sm:inline">If it is from needs category, but premium and more costly then it comes to wants.</span>
          </div>
          <div v-for="(expense, index) in filled(expenses)" :key="index" class="flex mb-4 items-center">
            <input :id="`expense-${index}`" type="checkbox" v-model="expense.needs" />
            <label :for="`expense-${index}`" class="w-full p-2 border-b-2 border-dotted text-gray-700 leading-tight mr-4">{{ expense.name }}</label>
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
        <div v-if="step === 8">
          <h2 class="block text-gray-700 text-xl font-bold mb-2">
            Savings target
          </h2>
          <p class="mb-4 text-gray-500">Work out how much you have to spend this month and decide what you want to save.</p>
          <div class="mb-4 bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative" role="alert">
            <strong class="font-bold">Tip:</strong>
            <span class="block sm:inline">Save 20% of income.</span>
          </div>
          <div v-if="goals.salary.enabled" class="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <strong class="font-bold block">Goal "Save 3 salaries" - {{ goals.salary.percent }}%</strong>
            <span class="block sm:inline">You saved {{ goals.salary.amount }} of {{ goals.salary.goal }}. With {{ savingAmount }} a month you will reach this goal in {{ monthsToGoal(goals.salary, savingAmount) }} months.</span>
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
        <div v-if="step === 9">
          <h2 class="block text-gray-700 text-xl font-bold mb-2">
            Envelopes
          </h2>
          <p class="mb-4 text-gray-500">Let's plan your daily spending limits.</p>
          <div class="mb-4 bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative" role="alert">
            <strong class="font-bold">Tip:</strong>
            <span class="block sm:inline">Plan 50% of income for needs and 30% for wants.</span>
          </div>
          <div class="flex mb-4 items-center">
            <dl class="mb-4 w-full p-2 border-b-2 border-dotted mr-4">
              <dt class="font-bold text-gray-700">Needs</dt>
              <dd class="text-gray-500">Things you can’t live without, like food, toilet paper and shampoo.</dd>
            </dl>
            <input class="text-right shadow appearance-none border rounded w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-mono" autocomplete="off" type="tel" placeholder="Amount" v-model="needsAmount" />
          </div>
          <div class="flex mb-4 items-center">
            <dl class="mb-4 w-full p-2 border-b-2 border-dotted mr-4">
              <dt class="font-bold text-gray-700">Wants</dt>
              <dd class="text-gray-500">Purchases you enjoy but don’t need, like a takeout meal or pair of new shoes.</dd>
            </dl>
            <input class="text-right shadow appearance-none border rounded w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-mono" autocomplete="off" type="tel" placeholder="Amount" v-model="wantsAmount" />
          </div>
          <div class="flex mb-4 items-center">
            <dl class="mb-4 w-full p-2 border-b-2 border-dotted mr-4">
              <dt class="font-bold text-gray-700">Culture</dt>
              <dd class="text-gray-500">Things like movies, books, museum visits and education.</dd>
            </dl>
            <input class="text-right shadow appearance-none border rounded w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-mono" autocomplete="off" type="tel" placeholder="Amount" v-model="cultureAmount" />
          </div>
          <div class="flex mb-4 items-center">
            <dl class="mb-4 w-full p-2 border-b-2 border-dotted mr-4">
              <dt class="font-bold text-gray-700">Extra</dt>
              <dd class="text-gray-500">Expenses you aren't going to anticipate, like a doctor’s visit, car repair or unplanned presents.</dd>
            </dl>
            <input class="text-right shadow appearance-none border rounded w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-mono" autocomplete="off" type="tel" placeholder="Amount" v-model="extraAmount" />
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
    goals: {},
    motivations: [
      {
        name: 'Pay down on dept',
        answer: false,
      },
      {
        name: 'Start own business',
        answer: false,
      },
      {
        name: 'Buy a new gadget',
        answer: false,
      },
      {
        name: 'Buy a house',
        answer: false,
      },
      {
        name: 'Travel the world',
        answer: false,
      },
      {
        name: 'Have savings',
        answer: false,
      },
      {
        name: 'Finance strategy for a family',
        answer: false,
      },
      {
        name: 'Start investing',
        answer: false,
      }
    ],
    contexts: [
      {
        name: 'Do you have some savings?',
        answer: null
      },
      {
        name: 'Do you have investments?',
        answer: null
      },
      {
        name: 'Are you married?',
        answer: null
      },
      {
        name: 'Do you have kids or planning to have soon?',
        answer: null
      },
    ],
    contextsIncome: [
      {
        name: 'Do you own a business?',
        answer: null,
      },
      {
        name: 'Are you an employee?',
        answer: null,
      },
      {
        name: 'Do you have a life insurance?',
        answer: null,
      },
      {
        name: 'Do you do freelance jobs?',
        answer: null,
      },
      {
        name: 'Do you get any help from goverment (jobless benefits, pension, etc.)? ',
        answer: null,
      },
      {
        name: 'Do you rent your flat (Airbnb)?',
        answer: null,
      },
    ],
    contextsExpense: [
      {
        name: 'Do you have to pay a credit?',
        answer: null
      },
      {
        name: 'Do you use overdraft?',
        answer: null
      },
      {
        name: 'Do you have some money left on a salary day?',
        answer: null
      },
    ],
    amounts: [
      {
        name: "Savings",
        amount: "0"
      },
      {
        name: "Credit",
        amount: "0"
      },
      {
        name: "Overdraft",
        amount: "0"
      },
      {
        name: "Loan",
        amount: "0"
      },
      {
        name: "",
        amount: ""
      }
    ],
    incomes: [
      {
        name: "Salary",
        amount: "2000"
      },
      {
        name: "Freelance",
        amount: "0"
      },
      {
        name: "Benefits",
        amount: "0"
      },
      {
        name: "Airbnb",
        amount: "0"
      },
      {
        name: "",
        amount: ""
      }
    ],
    expenses: [
      {
        name: "Rent",
        amount: "500",
        needs: true
      },
      {
        name: "Loan",
        amount: "0",
        needs: true
      },
      {
        name: "Electricity",
        amount: "0",
        needs: true
      },
      {
        name: "Internet",
        amount: "0",
        needs: true
      },
      {
        name: "Phone",
        amount: "0",
        needs: true
      },
      {
        name: "Transport",
        amount: "0",
        needs: true
      },
      {
        name: "Gym",
        amount: "0",
        needs: false
      },
      {
        name: "Netflix",
        amount: "0",
        needs: false
      },
      {
        name: "Amazon Prime",
        amount: "0",
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
    },
    amountTotal() {
      this.calculate();
    }
  },
  computed: {
    incomeTotal () {
      return this.total(this.incomes);
    },
    amountTotal () {
      return this.total(this.amounts);
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
      this.wantsAmount = wantsAmount - parseInt(this.cultureAmount) -  parseInt(this.extraAmount);

      const goal = this.get('incomes', 'Salary') * 3
      const amount = this.get('amounts', 'Savings');
      const percent = Math.round(amount / goal) * 100;

      this.goals = {
        salary: {
          amount,
          goal,
          percent,
          enabled: percent < 100
        }
      }
    },
    monthsToGoal(goal, savingAmount) {
      return Math.round((goal.goal - goal.amount) / savingAmount);
    },
    get(items, name) {
      return parseInt(this[items].find(item => item.name === name).amount);
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
      return items.filter(item => item.amount > 0);
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
