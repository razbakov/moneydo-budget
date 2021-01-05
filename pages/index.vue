<template>
  <div>
    <div class="container md:mt-4 mx-auto max-w-screen-sm md:shadow-md rounded">
      <div>
        <div class="p-4 bg-gray-200 text-right flex justify-between items-center">
          <h1 class="text-gray-700 text-xl font-bold">MoneyDo: Budget Planner</h1>
          <span class="text-gray-700" v-if="step < 10">{{ step }} / 9</span>
        </div>
        <div class="px-8 pt-6 pb-8">
          <div v-if="step === 1">
            <div class="flex">
              <div>
                <div class="font-serif text-gray-700 leading-loose">
                  <p>Hello Master,</p>
                  <p><br/></p>
                  <p>I am going to help you to define your personal finance strategy and plan your first budget. We are going to use Kakeibo and 50/30/20 methods.</p>
                </div>
                <div>
                  <dl class="m-3">
                    <dt @mousedown="faq1 = !faq1" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-3">What is Kakeibo?</dt>
                    <dd v-if="faq1" class="px-2 text-gray-600 mb-3">
                      <p class="mb-4">Kakeibo was invented in 1904 by Japan’s first female journalist, Motoko Hani.</p>
                      <p>The Japanese tradition of using a kakeibo, which translates to “household finance ledger,” offers an easy solution to mindless spending habits. This budgeting system combines tracking purchases with the habit of mindfulness in order to reign in unnecessary spending and help you achieve savings goals. <a class="underline" href="https://www.credit.com/personal-finance/kakeibo/" @click="trackClick('kakeibo')" target="_blank">Learn more</a>.</p>
                    </dd>
                    <dt @mousedown="faq2 = !faq2" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-3">What is 50/30/20?</dt>
                    <dd v-if="faq2" class="px-2 text-gray-600 mb-3">
                      <p class="mb-4">Elizabeth Warren popularized 50/30/20 budget rule in her book "All Your Worth: The Ultimate Lifetime Money Plan".</p>
                      <p>The 50-30-20 rule puts 50% of your income toward necessities, like housing and bills. Twenty percent should then go toward financial goals, like paying off debt or saving for retirement. Finally, 30% of your income can be allocated to wants, like dining or entertainment. <a class="underline" href="https://www.thebalance.com/the-50-30-20-rule-of-thumb-453922" @click="trackClick('50_30_20')" target="_blank">Learn more</a>.</p>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div class="text-right">
              <button @click="step += 1" class="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Next
              </button>
            </div>
          </div>
          <div v-if="step === 2">
            <div>
              <h2 class="block text-gray-700 text-xl font-bold mb-2">
                Wizard
              </h2>
              <p class="mb-4 text-gray-700">I prepared a questionnaire that will allow me to recommend you list of incomes, expenses and goals. Would you like to give it a try?</p>
              <div class="flex justify-center">
                <button @click="step = 5" class="mr-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                  No
                </button>
                <button @click="step = 3" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Yes
                </button>
              </div>
              <TTip>Answer yes and skip filling values to see how it works first.</TTip>
            </div>
          </div>
          <div v-if="step === 3">
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
                <button @click="step += 1" class="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Next
                </button>
              </div>
            </div>
          </div>
          <div v-if="step === 4">
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
                <button @click="step += 1" class="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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
              <div v-for="(income, index) in incomes" :key="index" class="flex mb-4">
                <input @keyup="adjustArray(incomes, income, index)" tabindex="-1" class="w-full p-2 border-b-2 border-dotted text-gray-700 leading-tight mr-4" type="text" placeholder="Add another income" v-model="income.name" autocomplete="off" />
                <input v-if="income.name" class="text-right shadow appearance-none border rounded w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-mono" autocomplete="off" type="tel" @focus="$event.target.select()" placeholder="Amount" v-model="income.amount" />
              </div>
              <div class="flex mb-4 border-t-2 py-2">
                <label class="w-full py-2 text-gray-700 font-bold leading-tight mr-4 text-grey-700">Income total</label>
                <span class="text-right py-2 px-4 text-gray-700 leading-tight font-mono">{{ total(incomes) }}</span>
              </div>
              <div class="text-right">
                <button @click="step -= 1" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                  Back
                </button>
                <button @click="step += 1" class="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Next
                </button>
              </div>
              <TTip>Round everything up to whole numbers to make calculations simpler.</TTip>
            </div>
          </div>
          <div v-if="step === 6">
            <h2 class="block text-gray-700 text-xl font-bold mb-2">
              Regular expenses
            </h2>
            <p class="mb-4 text-gray-500">List your regular expenses here. That's anything that recurs each month, such as rent, mortgage, utility bills, season tickets, credit card payments, phone, parking permit, gym membership, home, car, health, insurance, loans, etc.</p>
            <div v-for="(expense, index) in expenses" :key="index" class="flex mb-4">
              <input @keyup="adjustArray(expenses, expense, index)" tabindex="-1" class="w-full p-2 border-b-2 border-dotted text-gray-700 leading-tight mr-4" type="text" placeholder="Add another expense" v-model="expense.name" autocomplete="off" />
              <input v-if="expense.name" class="text-right shadow appearance-none border rounded w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-mono" autocomplete="off" type="tel" @focus="$event.target.select()" placeholder="Amount" v-model="expense.amount" />
            </div>
            <div class="flex mb-4 border-t-2 py-2">
              <label class="w-full py-2 text-gray-700 font-bold leading-tight mr-4 text-grey-700">Expense total</label>
              <span class="text-right py-2 px-4 text-gray-700 leading-tight font-mono">{{ total(expenses) }}</span>
            </div>
            <div class="text-right">
              <button @click="step -= 1" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                Back
              </button>
              <button @click="step += 1" class="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Next
              </button>
            </div>
            <TTip>Use previous bills for anything you need to estimate, and don't be afraid to round numbers up - it's better to plan for higher costs than lower.</TTip>
          </div>
          <div v-if="step === 7">
            <h2 class="block text-gray-700 text-xl font-bold mb-2">
              Needs
            </h2>
            <p class="mb-4 text-gray-500">Check expenses that are absolute must for your survival.</p>
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
              <button @click="step += 1" class="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Next
              </button>
            </div>
            <TTip>If it is from needs category, but premium and more costly then it comes to wants.</TTip>
          </div>
          <div v-if="step === 8">
            <h2 class="block text-gray-700 text-xl font-bold mb-2">
              Savings target
            </h2>
            <p class="mb-4 text-gray-500">Decide what you want to save. Drag percent bar or input amount in Savings.</p>
            <div class="flex mb-4">
              <label class="w-full p-2 border-b-2 border-dotted text-gray-700 leading-tight mr-4">Total income</label>
              <span class="py-2 px-4 text-green-700 leading-tight font-mono">+</span>
              <span class="w-1/3 text-right py-2 px-4 text-green-700 leading-tight font-mono">{{ total(incomes) }}</span>
            </div>
            <div class="flex mb-4">
              <label class="w-full p-2 border-b-2 border-dotted text-gray-700 leading-tight mr-4">Regular expenses</label>
              <span class="py-2 px-4 text-red-700 leading-tight font-mono">-</span>
              <span class="w-1/3 text-right py-2 px-4 text-red-700 leading-tight font-mono">{{ total(expenses) }}</span>
            </div>
            <div class="flex mb-4">
              <label class="w-full p-2 border-b-2 border-dotted text-gray-700 leading-tight mr-4" for="savingAmount">Savings ({{ savingsPercent }}%)</label>
              <span class="py-2 px-4 text-red-700 leading-tight font-mono">-</span>
              <input class="w-1/3 text-right shadow appearance-none border rounded w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-mono" autocomplete="off" id="savingAmount" type="tel" @focus="$event.target.select()" placeholder="Amount" v-model="savingAmount" />
            </div>
            <div class="mt-16 mb-4">
              <vue-slider
                v-model="savingsPercent"
                tooltip="always"
                :min="1"
                :max="100"
              >
                <template v-slot:tooltip="{ value }">
                  <div class="p-1 rounded text-sm text-white bg-blue-500">{{ value }}%</div>
                </template>
              </vue-slider>
            </div>
            <div class="flex mb-4 border-t-2 py-2">
              <label class="w-full py-2 text-gray-700 font-bold leading-tight mr-4 text-grey-700">What's left for you to spend?</label>
              <span class="w-1/3 text-right py-2 px-4 text-gray-700 leading-tight font-mono">{{ availableAmount }}</span>
            </div>
            <div class="text-right">
              <button @click="step -= 1" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                Back
              </button>
              <button @click="step += 1" class="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Next
              </button>
            </div>
            <TTip class="mb-4">Save 20% of income.</TTip>
            <div v-if="goals.salary.enabled" class="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
              <strong class="font-bold block">Goal "Save 3 salaries" - {{ goals.salary.percent }}%</strong>
              <span class="block sm:inline">You saved {{ goals.salary.amount }} of {{ goals.salary.goal }}. With {{ savingAmount }} a month you will reach this goal in {{ monthsToGoal(goals.salary, savingAmount) }} months.</span>
            </div>
            <div v-if="savingsPercent < 20" class="mb-4 bg-orange-100 border border-orange-400 text-orange-700 px-4 py-3 rounded relative" role="alert">
              <h4 class="font-bold block">Long-term goals and savings</h4>
              <p class="block sm:inline">Try to save 20% of your income. Right now it's {{ savingsPercent }}%.</p>
            </div>
          </div>
          <div v-if="step === 9">
            <h2 class="block text-gray-700 text-xl font-bold mb-2">
              Budget
            </h2>
            <p class="mb-4 text-gray-500">Let's plan your daily spending limits. Drag the slider to set needs percent.</p>
            <div class="flex mb-4 pr-1">
              <label class="w-full p-2 border-b-2 border-dotted text-gray-700 leading-tight mr-4">Total income</label>
              <span class="text-right py-2 px-4 text-green-700 leading-tight font-mono">{{ total(incomes) }}</span>
            </div>
            <div class="flex mb-4 pr-1">
              <label class="w-full p-2 border-b-2 border-dotted text-gray-700 leading-tight mr-4">Savings ({{ savingsPercent }}% of income)</label>
              <span class="text-right py-2 px-4 text-red-700 leading-tight font-mono">{{ savingAmount }}</span>
            </div>
            <div class="bg-gray-100 pr-1">
              <h2 class="mb-4 w-full p-2 mr-4 font-bold text-gray-700">Needs ({{ needsPercent }}% of income)</h2>
              <div class="pl-4">
                <div class="flex mb-4">
                  <label class="w-full p-2 border-b-2 border-dotted text-gray-700 leading-tight mr-4">Regular needs</label>
                  <span class="text-right py-2 px-4 text-red-700 leading-tight font-mono">{{ total(expenses, {needs: true}) }}</span>
                </div>
                <div class="flex mb-4 items-center">
                  <dl class="mb-4 w-full p-2 border-b-2 border-dotted mr-4">
                    <dt class="font-bold text-gray-700">Daily needs</dt>
                    <dd class="text-gray-500">Things you can’t live without, like food, toilet paper and shampoo.</dd>
                  </dl>
                  <input class="text-right shadow appearance-none border rounded w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-mono" autocomplete="off" type="tel" @focus="$event.target.select()" placeholder="Amount" v-model="dailyNeedsAmount" />
                </div>
              </div>
            </div>
            <div class="mt-16 mb-4">
              <vue-slider
                v-model="needsPercent"
                tooltip="always"
                :min="1"
                :max="100 - savingsPercent"
              >
                <template v-slot:tooltip="{ value }">
                  <div class="p-1 rounded text-sm text-white bg-blue-500">{{ value }}%</div>
                </template>
              </vue-slider>
            </div>
            <div class="bg-gray-100 pr-1">
              <h2 class="mb-4 w-full p-2 mr-4 font-bold text-gray-700">Wants ({{ wantsPercent }}% of income)</h2>
              <div class="pl-4">
                <div class="flex mb-4">
                  <label class="w-full p-2 border-b-2 border-dotted text-gray-700 leading-tight mr-4">Regular wants</label>
                  <span class="text-right py-2 px-4 text-red-700 leading-tight font-mono">{{ total(expenses, {needs: false}) }}</span>
                </div>
                <div class="flex mb-4 items-center">
                  <dl class="mb-4 w-full p-2 border-b-2 border-dotted mr-4">
                    <dt class="font-bold text-gray-700">Culture</dt>
                    <dd class="text-gray-500">Things like movies, books, museum visits and education.</dd>
                  </dl>
                  <input class="text-right shadow appearance-none border rounded w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-mono" autocomplete="off" type="tel" @focus="$event.target.select()" placeholder="Amount" v-model="cultureAmount" />
                </div>
                <div class="flex mb-4 items-center">
                  <dl class="mb-4 w-full p-2 border-b-2 border-dotted mr-4">
                    <dt class="font-bold text-gray-700">Unexpected</dt>
                    <dd class="text-gray-500">Expenses you aren't going to anticipate, like a doctor’s visit, car repair or unplanned presents.</dd>
                  </dl>
                  <input class="text-right shadow appearance-none border rounded w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-mono" autocomplete="off" type="tel" @focus="$event.target.select()" placeholder="Amount" v-model="extraAmount" />
                </div>
                <div class="flex mb-4 items-center">
                  <dl class="mb-4 w-full p-2 border-b-2 border-dotted mr-4">
                    <dt class="font-bold text-gray-700">Daily wants</dt>
                    <dd class="text-gray-500">Purchases you enjoy but don’t need, like a takeout meal or pair of new shoes.</dd>
                  </dl>
                  <input class="text-right shadow appearance-none border rounded w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-mono" autocomplete="off" type="tel" @focus="$event.target.select()" placeholder="Amount" v-model="dailyWantsAmount" />
                </div>
              </div>
            </div>
            <div class="flex mb-4 border-t-2 py-2 pr-1">
              <label class="w-full py-2 text-gray-700 font-bold leading-tight mr-4 text-grey-700" :class="{'text-red-700': balance < 0 }">Balance</label>
              <span class="text-right py-2 px-4 text-gray-700 leading-tight font-mono" :class="{'text-red-700': balance < 0 }">{{ balance }}</span>
            </div>
            <div class="text-right">
              <button @click="step -= 1" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                Back
              </button>
              <button @click="step += 1" class="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Finish
              </button>
            </div>
            <TTip class="mb-4">Plan 50% of income for needs and 30% for wants.</TTip>
            <div v-if="needsPercent > 50" class="mb-4 bg-orange-100 border border-orange-400 text-orange-700 px-4 py-3 rounded relative" role="alert">
              <h4 class="font-bold block">Reduce you needs or raise an income</h4>
              <p class="block sm:inline">Ensure your needs are lower than 50% of your income. Right now it's {{ needsPercent }}%.</p>
            </div>
            <div v-if="balance != 0" class="mb-4 bg-orange-100 border border-orange-400 text-orange-700 px-4 py-3 rounded relative" role="alert">
              <h4 class="font-bold block">Adjust your budget</h4>
              <p class="block sm:inline">Ensure balance is 0. Right now it is {{ balance }}.</p>
            </div>
          </div>
          <div v-if="step === 10" class="text-gray-700">
            <div v-if="needsPercent > 50" class="mb-4 bg-orange-100 border border-orange-400 text-orange-700 px-4 py-3 rounded relative" role="alert">
              <button @click="step = 9" class="float-right ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Fix
              </button>
              <h4 class="font-bold block">Reduce you needs or raise an income</h4>
              <p class="block sm:inline">Ensure your needs are lower than 50% of your income. Right now it's {{ needsPercent }}%.</p>
            </div>
            <div v-if="balance != 0" class="mb-4 bg-orange-100 border border-orange-400 text-orange-700 px-4 py-3 rounded relative" role="alert">
              <button @click="step = 9" class="float-right ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Fix
              </button>
              <h4 class="font-bold block">Adjust your budget</h4>
              <p class="block sm:inline">Ensure balance is 0. Right now it is {{ balance }}.</p>
            </div>
            <div v-if="savingsPercent < 20" class="mb-4 bg-orange-100 border border-orange-400 text-orange-700 px-4 py-3 rounded relative" role="alert">
              <button @click="step = 8" class="float-right ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Fix
              </button>
              <h4 class="font-bold block">Long-term goals and savings</h4>
              <p class="block sm:inline">Try to save 20% of your income. Right now it's {{ savingsPercent }}%.</p>
            </div>
            <div>
              <button @click="print" class="float-right ml-2 border hover:bg-gray-200 text-gray-500 font-bold py-2 px-4 rounded">
                Save as PDF
              </button>
              <h4 class="font-bold block">Step 1. Savings</h4>
              <p class="block sm:inline">Put savings aside.</p>
              <div class="p-4">
                <div class="flex mb-4 items-center">
                  <dl class="mb-4 w-full p-2 border-b-2 border-dotted mr-4">
                    <dt class="font-bold text-gray-700">Savings</dt>
                    <dd class="text-gray-500">Transfer this amount to different bank account if possible and try to forget about this money.</dd>
                  </dl>
                  <span class="text-right py-2 px-4 leading-tight font-mono">{{ savingAmount }}</span>
                </div>
              </div>
            </div>
            <div>
              <h4 class="font-bold block">Step 2. Daily spendings.</h4>
              <p class="block sm:inline">Prepare 4 paper envelopes and put cash in it. For any payment use money from a corresponding envelope.</p>
              <div class="p-4">
                <div class="flex mb-4 items-center">
                  <dl class="mb-4 w-full p-2 border-b-2 border-dotted mr-4">
                    <dt class="font-bold text-gray-700">Needs (~{{ Math.round(dailyNeedsAmount / 30) }} per day)</dt>
                    <dd class="text-gray-500">Things you can’t live without, like food, toilet paper and shampoo.</dd>
                  </dl>
                  <span class="text-right py-2 px-4 leading-tight font-mono">{{ dailyNeedsAmount }}</span>
                </div>
                <div class="flex mb-4 items-center">
                  <dl class="mb-4 w-full p-2 border-b-2 border-dotted mr-4">
                    <dt class="font-bold text-gray-700">Wants (~{{ Math.round(dailyWantsAmount / 30) }} per day)</dt>
                    <dd class="text-gray-500">Purchases you enjoy but don’t need, like a takeout meal or pair of new shoes.</dd>
                  </dl>
                  <span class="text-right py-2 px-4 leading-tight font-mono">{{ dailyWantsAmount }}</span>
                </div>
                <div class="flex mb-4 items-center">
                  <dl class="mb-4 w-full p-2 border-b-2 border-dotted mr-4">
                    <dt class="font-bold text-gray-700">Culture (~{{ Math.round(cultureAmount / 30) }} per day)</dt>
                    <dd class="text-gray-500">Things like movies, books, museum visits and education.</dd>
                  </dl>
                  <span class="text-right py-2 px-4 leading-tight font-mono">{{ cultureAmount }}</span>
                </div>
                <div class="flex items-center">
                  <dl class="mb-4 w-full p-2 border-b-2 border-dotted mr-4">
                    <dt class="font-bold text-gray-700">Unexpected (~{{ Math.round(extraAmount / 30) }} per day)</dt>
                    <dd class="text-gray-500">Expenses you aren't going to anticipate, like a doctor’s visit, car repair or unplanned presents.</dd>
                  </dl>
                  <span class="text-right py-2 px-4 leading-tight font-mono">{{ extraAmount }}</span>
                </div>
              </div>
            </div>
            <div class="mb-4">
              <h4 class="font-bold block">Step 3. Save first, spend later.</h4>
              <p class="block sm:inline">Limit your daily spendings (see above). All you saved today you can spend tomorrow. Track daily limits with <strong class="font-bold">MoneyDo</strong>.</p>
            </div>
            <div class="mt-8 flex justify-between">
              <button @click="step -= 1" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                Back
              </button>
              <a href="https://moneydo.vip/?utm_medium=referral&utm_source=planner&utm_campaign=daily-limits&utm_content=envelopes" @click="trackClick('pocket_budget')" target="_blank" class="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-4 relative rounded">
                Try MoneyDo
              </a>
            </div>
            <!-- Better spend everything one day before salary than one day after. -->
          </div>
        </div>
      </div>
    </div>
    <div class="container md:mt-4 border-gray-400 border-t md:border-t-0 mx-auto max-w-screen-sm text-sm text-gray-700 text-center mb-4 p-2">
      Interactions are 100% secure and private. Your answers won't be recorded. See
      <a href="https://github.com/razbakov/moneydo" @click="trackClick('github')" target="_blank" class="underline">source code</a>.
    </div>

    <TTweet v-if="step === 10" class="my-16" />
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import TTip from '~/components/TTip'
import TTweet from '~/components/TTweet'
import { isPWA } from "~/lib";
import * as Firebase from "firebase/app";

