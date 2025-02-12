<template>
  <div class="landing">
    <!-- Header Component -->
    <app-header></app-header>

    <main>
      <!-- Hero Section -->
      <section class="hero">
        <div class="content-wrapper">
          <div class="hero-content">
            <h1 class="title">X-CARE<br>STEP UP!</h1>
            <p class="subtitle">Program Pemerkasaan Perniagaan Dalam Sektor Penjagaan</p>
          </div>
        </div>
      </section>

      <objective-section />
      <criteria-section />
      <documents-section />
      <benefits-section />
      <timeline-section />
      <get-started-section />
      <!-- <contact-section /> -->
      <closing-section />
    </main>

    <!-- Footer Component -->
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import ObjectiveSection from '@/components/sections/ObjectiveSection.vue'
import CriteriaSection from '@/components/sections/CriteriaSection.vue'
import DocumentsSection from '@/components/sections/DocumentsSection.vue'
import BenefitsSection from '@/components/sections/BenefitsSection.vue'
import TimelineSection from '@/components/sections/TimelineSection.vue'
import GetStartedSection from '@/components/sections/GetStartedSection.vue'
// import ContactSection from '@/components/sections/ContactSection.vue'
import ClosingSection from '@/components/sections/ClosingSection.vue'

export default {
  name: 'LandingPage',
  components: {
    AppHeader,
    AppFooter,
    ObjectiveSection,
    CriteriaSection,
    DocumentsSection,
    BenefitsSection,
    TimelineSection,
    GetStartedSection,
    // ContactSection,
    ClosingSection
  }
}
</script>

<style scoped>
.landing {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  margin-top: 60px; /* Add space for fixed header */
}

.section {
  padding: 4rem 2rem;
}

.hero {
  padding: 8rem 2rem 6rem;
  background-color: var(--background-light);
  position: relative;
  overflow: hidden;
}

.hero::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.hero .content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
}

.hero-content {
  text-align: center;
}

.hero .title {
  font-size: var(--font-size-hero);
  color: var(--text-primary);
  line-height: 1.2;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.hero .subtitle {
  font-size: var(--font-size-lg);
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .hero {
    padding: 6rem 2rem 4rem;
  }

  .hero .title {
    font-size: 3rem;
  }

  .hero .subtitle {
    font-size: 1.2rem;
  }
}

/* Add more styles as needed */
</style> 