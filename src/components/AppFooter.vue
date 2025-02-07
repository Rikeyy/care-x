<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h4>Selangor Care Accelerator</h4>
        <p>© 2025 All rights reserved</p>
      </div>
      <div class="footer-section">
        <h4>Contact</h4>
        <p>Email: carex.selangor@gmail.com</p>
        <p>017-368 7881 (Puan Shuhada)</p>
        <p>018-281 1610 (Cik Syarifah)</p>
      </div>
      <div class="footer-section">
        <h4>Follow Us</h4>
        <div class="social-links">
            <a href="https://selcare.com">https://selcare.com</a>
          <a href="https://selgatecorporation.com">https://selgatecorporation.com</a>
          <!-- Add social media links -->
            </div>
        </div>
        </div>
    </footer>
    </template>

    <script>
    export default {
    name: 'AppFooter'
    }
    </script>

    <style scoped>
    .footer {
    background-color: var(--primary);
    color: var(--background-white);
    padding: var(--spacing-xl) 0;
    }

    .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    }

    .footer-section h4 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    }

    .footer-section p {
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    }

    .social-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    }

    .social-links a {
    color: var(--secondary);
    text-decoration: none;
    font-size: var(--font-size-xs);
    transition: color var(--transition-speed) ease;
    }

    .social-links a:hover {
    color: var(--hover-color);
    }

    @media (max-width: 768px) {
    .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
    }
    }
    </style> 