<template>
    <div class="bg-grayy-900 ">
        <br><br><br>
        <input class="bg-gray-500 text-gray-900 shadow shadow-black rounded mb-2 p-1 w-[500px]" type="text"
            placeholder="Search Crypto..." id="search-input" v-model="search" />
            
            <!-- <router-link v-for="(item, index) in filtered" :key="index"
                :to="{ name: 'detail', params: { id: item.id } }">
                {{ item.name }}<br>
            </router-link>
            <router-view></router-view> -->
            <div  class="min-h-screen flex justify-center flex-wrap">
            <div v-for="(item, index) in filtered" :key="index" class="flex m-4  flex-col card">
                <div class="content items-center flex mt-8 ml-8 font-serif ">
                    <div class="">
                        <img class="w-20 mr-10" :src="item.image">
                    </div>
                    <p>
                        <!-- {{item.slug.charAt(0).toUpperCase() + item.slug.slice(1)+" ("+item.symbol+")"}} -->
                        {{ item.name }}
                    </p>
                </div>
                <div class=" pl-40">
                    <router-link class="routerLink" :to="`cryptodetail/${item.id}`"><p class="text-green-500">More >>></p>
            </router-link>
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
                response=await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
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

    mounted() {
        this.show = true;
        this.fetchData();
    },
    computed: {
        filtered() {
            if (this.search.trim().length > 0) {
                return this.json.filter((el) =>
                    el.name.toLowerCase().includes(this.search.toLowerCase().trim())
                );
            }
            return this.json;
        },
    },
};
</script>

<style scoped>
.card {
    color: black;
    width: 330px;
    height: 150px;
    background: #f2f3f7;
    border-radius: 20px;
}



</style>