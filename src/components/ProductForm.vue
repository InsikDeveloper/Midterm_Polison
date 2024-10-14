<template>
  <section>
    <div>
      <h1>Add New Products</h1>

      <form @submit="handleSubmit">
        <div>
          <label for="name">Product Name:</label>
          <input type="text" v-model="product.name" required />
        </div>
        <div>
          <label for="name">Product Price:</label>
          <input type="text" v-model="product.price" required />
        </div>
        <div>
          <label for="name">Product Description:</label>
          <input type="text" v-model="product.description" required />
        </div>

        <button>Submit</button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const products = [];
const product = ref({});

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(product.value);
  products.push(product);

  product.value = {};
};
</script>
