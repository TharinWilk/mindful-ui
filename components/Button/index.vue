<template>
  <button>
    <slot />
  </button>
</template>

<style scoped>
:where(button) {
  color: var(--text-primary);
  background-color: var(--brand);
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
}
</style>
