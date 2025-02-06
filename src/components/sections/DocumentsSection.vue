<template>
  <section id="documents" class="section">
    <div class="content-wrapper">
      <div class="title-container">
        <h1 class="title">SENARAI<br>DOKUMEN<br>YANG<br>DIPERLUKAN</h1>
      </div>
      <div class="text-container">
        <div class="document-item">
          <h3>Salinan Pendaftaran SSM</h3>
        </div>
        <div class="document-item">
          <h3>Salinan Penyata Kewangan Tahunan Terkini</h3>
        </div>
        <div class="document-item video-pitch">
          <h3>Video Pitching berdurasi 1 minit</h3>
          <p>bagi sesuatu produk/perkhidmatan bagi solusi penjagaan kepada warga emas/kanak-kanak/OKU. Mempunyai:</p>
          <ul>
            <li>Tajuk</li>
            <li>Objektif produk/perkhidmatan bagi solusi penjagaan yang dicadangkan</li>
            <li>Penerangan produk/perkhidmatan bagi solusi penjagaan yang dicadangkan</li>
            <li>Anggaran perbelanjaan</li>
            <li>Ringkasan</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DocumentsSection'
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
}

.title-container {
  flex: 1;
  position: sticky;
  top: 100px;
}

.title {
  font-size: 3.5rem;
  color: #2c3e50;
  line-height: 1.2;
  font-weight: bold;
}

.text-container {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.document-item {
  background-color: #f5f5f5;
  padding: 2rem;
  border-radius: 10px;
  transition: transform 0.2s ease;
}

.document-item:hover {
  transform: translateY(-5px);
}

.document-item h3 {
  font-size: 1.3rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.video-pitch p {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.video-pitch ul {
  list-style-position: inside;
  padding-left: 1rem;
}

.video-pitch li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }

  .title-container {
    position: static;
  }

  .title {
    font-size: 2.5rem;
  }

  .document-item {
    padding: 1.5rem;
  }

  .video-pitch ul {
    text-align: left;
  }
}
</style> 