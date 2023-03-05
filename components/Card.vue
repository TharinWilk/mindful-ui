<template>
  <div class="card shadow">
    <slot />
  </div>
</template>

<script setup></script>

<style scoped>
.card {
  display: grid;
  place-items: center;
  block-size: 200px;
  inline-size: 200px;
  border-radius: 1rem;
}
</style>
