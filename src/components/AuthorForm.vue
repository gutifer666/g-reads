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
        <button class="button is-link" v-on:click="searchAuthor">Search</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "AuthorForm",
  props: ["searchAuthor"],
  computed: {
    author:{
      get() {
        return this.$store.state.author;
      },
      set(value) {
        this.$store.commit('CHANGE_AUTHOR',value);
      }
    }
  }
};
</script>

<style>
</style>