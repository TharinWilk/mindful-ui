<template>
  <main>
    <Button><span>Toggle Themes</span></Button>
    <p class="primary-text">This is the primary text</p>
    <p class="secondary-text">This is the secondary text</p>

    <section class="section-grid">
      <div class="surface surface-1 rad-shadow">
        <p class="primary-text">Surface Primary</p>
      </div>
      <div class="surface surface-3 rad-shadow">
        <p class="primary-text">Surface Darkened</p>
      </div>
      <div class="surface surface-2 rad-shadow">
        <p class="primary-text">Surface Secondary</p>
      </div>
      <div class="surface surface-4 rad-shadow">
        <p class="primary-text">Surface Brightened</p>
      </div>
    </section>
    <div class="brand"></div>

    <section>
      <Checkbox />
    </section>
  </main>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "basic-layout",
});
</script>

<style scoped>
.section-grid {
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  gap: 2rem;
  margin: 2rem auto;
}
.primary-text {
  color: var(--text-primary);
}
.secondary-text {
  color: var(--text-secondary);
}
.brand {
  width: 200px;
  height: 75px;
  border-radius: 15px;
  background-color: var(--brand-light);
}
.surface {
  display: grid;
  place-items: center;
  width: 200px;
  height: 150px;
  border-radius: 15px;
}

.surface-1 {
  background-color: var(--surface-primary);
}
.surface-2 {
  background-color: var(--surface-secondary);
}
.surface-3 {
  background-color: var(--surface-darkened);
}
.surface-4 {
  background-color: var(--surface-brightened);
}

.rad-shadow {
  box-shadow: 0 2.8px 2.2px
      hsl(var(--surface-shadow) / calc(var(--shadow-strength) + 0.03)),
    0 6.7px 5.3px
      hsl(var(--surface-shadow) / calc(var(--shadow-strength) + 0.01)),
    0 12.5px 10px
      hsl(var(--surface-shadow) / calc(var(--shadow-strength) + 0.02)),
    0 22.3px 17.9px
      hsl(var(--surface-shadow) / calc(var(--shadow-strength) + 0.02)),
    0 41.8px 33.4px
      hsl(var(--surface-shadow) / calc(var(--shadow-strength) + 0.03)),
    0 100px 80px hsl(var(--surface-shadow) / var(--shadow-strength));
}
</style>
