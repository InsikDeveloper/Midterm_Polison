<template>
  <section class="min-h-screen w-full bg-slate-100">
    <Navbar />
    <div class="py-5 px-6">
      <router-view />
    </div>
  </section>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
</script>
