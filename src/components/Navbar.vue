<template>
  <nav class="p-6 bg-slate-900 text-white/90">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-semibold">Midterm Examination</h1>
      <div class="flex gap-5">
        <router-link
          class="hover:text-sky-600 hover:underline duration-200"
          to="/home"
          >Home</router-link
        >
        <router-link
          class="hover:text-sky-600 hover:underline duration-200"
          to="/products"
          >Products</router-link
        >
      </div>
    </div>
  </nav>
</template>
