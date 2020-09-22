<template>
  <div>
    <div class="field">
      <label class="label" for="author">
        Nombre del autor
        <div class="control">
          <input class="input" type="text" v-model="author" />
        </div>
      </label>
    </div>

    <div class="field">
      <div class="control">
        <button class="button is-link" v-on:click="showBooks">Search</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "AuthorForm",
  computed: {
    author: {
      get() {
        return this.$store.state.author;
      },
      set(value) {
        this.$store.commit("LOAD_AUTHOR", value);
      },
    },
  },
  methods: {
    showBooks: function () {
      if (this.$store.state.author) {
        return this.$store.dispatch("GET_BOOKS");
      }else{
      console.log('NO AUTHOR')
      }
    },
  },
};
</script>

<style>
</style>