<template>
  <section class="hero">
    <div class="hero-body">
      <h1 class="title">{{author}} tiene {{countBooks}} libros</h1>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  name: "TitleAuthor",
  computed: {
    ...mapState(["author"]),
    ...mapGetters(["countBooks"]),

  },
};
</script>

<style>
</style>