<template>
  <div>
    <div class="field">
      <label class="label">Author Name</label>
      <div class="control">
        <input class="input" type="text" v-model="newAuthor" />
      </div>
    </div>

    <div class="field">
      <div class="control">
        <button class="button is-link" v-on:click="changeAuthor">Search</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: "AuthorForm",
  props: ["searchAuthor"],
  data() {
    return {
      newAuthor:''
    }
  },
  methods: {
    ...mapMutations(['CHANGE_AUTHOR']),
    changeAuthor(){
      // this.$store.commit('CHANGE_AUTHOR', this.newAuthor);
      this.CHANGE_AUTHOR(this.newAuthor);
      this.newAuthor = '';
      this.searchAuthor();
    }
  }
}
</script>

<style>
</style>