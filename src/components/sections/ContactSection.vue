<template>
  <section id="contact" class="section">
    <div class="content-wrapper">
      <div class="title-container">
        <h1 class="title">HUBUNGI KAMI</h1>
      </div>
      <div class="contact-container">
        <div class="contact-item">
          <h3>Melalui emel di</h3>
          <p>info@selangorcare.com</p>
        </div>
        <div class="contact-item">
          <h3>Di no telefon</h3>
          <p>017-368 7881 (Puan Shuhada)</p>
          <p>018-281 1610 (Cik Syarifah)</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection'
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
  gap: 3rem;
}

.title-container {
  text-align: center;
}

.title {
  font-size: 3.5rem;
  color: var(--text-primary);
  line-height: 1.2;
  font-weight: bold;
}

.contact-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
}

.contact-item {
  margin-bottom: 1.5rem;
}

.contact-item h3 {
  font-size: var(--font-size-lg);
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-weight: normal;
}

.contact-item p {
  font-size: var(--font-size-md);
  color: var(--text-primary);
  line-height: 1.8;
}

@media (max-width: 768px) {
  .title {
    font-size: var(--font-size-xl);
  }

  .contact-item h3 {
    font-size: var(--font-size-md);
  }

  .contact-item p {
    font-size: var(--font-size-sm);
  }
}
</style> 