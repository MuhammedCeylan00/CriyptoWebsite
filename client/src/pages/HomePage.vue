<template>
  <div class="mt-20  bg-gray-900 min-h-screen flex flex-col">
    <div class="font-mono text-xl pb-48 pb-20">
      <Transition name="bounce">
        <h2 v-if="show" class="text-4xl text-yellow-400 font-bold">
          Welcome to the Cryptocurrency World...
        </h2>
      </Transition>
    </div>
    <div class="flex justify-center">
      <div class="flex">
        <div class="bg-yellow-500 w-96 h-96   font-serif  text-gray-900 rounded-2xl ml-32">
          <h1 class="font-bold pt-3">what is crypto?</h1>
          <p class="pt-5 pr-5 pl-5 text-justify "> At its core, cryptocurrency is typically decentralized digital money
            designed to be used over the internet. Bitcoin, which launched in 2008, was the first cryptocurrency, and it
            remains by far the biggest, most influential, and best-known. In the decade since, Bitcoin and other
            cryptocurrencies like Ethereum have grown as digital alternatives to money issued by governments..</p>
        </div>
      </div>
      <!-- <img class="pl-32" src="../assets/bitcoin_PNG27.png"> -->
      <img class="pl-32" src="https://cliply.co/wp-content/uploads/2021/02/372102230_BITCOIN_400px.gif">

    </div>
    <div class="font-mono pt-32 pb-32">
      <p class="mx-auto px-12 text-justify">
        The most popular cryptocurrencies, by market capitalization, are Bitcoin, Ethereum, Bitcoin Cash and Litecoin.
        Other well-known cryptocurrencies include Tezos, EOS, and ZCash. Some are similar to Bitcoin. Others are based
        on different technologies, or have new features that allow them to do more than transfer value.
        Crypto makes it possible to transfer value online without the need for a middleman like a bank or payment
        processor, allowing value to transfer globally, near-instantly, 24/7, for low fees.
        Cryptocurrencies are usually not issued or controlled by any government or other central authority. They’re
        managed by peer-to-peer networks of computers running free, open-source software. Generally, anyone who wants to
        participate is able to.
        If a bank or government isn’t involved, how is crypto secure? It’s secure because all transactions are vetted by
        a technology called a blockchain.
        A cryptocurrency blockchain is similar to a bank’s balance sheet or ledger. Each currency has its own
        blockchain, which is an ongoing, constantly re-verified record of every single transaction ever made using that
        currency.
        Unlike a bank’s ledger, a crypto blockchain is distributed across participants of the digital currency’s entire
        network
        No company, country, or third party is in control of it; and anyone can participate. A blockchain is a
        breakthrough technology only recently made possible through decades of computer science and mathematical
        innovations.
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ListCryptos",
  data() {
    return {
      search: "",
      json: "",
      name: "coinadı",
      show: false
    };
  },
  props: {
    data: {},
  },

  methods: {
    setName(itemName) {
      this.name = itemName;
    },

    async fetchData() {
      let response = null;
      try {
        response = await axios.get("http://localhost:8081/get-cryptos");
      } catch (ex) {
        response = null;
        // error
        console.log(ex);
      }
      if (response) {
        // success
        this.json = response.data;
        console.log("data: ", this.json);
      }

    },
  },

  mounted() {
    this.show = true;
    this.fetchData();
  },
  computed: {
    filtered() {
      if (this.search.trim().length > 0) {
        return this.json.data.filter((el) =>
          el.name.toLowerCase().includes(this.search.toLowerCase().trim())
        );
      }
      return this.json.data;
    },
  },
};
</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(2);
  }

  100% {
    transform: scale(1);
  }
}
</style>
