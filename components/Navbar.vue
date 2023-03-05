<template>
  <nav>
    <slot />
  </nav>
</template>

<script setup lang="ts"></script>

<style>
:where(nav) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-primary);
}
</style>
