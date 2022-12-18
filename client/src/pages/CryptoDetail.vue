<template>
  <div class="h-screen " >
    <div class="flex center items-center flex-col">
      <h1 class="pt-28">Crypto Name:  {{ json["name"] }}</h1>
    <br>
    <img :src="json.image.large">
    <br>
    <p>Sembol: {{ json["symbol"] }}</p>
    <p>Market Data: {{ json.market_data.current_price.usd }}  USDT</p>
    <p>block_time_in_minutes: {{ json["block_time_in_minutes"] }}</p>
    <p>genesis_date: {{ json["genesis_date"] }}</p>
    <p>sentiment_votes_up_percentage: {{ json["sentiment_votes_up_percentage"] }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      cryptoId: this.$route.params.id,
      json:[]
    };
  },
  methods: {
    async fetchDataById() {
      let response = null;
            try {
                response=await axios.get("https://api.coingecko.com/api/v3/coins/"+this.cryptoId);
                //response = await axios.get("http://localhost:8081/get-cryptos");
                console.log(">>>>>>>>",response.data);
            } catch (ex) {
                response = null;
            }
            if (response) {
                this.json = response.data;
                console.log("data: ", response.data);
                console.log("json :",this.json);
            }


    },
  },

  created() {
    this.fetchDataById();
  },

  mounted() { 
  },
};
</script>

<style lang="scss" scoped></style>
