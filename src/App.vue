<template>
  <div id="app">
    <div class="section">
      <h1 class="title">Google Books API</h1>
      <SearchAuthor :searchAuthor="searchAuthor"></SearchAuthor>
      <BookList :books="books"></BookList>
    </div>
  </div>
</template>

<script>
import BookList from "./components/BookList";
import SearchAuthor from "./components/SearchAuthor";

export default {
  name: "App",
  components: {
    BookList,
    SearchAuthor
  },

  data() {
    return {
      books: [],
      author: "",
    };
  },

  methods: {
    searchAuthor() {
      this.books=[];
      this.author = "escohotado";
      this.load();
    },

    load() {
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=inauthor:${this.author}&key=AIzaSyCcFIyzEY0clAz89EnesNIKGI7ItRTxqzw`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.books = this.books.concat(
            data.items.map((item) => item.volumeInfo)
          );
          // console.log(this.books);
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


