<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
onBeforeMount(() => {
  useReflectPreferences();
});
</script>

<style>
/* html[data-theme="light"] {
  --theme-bg-color: rgb(200, 200, 200);
}

html[data-theme="dark"] {
  --theme-bg-color: rgb(33, 33, 33);
} */

body {
  background-color: var(--surface-darkened);
}
</style>
