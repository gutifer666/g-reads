<template>
  <div id="app">
    <div class="section">
      <h1 class="title">Google Books API</h1>
      <div class="container card-grid">
        <div class="card" v-for="book in books" :key="book.industryIdentifiers[0].identifier">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-128x128">
                  <!-- <img v-if="!imageLinks.thumbnail" src="https://books.google.com/books/content?id=OpnZBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt="Image Fake">
                  <img v-else :src="book.imageLinks.thumbnail" alt="Real Image"> -->
                  <img src="https://books.google.com/books/content?id=OpnZBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt="Real Image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">{{ book.title }}</p>
                <p class="subtitle is-6">{{ book.authors[0] }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      books: [],
    };
  },

  methods: {
    load() {
      fetch(
        "https://www.googleapis.com/books/v1/volumes?q=inauthor:escohotado&key=AIzaSyCcFIyzEY0clAz89EnesNIKGI7ItRTxqzw"
      )
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.books = this.books.concat(data.items.map(item => item.volumeInfo));
          console.log(this.books);
        });
    },
  },

  created() {
    this.load();
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


