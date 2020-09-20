<template>
  <section class="hero">
    <div class="hero-body">
      <h1 class="title">Libros de {{author}}</h1>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "TitleAuthor",
  computed: {
    ...mapState(["author"]),
  },
};
</script>

<style>
</style>