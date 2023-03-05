<template>
  <main>
    <article id="interactive-color-scheme">
      <section class="text-grid">
        <div>
          <p class="text-primary">Primary Text</p>
        </div>
        <p class="text-secondary">Secondary Text</p>
      </section>
      <section class="surface-grid">
        <Card class="surface-primary">
          <span>Primary Surface</span>
        </Card>
        <Card class="surface-secondary">
          <span class="text-primary">Secondary Surface</span>
        </Card>
        <Card class="surface-dark">
          <span>Darkened Surface</span>
        </Card>
        <Card class="surface-bright">
          <span>Brightened Surface</span>
        </Card>
      </section>
    </article>
    <article id="light-color-scheme"></article>
    <article id="dark-color-scheme"></article>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "basic-layout",
});
</script>

<style scoped>
.surface-grid {
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  gap: 3rem;
}

.surface-primary {
  background-color: var(--surface-primary);
}
.surface-secondary {
  background-color: var(--surface-secondary);
}
.surface-dark {
  background-color: var(--surface-darkened);
}
.surface-bright {
  background-color: var(--surface-brightened);
}
</style>
