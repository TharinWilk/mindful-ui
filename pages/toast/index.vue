<template>
  <main ref="main">
    <Button @click="handleClick">Click Me</Button>
  </main>
</template>

<script setup lang="ts">
const main = ref<HTMLElement | null>(null);

const handleClick = () => {
  const toaster: HTMLElement | null = document.querySelector(".toast-section");

  if (!toaster) return;

  const toast = useCreateToast("Hello", toaster);
};
</script>
