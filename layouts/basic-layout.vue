<template>
  <div class="page-layout">
    <Header>
      <p>Mindful UI</p>
      <p>Build with Everyone In Mind</p>
    </Header>
    <main class="main-layout">
      <aside class="main-aside">
        <nav>
          <ul>
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/playground">
              <li>Playground</li>
            </a>
            <a href="/color-scheme">
              <li>Color Scheme</li>
            </a>
          </ul>
        </nav>
      </aside>
      <slot />
    </main>
    <footer></footer>
    <ToastSection />
  </div>
</template>

<style>
.page-layout {
  min-height: 100vh;
  min-height: 100dvh;

  display: grid;
  grid-template-rows: auto 1fr auto;
}

.main-layout {
  display: grid;
  grid-template-columns: auto 1fr;
}

.main-aside {
  padding: 2rem;
  min-width: 12rem;
  background-color: var(--surface-primary);
}
</style>
