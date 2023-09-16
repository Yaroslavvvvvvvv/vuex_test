<template>
  <div class="app">
    <div class="post"
         v-for="post in allPosts"
         :key="post.id"
    >
      <h2>{{post.title}}</h2>
      <p>{{post.body}}</p>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
  name: 'App',
  //Перший варіант getter
  //computed: {
    //allPosts () {
     // return this.$store.getters.allPosts;
    //}
  //},
  computed: mapGetters(["allPosts"]),
  methods: mapActions(['fetchPosts']),

  async mounted() {
    //const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
    //const posts = await res.json()
    //this.posts = posts;

    //Перший варіант action
    //this.$store.dispatch('fetchPosts')
    this.fetchPosts();
  }

}
</script>

<style>
.app {
  font-family: "Avenir", Helvetic, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 400px;
}

.post {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
}
</style>
