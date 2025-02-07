<template>
  <section id="criteria" class="section">
    <div class="content-wrapper">
      <div class="criteria-grid">
        <div class="criteria-item">
          <p>Pendapatan RM50 ribu sehingga RM200 ribu setahun</p>
        </div>
        <div class="criteria-item">
          <p>Perniagaan berdaftar di bawah SSM (bukan pertubuhan NGO atau non-profit)</p>
        </div>
        <div class="criteria-item">
          <p>Telah beroperasi minima 3 tahun dan lokasi premis di Selangor</p>
        </div>
        <div class="criteria-item">
          <p>Bilangan pekerja 10 orang ke bawah</p>
        </div>
        <div class="criteria-item">
          <p>Mempunyai produk atau perkhidmatan kepada solusi penjagaan yang sesuai dengan golongan sasaran seperti warga emas, kanak-kanak dan OKU</p>
        </div>
        <div class="criteria-item">
          <p>Wakil syarikat (pengasas/pengasas bersama/pengurusan atasan) dikehendaki memberi komitmen selama 3 bulan program</p>
        </div>
      </div>
      <div class="title-container">
        <h1 class="title">KRITERIA<br>PERNIAGAAN</h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CriteriaSection'
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
  align-items: flex-start;
  gap: 4rem;
  /* flex-direction: row-reverse; */
}

.title-container {
  flex: 1;
  position: sticky;
  top: 100px;
  text-align: right;
}

.title {
  font-size: var(--font-size-xxl);
  color: var(--text-primary);
  line-height: 1.2;
  font-weight: bold;
}

.criteria-grid {
  flex: 2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.criteria-item {
  background-color: var(--background-light);
  color: var(--text-secondary);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  transition: transform var(--transition-speed) ease;
}

.criteria-item:hover {
  transform: translateY(-5px);
}

.criteria-item p {
  font-size: 1.1rem;
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .criteria-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }

  .title-container {
    position: static;
    text-align: center;
  }

  .title {
    font-size: 2.5rem;
  }
}
</style> 