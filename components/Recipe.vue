<template>
  <div class="recipe" @mouseenter="hoverUp" @mouseleave="hoverDown" ref="root">
    <div class="image-wrapper">
      <img :src="cover_imag" alt="" />
    </div>
    <div class="info">
      <p>{{ total_time }}</p>
      <h4>{{ title }}</h4>
      <h1>{{ cover_image }}</h1>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
// import floatHover from '../composables/floatHover.js'
// import PCCover from '../assets/images/carrot_pancake/carrpc_cover.png'
// import HDCover from '../assets/images/chicago_style_hot_dog/cs_hot_dog_cover.png'
// import MEcCover from '../assets/images/tex_mex_burger/tex_mex_cover.png'

export default {
  name: 'Recipe',
  props: ['recipe'],
  // PCCover: PCCover,

  setup(props) {
    const recipe = ref(props.recipe)
    const title = ref(recipe.value['title'])
    const cover_image = ref(recipe.value['cover_images']['cover_photo'])
    const total_time = ref(recipe.value['summarry']['totalTime'])
    const $root = ref(null)
    // cover_image.value = '"' + cover_image.value + '"'
    console.log(cover_image.value)

    // console.log($root.value)

    const hoverUp = (e) => {
      const it = e.target.style

      it.backgroundColor = 'olive'
      // floatHover(it)
    }

    const hoverDown = (e) => {
      const it = e.target.style

      it.backgroundColor = 'cadetblue'
    }

    return { recipe, title, cover_image, total_time, hoverUp, hoverDown }
  },
}
</script>

<style>
.recipe {
  background-color: cadetblue;
  padding: 20px;
}
</style>
