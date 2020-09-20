<template>
  <div id="app">
    <div class="container">

      <title-author></title-author>  

      <author-form :searchAuthor="searchAuthor"></author-form>

      <book-list></book-list>

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import BookList from "./components/BookList";
import AuthorForm from "./components/AuthorForm"
import TitleAuthor from "./components/TitleAuthor"

export default {
  name: "App",
  components: {
    BookList,
    AuthorForm,
    TitleAuthor
  },

  computed:{
    ...mapState(["author"]),
    books:{
      get() {
        return this.$store.state.books;
      },
      set(value) {
        this.$store.commit('CHANGE_BOOKS',value);
      }
    }    

  },

  methods: {
    searchAuthor() {
      this.books = [];

      this.load();
    },

    load() {
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=inauthor:${this.author}`
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
};
</script>

<style>
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 1em;
}
</style>


