<template>
  <div>
    <h1>Products</h1>
    <!-- <ul>
      <li v-for="(product, index) in products" :key="index">
        <div>
          <div>
            <p>{{ product.name }}</p>
            <p>{{ product.price }}</p>
            <p>{{ product.description }}</p>
          </div>

          <button>Edit</button>
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits();
</script>
