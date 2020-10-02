<template>
  <div>
    <h2 
      class="title is-2 has-text-white has-background-primary has-text-centered"
    >
      {{ author.toUpperCase() }} TIENE
      {{ countBooks != 0 ? countBooks : "" }} LIBROS
    </h2>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";

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