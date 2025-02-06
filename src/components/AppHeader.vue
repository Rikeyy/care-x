<template>
  <header class="header">
    <nav class="nav-container">
      <div class="logo-container">
        <div class="logo-primary">CARE-X STEP UP!</div>
        <div class="logo-secondary">Selangor Care Accelerator</div>
      </div>
      <div class="nav-links">
        <a href="#objectives" @click.prevent="scrollToSection('objectives')" :class="{ active: activeSection === 'objectives' }">Objektif</a>
        <a href="#criteria" @click.prevent="scrollToSection('criteria')" :class="{ active: activeSection === 'criteria' }">Kriteria</a>
        <a href="#documents" @click.prevent="scrollToSection('documents')" :class="{ active: activeSection === 'documents' }">Dokumen</a>
        <a href="#benefits" @click.prevent="scrollToSection('benefits')" :class="{ active: activeSection === 'benefits' }">Hadiah</a>
        <a href="#timeline" @click.prevent="scrollToSection('timeline')" :class="{ active: activeSection === 'timeline' }">Timeline</a>
        <a href="#contact" @click.prevent="scrollToSection('contact')" :class="{ active: activeSection === 'contact' }">Hubungi</a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      activeSection: ''
    }
  },
  mounted() {
    this.checkActiveSection()
    window.addEventListener('scroll', this.checkActiveSection)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.checkActiveSection)
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        const headerOffset = 80 // Adjust this value based on your header height
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    },
    checkActiveSection() {
      const sections = [
        'objectives',
        'criteria',
        'documents',
        'benefits',
        'timeline',
        'contact'
      ]

      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom > 100
        }
        return false
      })

      this.activeSection = current || ''
    }
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0,0,0,0.05);
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.logo-primary {
  font-size: 1.4rem;
  font-weight: bold;
  color: #2c3e50;
}

.logo-secondary {
  font-size: 1rem;
  color: #666;
  padding-left: 2rem;
  border-left: 1px solid #ddd;
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
  color: #2c3e50;
  font-size: 1rem;
  transition: color 0.2s ease;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 0;
  background-color: #2c3e50;
  transition: width 0.2s ease;
}

.nav-links a:hover {
  color: #2c3e50;
}

.nav-links a:hover::after {
  width: 100%;
}

.nav-links a.active {
  color: #2c3e50;
  font-weight: 500;
}

.nav-links a.active::after {
  width: 100%;
}

@media (max-width: 1024px) {
  .logo-secondary {
    display: none;
  }
}

@media (max-width: 768px) {
  .nav-container {
    padding: 1rem;
  }

  .nav-links {
    gap: 1rem;
  }

  .nav-links a {
    font-size: 0.9rem;
  }
}
</style> 