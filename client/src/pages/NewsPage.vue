<template>
    <div class="bg-grayy-900 min-h-screen">
        <br><br><br>
            <div v-for="(item, index) in numbers" :key="index"
                class="w-4/5 h-96 ml-10 rounded-lg mb-20 bg-white flex flex-row">
                <div class="flex flex-col">
                    <h1 class="text-black float-left p-8  font-medium font-bold">{{ newsData[index].title }}</h1>
                    <img class="pl-8 w-80" :src="newsData[index].urlToImage">
                </div>
                <div>
                    <p class="text-black pt-20 p-10 text-justify">
                        {{ newsData[index].description }}
                    </p>
                    <button @click="goToUrl(index)" class="bg-green-500  w-24 float-right  m-10 center rounded-lg  text-white">Detail</button>
                </div>
            </div>
        <button v-if="state" @click="readMore" class="text-white p-2 mb-10 rounded-lg border">Read More</button>
    </div>

</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            newsData: [],
            url: "",
            state: true,
            numbers:2
        };
    },
    created() {
        this.url = 'http://localhost:8081/get-crypto-news';
        axios.get(this.url)
            .then(response => {
                this.newsData = response.data.articles;
                console.log(this.newsData[0]);
            });

    },
    mounted() {
    },
    methods: {
        readMore() {
            if(this.newsData.length-this.numbers>5){
                this.numbers+=2;
            }else{
                this.numbers=this.newsData.length;
                this.state=false
            }
            
        },
        goToUrl(index) {
        location.href=this.newsData[index].url
    }
    },

};
</script>

<style scoped>

</style>