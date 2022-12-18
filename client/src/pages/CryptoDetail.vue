<template>
  <div
  class="h-screen " >btc detay
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      cryptoId: "",
      data: {},
    };
  },
  methods: {
    async fetchDataById() {
      let response = null
      try {
        response = await axios
        .post("http://localhost:8081/get-crypto-detail", {
          id: this.cryptoId,
        })
      }
      catch (err) {
        response = null
        console.log(err)
      }
      if (response) {
        this.data = (response.data)
        console.log(JSON.parse(JSON.stringify(this.data)))
      }
    },
  },

  created() {
    this.cryptoId = this.$route.params.id;
    this.fetchDataById();
  },

  mounted() { 
  },
};
</script>

<style lang="scss" scoped></style>
