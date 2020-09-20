<template>
  <div id="app">
    <div class="container">
      <h1 class="title">Google Books API</h1>

      <author-form :searchAuthor="searchAuthor"></author-form>

      <book-list :books="books"></book-list>

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import BookList from "./components/BookList";
import AuthorForm from "./components/AuthorForm"
export default {
  name: "App",
  components: {
    BookList,
    AuthorForm
  },

  data() {
    return {
      books: [],
    };
  },
  computed:{
    ...mapState(["authorStore"]),

  },

  methods: {
    searchAuthor() {
      this.books = [];

      this.load();
    },

    load() {
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=inauthor:`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.books = this.books.concat(
            data.items.map((item) => item.volumeInfo)
          );
        });
    },
  },
  // mounted() {
  //   this.load();
  // },
};
</script>

<style>
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 1em;
}
</style>


