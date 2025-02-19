<template>
  <header class="header">
    <nav class="nav-container">
      <div class="logos-container">
        <img 
          src="@/assets/Logo-Lambang-Jata-Selangor.png" 
          alt="Selangor Logo" 
          class="logo-image" 
          style="width: 70px; height: 50px;"
        >
        <img 
          src="@/assets/3.png" 
          alt="Icon Full Colour" 
          class="logo-image desktop-only" 
          style="width: 130px; height:100%;"
        >
        <img 
          src="@/assets/ICON FULL COLOUR.png" 
          alt="Icon Full Colour" 
          class="logo-image mobile-only" 
          style="width: 70px; height: 40px;"
        >
      </div>

      <div class="right-section">
        <div class="nav-links" :class="{ 'is-open': isMenuOpen }">
          <a href="#objectives" @click="handleNavClick('objectives')" :class="{ active: activeSection === 'objectives' }">Objektif</a>
          <a href="#criteria" @click="handleNavClick('criteria')" :class="{ active: activeSection === 'criteria' }">Kriteria</a>
          <a href="#documents" @click="handleNavClick('documents')" :class="{ active: activeSection === 'documents' }">Dokumen</a>
          <a href="#benefits" @click="handleNavClick('benefits')" :class="{ active: activeSection === 'benefits' }">Ganjaran</a>
          <a href="#timeline" @click="handleNavClick('timeline')" :class="{ active: activeSection === 'timeline' }">Garis Masa Program</a>
          <a href="#get-started" @click="handleNavClick('get-started')" :class="{ active: activeSection === 'get-started' }">Daftar</a>
        </div>
      </div>

      <div class="mobile-controls">
        <div class="mobile-logos">
          <img 
            src="@/assets/Logo-Lambang-Jata-Selangor.png" 
            alt="Selangor Logo" 
            class="logo-image" 
            style="width: 70px; height: 50px;"
          >
          <img 
            src="@/assets/ICON FULL COLOUR.png" 
            alt="Icon Full Colour" 
            class="logo-image" 
            style="width: 60px; height: 40px;"
          >
        </div>
        <button class="menu-toggle" @click="toggleMenu">
          <span class="hamburger" :class="{ 'is-active': isMenuOpen }">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      activeSection: '',
      isMenuOpen: false
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
        'get-started'
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
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
    },
    handleNavClick(sectionId) {
      this.scrollToSection(sectionId);
      this.isMenuOpen = false;
      document.body.style.overflow = '';
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
  padding: 1rem 1rem 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.right-section {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.logo-primary {
  display: flex;
  align-items: center;
  gap: 0.2rem;
}

.step-up {
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 0.2rem;
  transform: translateY(0px);
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
  color: var(--text-primary);
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
  background-color: var(--secondary);

  transition: width 0.2s ease;
}

.nav-links a:hover {
  color: var(--text-primary);
}

.nav-links a:hover::after {
  width: 100%;
}

.nav-links a.active {
  color: var(--text-primary);
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

.selangor-logo {
  display: block;
}

.mobile-controls {
  display: none;
}

.mobile-logos {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

@media (max-width: 768px) {
  .selangor-logo {
    display: none;  /* Hide desktop version */
  }

  .mobile-controls {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    justify-content: space-between;
  }

  .mobile-logos {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .right-section {
    gap: 1rem;
  }
  
  .menu-toggle {
    display: block !important;
  }

  .nav-container {
    padding: 1rem;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 250px;
    height: 100vh;
    background-color: white;
    flex-direction: column;
    padding: 80px 2rem 2rem;
    transition: right 0.3s ease;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  }

  .nav-links.is-open {
    right: 0;
  }

  .nav-links a {
    display: block;
    padding: 1rem 0;
    font-size: 1.1rem;
  }

  .hamburger {
    width: 24px;
    height: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .hamburger span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: var(--text-primary);
    transition: all 0.3s ease;
  }
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
  position: relative;
}

.hamburger {
  width: 24px;
  height: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--text-primary);
  transition: all 0.3s ease;
}

.hamburger.is-active span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.hamburger.is-active span:nth-child(2) {
  opacity: 0;
}

.hamburger.is-active span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

.logos {
  display: flex;
  align-items: center;
  gap: 1rem;  /* Space between logos */
}

.logo-image {
  object-fit: contain;
  display: block;
  padding: 0;
  margin: 0;
}

.icon-full-colour {
  display: block;
}

.mobile-icon-full-colour {
  display: none;
}

@media (max-width: 768px) {
  .icon-full-colour {
    display: none;  /* Hide desktop version */
  }

  .mobile-icon-full-colour {
    display: block;  /* Show mobile version */
  }

  .mobile-controls {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
}

.logos-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: -1rem;
}

@media (max-width: 768px) {
  .logos-container {
    display: none;
  }

  .mobile-controls {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    justify-content: space-between;
  }

  .mobile-logos {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
}

.desktop-only {
  display: block;
}

.mobile-only {
  display: none;
}

@media (max-width: 768px) {
  .desktop-only {
    display: none;
  }

  .mobile-only {
    display: block;
  }
}
</style> 