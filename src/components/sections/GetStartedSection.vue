<template>
  <section id="get-started" class="section">
    <div class="content-wrapper">
      <div class="get-started-container">
        <h1 class="title">DAFTAR SEKARANG</h1>
        <a 
          href="https://forms.gle/bsAshwbqe5LuaaPy8" 
          target="_blank" 
          class="cta-button"
          @click="trackRegistration"
        >
          Daftar Di Sini
        </a>
        <h2 class="closing-date"><span>Tarikh tutup penyertaan 31 Mac 2025</span></h2>
        <button @click="downloadProfile" class="download-button">
          Muat Turun Profail Program
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GetStartedSection',
  methods: {
    downloadProfile() {
      // Open PDF in new tab
      window.open('/XCare_Profile Poster.pdf', '_blank');

      // Trigger download
      const link = document.createElement('a');
      link.href = '/XCare_Profile Poster.pdf';
      link.download = 'XCare_Profile Poster.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      if (window.gtag) {
        window.gtag('event', 'download', {
          'event_category': 'profile',
          'event_label': 'program_profile'
        });
      }
    },
    trackRegistration() {
      if (window.gtag) {
        window.gtag('event', 'click', {
          'event_category': 'registration',
          'event_label': 'registration_form'
        });
      }
    }
  }
}
</script>

<style scoped>
.section {
  padding: 8rem 2rem;
  margin-top: 4rem;
  background-color: var(--background-light);
  background: rgba(255, 255, 255, 0.777);

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
  color: var(--text-quaternary);
  line-height: 1.2;
  font-weight: bold;
}

.cta-button {
  display: inline-block;
  padding: 1rem 2.5rem;
  background-color: var(--text-quaternary);
  color: var(--text-tertiary);
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

.closing-date {
  font-size: var(--font-size-xl);
  color: var(--text-quaternary);
  font-weight: bold;
  text-align: center;
}

.download-button {
  padding: 1rem 2.5rem;
  background-color: var(--text-quaternary);
  color: var(--text-tertiary);
  border: none;
  border-radius: var(--border-radius);
  font-size: var(--font-size-md);
  font-weight: 500;
  cursor: pointer;
  transition: transform var(--transition-speed) ease, 
              box-shadow var(--transition-speed) ease;
}

.download-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px var(--shadow-color);
}

@media (max-width: 768px) {
  .section {
    padding: 6rem 2rem;
    margin-top: 2rem;
  }

  .title {
    font-size: var(--font-size-xl);
  }

  .closing-date {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;  /* Space between date and text */
  }

  .closing-date::before {
    content: "Tarikh tutup penyertaan";
    display: block;
  }

  .closing-date::after {
    content: "31 Mac 2025";
    display: block;
  }

  /* Hide the original text */
  .closing-date span {
    display: none;
  }

  .download-button {
    padding: 0.8rem 2rem;
    font-size: var(--font-size-sm);
  }
}
</style> 