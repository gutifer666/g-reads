<template>
  <div>
    <div class="field">
      <label class="label">Author Name</label>
      <div class="control">
        <input class="input" type="text" v-model="authorStore" />
      </div>
    </div>

    <div class="field">
      <div class="control">
        <button class="button is-link" v-on:click="searchAuthor()">Search</button>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: "AuthorForm",
  props: ["searchAuthor"],
  computed: {
    ...mapState(["authorStore"]),
  },
};
</script>

<style>
</style>