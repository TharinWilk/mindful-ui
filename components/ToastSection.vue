<template>
  <section class="toast-section"></section>
</template>

<script setup></script>

<style>
.toast-section {
  position: fixed;
  inset-block-end: 0;
  inset-inline: 0;
  padding-block-end: 5vh;
  display: grid;
  place-items: center;
  gap: 1vh;
  pointer-events: none;
}

.toast {
  --duration: 3s;
  --bg-lightness: 90%;
  --travel-distance: 0;

  color: #13132f;
  background-color: hsl(0 0% var(--bg-lightness) / 90%);
  max-inline-size: min(25ch, 90vw);
  padding-block: 0.5ch;
  padding-inline: 1ch;
  border: none;
  border-radius: 0.25rem;

  @nest .toast-section & {
    background-color: blue;
  }

  will-change: transform;
  animation: fade-in 0.3s ease, slide-in 0.3s ease,
    fade-out 0.3s ease var(--duration);
}

@media (--dark) {
  .toast {
    color: #d6d6f5;
  }
}

@media (--motionAllowed) {
  .toast {
    --travel-distance: 5vh;
  }
}

/* Keyframes */
@keyframes fade-in {
  from {
    opacity: 0;
  }
}

@keyframes fade-out {
  to {
    opacity: 0;
  }
}

@keyframes slide-in {
  from {
    transform: translateY(var(--travel-distance, 0.75rem));
  }
}
</style>
