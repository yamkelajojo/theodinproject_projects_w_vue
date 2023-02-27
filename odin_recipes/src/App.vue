<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>Odin Recipes</h1>
  </header>
  <main class="recipes">
    <RouterLink to="/">Home</RouterLink>
  </main>
  <RouterView />
</template>

<style></style>
