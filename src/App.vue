<template>
  <div id="app">
    <div class="section">
      <h1 class="title">Google Books API</h1>
      <div class="field">
        <label class="label">Author Name</label>
        <div class="control">
          <input class="input" type="text" v-model="author" />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button class="button is-link" v-on:click="searchAuthor()">Search</button>
        </div>
      </div>
      <BookList :books="books"></BookList>
    </div>
  </div>
</template>

<script>
import BookList from "./components/BookList";
export default {
  name: "App",
  components: {
    BookList,
  },

  data() {
    return {
      books: [],
      author: "",
    };
  },

  methods: {
    searchAuthor() {
      this.books = [];

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