export default {
  components: {
    VueSlider,
    TTip,
    TTweet
  },
  data: () => ({
    name: "March",
    income: 1000,
    dirty: false,
    faq1: false,
    faq2: false,
    step: 1,
    savingAmount: 0,
    dailyNeedsAmount: 0,
    dailyWantsAmount: 0,
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
        name: 'Have savings',
        answer: false,
      },
      {
        name: 'Start own business',
        answer: false,
      },
      {
        name: 'Buy something expensive (new gadget, car, house, etc.)',
        answer: false,
      },
      {
        name: 'Travel the world',
        answer: false,
      },
      {
        name: "I don't know yet",
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
        name: 'Are you married or in a serious relationship?',
        answer: null
      },
      {
        name: 'Do you have kids or planning to have soon (in your household)?',
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
        name: 'Do you rent out your flat?',
        answer: null,
      },
    ],
    contextsExpense: [
      {
        name: 'Do you have to pay a credit?',
        answer: null
      },
      {
        name: 'Do you normally use overdraft?',
        answer: null
      },
      {
        name: 'Do you normally have some money left on a salary day?',
        answer: null
      },
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
        name: "Insurance",
        amount: "0",
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
  head() {
    return {
      title: `Step ${this.step}`,
      screen: `Step ${this.step}`,

      changed(meta) {
        Firebase.analytics().setCurrentScreen(meta.screen);
        Firebase.analytics().logEvent("page_view");
        Firebase.analytics().logEvent("screen_view", {
          app_name: isPWA() ? "pwa" : "web",
          screen_name: meta.screen
        });
      }
    };
  },
  mounted() {
    this.calculate();
    this.step = this.$route.query.step ? parseInt(this.$route.query.step) : 1;
  },
  watch: {
    incomeTotal() {
      this.calculate();
    },
    expenseTotal() {
      this.calculate();
    },
    faq1() {
      this.$fireAnalytics.logEvent('read_kakeibo');
    },
    faq2() {
      this.$fireAnalytics.logEvent('read_50_30_20');
    },
    step(val, oldVal) {
      if (val > oldVal) {
        if (oldVal === 2) {
          if (val === 3) {
            this.$fireAnalytics.logEvent('wizard_enabled');
          } else {
            this.$fireAnalytics.logEvent('wizard_disabled');
          } 
        }

        if (oldVal === 5 && this.incomeTotal !== 2000) {
          this.$fireAnalytics.logEvent('change_income');
        }

        if (oldVal === 6 && this.incomeTotal !== 500) {
          this.$fireAnalytics.logEvent('change_expense');
        }

        if (oldVal === 8 && this.savingsPercent !== 20) {
          this.$fireAnalytics.logEvent('change_savings');
        }

        if (oldVal === 9 && this.needsPercent !== 50) {
          this.$fireAnalytics.logEvent('change_needs');
        }

        this.$fireAnalytics.logEvent('step_next');
      } else {
        this.$fireAnalytics.logEvent('step_prev');
      }
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
      return this.availableAmount - this.dailyNeedsAmount - this.cultureAmount - this.extraAmount - this.dailyWantsAmount;
    },
    needsPercent: {
      get () {
        const result = (parseInt(this.dailyNeedsAmount) + this.total(this.expenses, {needs: true}) ) / this.incomeTotal * 100;

        return Math.round(result);
      },
      set (val) {
        this.dailyNeedsAmount = Math.round((val / 100) * this.incomeTotal) - this.total(this.expenses, {needs: true});
      }
    },
    wantsPercent () {
      return 100 - this.savingsPercent - this.needsPercent;
    },
    savingsPercent: {
      get () {
        return Math.round(this.savingAmount / this.incomeTotal * 100);
      },
      set (val) {
        this.savingAmount = Math.round((val / 100) * this.incomeTotal);
      }
    }
  },
  methods: {
    calculate() {
      this.savingAmount = this.incomeTotal * 0.2;
      this.dailyNeedsAmount = this.incomeTotal * 0.5 - this.total(this.expenses, {needs: true});
      this.wantsAmount = this.incomeTotal * 0.3 - this.total(this.expenses, {needs: false});
      this.cultureAmount = this.wantsAmount * 0.1;
      this.extraAmount = this.wantsAmount * 0.1;
      this.dailyWantsAmount = this.wantsAmount - parseInt(this.cultureAmount) -  parseInt(this.extraAmount);

      const goal = this.get('incomes', 'Salary') * 3
      const amount = 0; //this.get('amounts', 'Savings');
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
        this.$fireAnalytics.logEvent('line_added');
      }
      if (!item.name && index < items.length - 1) {
        items.splice(index, 1)
        this.$fireAnalytics.logEvent('line_removed');
      }
    },
    print() {
      this.$fireAnalytics.logEvent('print');
      window.print();
    },
    trackClick(name) {
      this.$fireAnalytics.logEvent(`click_${name}`);
    }
  }
}
</script>
