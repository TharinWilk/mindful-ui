<template>
  <div class="page-layout">
    <Header>
      <Navbar>
        <p>Mindful UI</p>
        <p>Build with Everyone In Mind</p>
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
      </Navbar>
    </Header>
    <main>
      <slot />
    </main>
    <footer></footer>
    <ToastSection />
  </div>
</template>

<style lang="postcss">
.page-layout {
  min-height: 100vh;
  min-height: 100dvh;

  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>
