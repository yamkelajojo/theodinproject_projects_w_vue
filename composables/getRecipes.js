import { def } from '@vue/shared'
import { ref } from 'vue'

// const recipeRoutes = (routes) => {
//   fetch('http://localhost:3000/recipes')
//     .then((res) => res.json())
//     .then((data) =>
//       data.array.forEach((element) => {
//         console.log(element.title)
//         routes.push({
//           path: '/' + element['title'],
//           name: element['Component'],
//           component: Home
//         })
//       })
//     )
// }

// USING ASYNC AND AWAIT

const getRecipes = () => {
  const recipes = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      let data = await fetch('http://localhost:3000/recipes')
      if (!data.ok) {
        throw Error('no data available')
      }
      recipes.value = await data.json()
    } catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }

  return { recipes, error, load }
}

export default getRecipes
