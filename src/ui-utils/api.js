import axios from 'axios';
import { createStore } from 'redux';

const { store } = createStore();

axios.get('https://jsonplaceholder.typicode.com')
.then((response)=>{
    console.log("posts",response.posts);
});