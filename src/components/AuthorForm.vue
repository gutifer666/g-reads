<template>
  <div>

      <div class="field">
        <label class="label">Author Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Author input" />
        </div>
      </div>
    
  </div>
</template>

<script>
export default {
  name: "AuthorForm",
  props: ["author"],
};
</script>

<style>
</style>