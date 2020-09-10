<template>
  <div class="container card-grid">
    <BookItem v-for="book in books" :key="book.industryIdentifiers[0].identifier" :book="book"></BookItem>
  </div>
</template>

<script>
import BookItem from "@/components/BookItem.vue";

export default {
  name: "BookList",
  props: ["books"],
  components: {
    BookItem,
  },
};
</script>

<style>
</style>