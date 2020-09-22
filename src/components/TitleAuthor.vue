<template>
  <section class="hero">
    <div class="hero-body">
      <h1 class="title is-1 has-text-white has-background-primary has-text-centered">{{author.toUpperCase()}} TIENE {{countBooks}} LIBROS</h1>
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