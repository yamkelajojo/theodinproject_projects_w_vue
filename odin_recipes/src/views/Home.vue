<template>
  <div class="main-container">
    <header>
      <h1>Odin Recipes</h1>
    </header>
    <main class="recipes">
      <Recipe />
    </main>
    <footer>by Dojo</footer>
  </div>
</template>

<script>
import Recipe from '../components/Recipe.vue'
// import getRecipes from '../composables/getRecipes.js'
import { ref } from 'vue'

export default {
  name: 'Home',
  components: { Recipe },
  setup() {
    const recipeRoutes = () => {
      const recipes = ref([])
      const error = ref(null)

      const load = async () => {
        try {
          let data = await fetch('http://localhost:3000/recipes')
          console.log(data)
          if (!data.ok) {
            throw Error('no data available')
          }
        } catch (err) {
          error.value = err.message
          console.log(err.value)
          console.log('Dzodzooooooo')
        }
      }

      return load()
    }

    console.log(recipeRoutes())

    return { recipeRoutes }
  }
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
