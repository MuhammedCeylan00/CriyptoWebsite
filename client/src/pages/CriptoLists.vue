<template>
    <div class="bg-grayy-900 ">
        <h1 class="float-left pl-32 text-5xl font-serif">Cryptos</h1>
        <br><br><br>
        <input class="bg-gray-500 text-gray-900 shadow shadow-black rounded mb-2 p-1 w-[500px]" type="text"
            placeholder="Search Crypto..." id="search-input" v-model="search" />
            
            <!-- <router-link v-for="(item, index) in filtered" :key="index"
                :to="{ name: 'detail', params: { id: item.id } }">
                {{ item.name }}<br>
            </router-link>
            <router-view></router-view> -->
            <div  class="min-h-screen flex justify-center flex-wrap">
            <div class="card" v-for="(item,index) in filtered" :key="index">
                <div class="content font-serif">
                    {{item.slug.charAt(0).toUpperCase() + item.slug.slice(1)+" ("+item.symbol+")"}}
                </div>
            </div>
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
                response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
                console.log("responceeee:",response);
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
.card {
    color: black;
    width: 330px;
    height: 416px;
    padding: 60px 30px;
    margin: 20px;
    background: #f2f3f7;
    border-radius: 20px;
}

.card .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}


</style>