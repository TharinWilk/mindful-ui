<template>
  <input type="checkbox" />
</template>

<script setup lang="ts"></script>

<style scoped>
input[type="checkbox"] {
  --input-size: var(--size-xl);
  --size-sm: 1rem;
  --size-md: 2rem;
  --size-lg: 2.5rem;
  --size-xl: 3rem;

  --transition-speed-fast: 0ms;
  --transition-speed-moderate: 0ms;

  appearance: none;
  position: relative;
  background-color: var(--surface-brightened);
  min-width: var(--input-size);
  min-height: var(--input-size);
  border-radius: 50%;
  outline: transparent 0px solid;
  cursor: pointer;
  transition: all var(--transition-speed-moderate) ease;
  margin: calc(var(--input-size) * 0.25);
}

input[type="checkbox"]:hover {
  outline: var(--hover-accent) calc(var(--input-size) * 0.1) solid;
}

input[type="checkbox"]:focus-visible {
  outline: var(--brand) calc(var(--input-size) * 0.1) solid;
  outline-offset: calc(var(--input-size) * 0.15);
}

input[type="checkbox"]:checked {
  background-color: var(--brand);
}

@media (prefers-reduced-motion: no-preference) {
  input[type="checkbox"] {
    --transition-speed-fast: 100ms;
    --transition-speed-moderate: 150ms;
  }

  input[type="checkbox"]:active:hover {
    outline-width: 1px;
    transition: outline var(--transition-speed-fast);
  }

  input[type="checkbox"]:active:not(:hover) {
    outline-offset: 0px;
    transition: outline var(--transition-speed-fast);
  }
}
</style>
