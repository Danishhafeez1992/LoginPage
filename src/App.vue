<script setup>
import HomeView from './Views/HomeView.vue'
import navbar from './components/icons/navbar.vue'
</script>

<template>
  <!-- <navbar />
  <HomeView /> -->
  <!-- <nav class="flex gap-5">
    <RouterLink to="/">Login</RouterLink>
    <RouterLink to="/register">Register</RouterLink>
  </nav> -->
  <main>
    <RouterView />
  </main>
</template>
