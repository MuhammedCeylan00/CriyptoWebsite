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
        <h1 class="font-bold pt-3">Lorem.</h1>
        <p class="pt-5 pr-5 pl-5 text-justify "> Kripto paralar, sanal para birimi olarak kullanılan ve herhangi bir fiziksel
          biçimde
          mevcut olmayan dijital
          varlıklardır. Kriptografi, yani şifreleme ile güvence altına alınmışlardır. Bu sayede örneğin; sahtecilik veya
          aynı kripto parayla birden fazla işlem yapmak anlamına gelen “çifte harcama” eylemi neredeyse imkânsız hale
          gelmiştir..</p>
        <router-link to="/infodetail"> <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-10">
            Detay</button></router-link>
      </div></div>
    <!-- <img class="pl-32" src="../assets/bitcoin_PNG27.png"> -->
    <img class="pl-32" src="https://cliply.co/wp-content/uploads/2021/02/372102230_BITCOIN_400px.gif">

    </div>
    <div class="font-mono pt-32 pb-32">
      <p class="mx-auto px-12 text-justify">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, at minima cupiditate possimus exercitationem odio
      minus repellat esse consequuntur molestiae! Perferendis velit possimus laborum, recusandae molestiae nihil
      aliquid. Numquam, alias porro fugiat earum sint suscipit ab praesentium, veritatis impedit ad quasi fuga illum
      autem molestiae ex adipisci? Perspiciatis repellat corrupti eum hic ipsum ea corporis doloribus dolorum esse
      reiciendis eius nihil illo blanditiis, necessitatibus expedita deserunt. Quidem nisi impedit, veniam repellat
      molestiae quisquam. Provident tenetur optio magnam dolore, itaque at maxime facere dolores vel odit quod
      accusantium porro repellendus nihil distinctio, quae explicabo laboriosam. Nobis facilis iure atque dicta
      excepturi!
      </p>
    </div>
  </div>
  <!-- <div class="mt-20 min-h-screen items-center flex flex-col">
    <input class="bg-gray-500 text-gray-900 shadow shadow-black rounded mb-2 p-1 w-[500px]" type="text" placeholder="arama..."
      id="search-input" v-model="search" />
    <div
      class="liste flex flex-col p-5 items-center content-box max-h-screen overflow-auto h-80 w-[500px] border-solid border-white rounded border p-5">
      <router-link
        class="static max-h-fit text-white border-solid border-yellow-600 p-2 mb-2 border rounded min-w-[50%] hover:border-white ease-in-out duration-500"
        v-for="(item, index) in filtered" :key="index" :to="{ name: 'detail', params: { id: item.id } }">
        {{ index + 1 }} : {{ item.name }}
      </router-link>
      <router-view></router-view>
    </div>
  </div> -->
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
