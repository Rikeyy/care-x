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
          <p>Video Pitching ATAU Slaid ATAU Kertas Kerja tentang sesuatu produk/perkhidmatan bagi penjagaan yang ditawarkan oleh syarikat kepada orang tua/kanak kanak/OKU. Mempunyai:
          </p>
          <ol style="margin-left: 3rem;">
            <li>Tajuk</li>
            <li>Objektif produk/perkhidmatan bagi solusi penjagaan yang dicadangkan</li>
            <li>Penerangan produk/perkhidmatan bagi solusi penjagaan yang dicadangkan</li>
          </ol>
          <p>Video haruslah berdurasi 1 minit sahaja dan Video ATAU Slaid ATAU Kertas Kerja boleh dihantar di dalam bentuk link (Google Drive, YouTube etc) melalui Google Form yang disediakan.</p>
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
  font-size: var(--font-size-xxl);
  color: var(--text-primary);
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
  background-color: var(--background-light);
  color: var(--text-secondary);
  padding: 2rem;
  border-radius: var(--border-radius);
  transition: transform var(--transition-speed) ease;
}

.document-item:hover {
  transform: translateY(-5px);
}

.document-item h3 {
  font-size: var(--font-size-md);
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
    align-items: center;
  }

  .title-container {
    position: static;
    flex: none;
    margin: 0 auto;
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 2.5rem;
    text-align: center;
  }

  .text-container {
    width: 100%;
  }

  .document-item {
    padding: 1.5rem;
  }

  .video-pitch ul {
    text-align: left;
  }
}
</style> 