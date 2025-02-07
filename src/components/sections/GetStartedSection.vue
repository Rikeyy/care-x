<template>
  <section id="get-started" class="section">
    <div class="content-wrapper">
      <div class="get-started-container">
        <h1 class="title">MULAKAN SEKARANG</h1>
        <a href="https://forms.gle/bsAshwbqe5LuaaPy8" target="_blank" class="cta-button">
          Daftar Di Sini
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GetStartedSection'
}
</script>

<style scoped>
.section {
  padding: 6rem 2rem;
  background-color: var(--background-light);
}

.content-wrapper {
  max-width: var(--container-width);
  margin: 0 auto;
}

.get-started-container {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.title {
  font-size: var(--font-size-xxl);
  color: var(--text-primary);
  line-height: 1.2;
  font-weight: bold;
}

.cta-button {
  display: inline-block;
  padding: 1rem 2.5rem;
  background-color: var(--primary);
  color: var(--hover-color);
  text-decoration: none;
  border-radius: var(--border-radius);
  font-size: var(--font-size-md);
  font-weight: 500;
  transition: transform var(--transition-speed) ease, 
              box-shadow var(--transition-speed) ease;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px var(--shadow-color);
}

@media (max-width: 768px) {
  .section {
    padding: 4rem 2rem;
  }

  .title {
    font-size: var(--font-size-xl);
  }
}
</style> 