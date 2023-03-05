<template>
  <header>
    <slot />
  </header>
</template>

<style>
:where(header) {
  --small-header: 1.5rem;
  --header-size: var(--small-header);

  padding: var(--header-size);
  background-color: var(--surface-secondary);

  display: flex;
  justify-content: space-between;
}
</style>
