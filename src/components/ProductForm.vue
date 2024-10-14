<template>
  <section
    class="container mx-auto min-h-screen w-full flex flex-col items-center gap-14"
  >
    <div class="form">
      <h1 class="text-xl font-semibold text-center">Add New Products</h1>

      <form @submit="handleSubmit">
        <div class="input">
          <input
            class="peer bg-transparent focus:outline-none px-3 w-full h-10 text-base"
            type="text"
            id="name"
            v-model="product.name"
            placeholder=" "
            required
          />
          <label
            class="absolute left-3 top-2 text-gray-500 text-sm duration-200 transform -translate-y-2 scale-100 origin-left peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-base peer-focus:-translate-y-2 peer-focus:scale-75 peer-focus:text-blue-600"
            for="name"
            >Product Name:</label
          >
        </div>
        <div class="input">
          <input
            class="peer bg-transparent focus:outline-none px-3 w-full h-10 text-base"
            type="number"
            id="price"
            v-model="product.price"
            required
            placeholder=" "
          />
          <label
            class="absolute left-3 top-2 text-gray-500 text-sm duration-200 transform -translate-y-2 scale-100 origin-left peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-base peer-focus:-translate-y-2 peer-focus:scale-75 peer-focus:text-blue-600"
            for="price"
            >Product Price:</label
          >
        </div>
        <div class="input">
          <input
            class="peer bg-transparent focus:outline-none px-3 w-full h-10 text-base"
            type="description"
            v-model="product.description"
            required
            placeholder=" "
          />
          <label
            class="absolute left-3 top-2 text-gray-500 text-sm duration-200 transform -translate-y-2 scale-100 origin-left peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-base peer-focus:-translate-y-2 peer-focus:scale-75 peer-focus:text-blue-600"
            for="description"
            >Product Description:</label
          >
        </div>

        <button class="button">Submit</button>
      </form>
    </div>

    <div class="w-full" v-if="products.length > 0">
      <ProductList :products="products" />
    </div>

    <div class="w-full flex flex-col gap-5" v-else>
      <h1 class="text-3xl font-semibold text-center">Product is empty!</h1>
      <table class="w-full">
        <thead class="bg-sky-300/20">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
      </table>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import ProductList from "./ProductList.vue";

const products = ref([]);
const product = ref({
  name: "",
  price: "",
  description: "",
});

const handleSubmit = (e) => {
  e.preventDefault();

  products.value.push({ ...product.value });

  product.value = { name: "", price: "", description: "" };
};
</script>
