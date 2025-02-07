<template>
  <section id="benefits" class="section">
    <div class="content-wrapper">
      <div class="title-container">
        <h1 class="title">HADIAH</h1>
      </div>
      <div class="benefits-container">
        <div class="benefit-item">
          <img src="@/assets/trophy.svg" alt="Trophy" class="benefit-icon">
          <h3>Trofi bagi 5 pemenang terbaik</h3>
        </div>
        <div class="benefit-item">
          <img src="@/assets/certificate.svg" alt="Certificate" class="benefit-icon">
          <h3>Sijil penyertaan kepada peserta</h3>
        </div>
        <div class="benefit-item">
          <img src="@/assets/travel.svg" alt="Travel" class="benefit-icon">
          <h3>Berpeluang menyertai lawatan industri ke luar negara</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BenefitsSection'
}
</script>

<style scoped>
.section {
  padding: 4rem 2rem;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
}

.title-container {
  text-align: center;
}

.title {
  font-size: var(--font-size-xxl);
  color: var(--text-primary);
  line-height: 1.2;
  font-weight: bold;
}

.benefits-container {
  width: 100%;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
}

.benefit-item {
  flex: 1;
  background-color: var(--background-light);
  padding: 2rem;
  border-radius: var(--border-radius);
  text-align: center;
  transition: transform var(--transition-speed) ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.benefit-item:hover {
  transform: translateY(-5px);
}

.benefit-icon {
  width: 64px;
  height: 64px;
  margin-bottom: 1rem;
}

.benefit-item h3 {
  font-size: var(--font-size-md);
  color: var(--text-primary);
  line-height: 1.4;
}

@media (max-width: 1024px) {
  .benefits-container {
    flex-direction: column;
  }

  .benefit-item {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .content-wrapper {
    gap: 2rem;
  }

  .title {
    font-size: 2.5rem;
  }
}
</style> 