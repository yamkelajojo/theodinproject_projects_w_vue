<template>
  <div class="main-container">
    <header>
      <h1>Odin Recipes</h1>
    </header>
    <div class="recipes">
      <div v-if="error" class="no-rp-error">
        <p>{{ error }}</p>
      </div>
      <main class="grid" v-if="recipes.length">
        <Recipe
          v-for="(recipe, index) in recipes"
          :key="recipe[index + 1]"
          :recipe="recipes[index]"
        />
      </main>
      <div v-else class="">Loading...</div>
    </div>
    <footer>by Dojo</footer>
  </div>
</template>

<script>
// import Recipe from '../components/Recipe.vue'
// import getRecipes from '../composables/getRecipes.js'
import { computed, watchEffect, watch } from 'vue'
import { ref } from 'vue'

export default {
  name: 'Home',
  // components: { Recipe },
  setup() {
    const { recipes, error, load } = getRecipes()

    load()

    return { recipes, error, load }
  },
}
</script>

<style>
header {
  width: 100%;
  text-align: center;
  padding: 15px 0;
  background-color: rgb(180, 153, 101);
}
.recipes {
  background-color: rgb(212, 182, 127);
  flex: 1;
  width: 100%;
  padding: 50px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
}

.main-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10%;
}

footer {
  width: 100%;
  background-color: rgb(180, 153, 101);
  text-align: center;
  padding: 6px 0;
}
</style>
