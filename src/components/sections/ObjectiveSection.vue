<template>
  <section id="objectives" class="section">
    <div class="content-wrapper">
      <div class="title-container">
        <h1 class="title">OBJEKTIF<br>PROGRAM</h1>
      </div>
      <div class="text-container">
        <p class="objective-text">
          Untuk memberikan pendedahan yang lebih khusus kepada pemain industri yang 
          menyediakan produk atau perkhidmatan di dalam sektor penjagaan tentang modul 
          perniagaan dan pitching yang lebih berkesan dan bersesuaian untuk dipraktikan 
          di dalam perniagaan.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ObjectiveSection'
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
  background-color: #f5f5f5;
  padding: 3rem;
  border-radius: 10px;
}

.objective-text {
  font-size: 1.2rem;
  line-height: 1.8;
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

  .text-container {
    padding: 2rem;
  }
}
</style> 