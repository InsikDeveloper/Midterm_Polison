<template>
  <div class="flex flex-col gap-5">
    <h1 class="text-3xl font-semibold text-center">Products</h1>
    <table class="w-full table-auto">
      <thead class="bg-sky-300/20">
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
          <th></th>
        </tr>
      </thead>
      <tbody class="text-center space-y-5 mt-5">
        <tr v-for="(product, index) in products" :key="index">
          <td>{{ product.name }}</td>
          <td>{{ formatCurrency(product.price) }}</td>
          <td>{{ product.description }}</td>
          <td>
            <button
              class="w-full py-2 rounded-md border border-sky-600 font-semibold mt-5 hover:bg-sky-600 hover:text-white/90 duration-200 text-sm"
            >
              Edit
            </button>
          </td>
        </tr>
      </tbody>
    </table>
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

function formatCurrency(price) {
  const formatter = new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formatter.format(price);
}
</script>
