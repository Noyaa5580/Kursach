<template>
    <div>
        <h1 @click="check()">GOVNO</h1>
        <div v-for="item in new_products" :key="item"><h2>{{item.volumeInfo.title}}</h2></div>
    </div>
</template>
<script>

import axios from 'axios';
export default {
    data: function(){
        return{
            new_products:[]
        }
    },
    methods:{
        check(){
            console.log(this.new_products)
        }
    },
    mounted(){
        axios
        .get ('https://www.googleapis.com/books/v1/users/105278474889986248669/bookshelves/0/volumes?key=AIzaSyAO_AKrumfv50ZdI9QCfT254oXGSaGWi0I')
        .then (response => (this.new_products = (response.data.items)))
        .catch(error => {
        console.error('Ошибка при запросе к API:', error);});

    }
}
</script>
// console.log(response.data.items)