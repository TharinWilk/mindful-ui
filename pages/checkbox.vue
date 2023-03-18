<template>
  <main>
    <section>
      <Checkbox />
      <Checkbox />
      <Checkbox />
    </section>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "basic-layout",
});
</script>

<style scoped>
section {
  width: 100%;
  padding: 2rem 0;
  display: grid;
  place-items: center;
}
</style>
