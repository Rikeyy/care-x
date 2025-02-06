<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h4>Selangor Care Accelerator</h4>
        <p>© 2024 All rights reserved</p>
      </div>
      <div class="footer-section">
        <h4>Contact</h4>
        <p>Email: info@selangorcare.com</p>
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
    background: #2c3e50;
    color: white;
    padding: 2rem 0;
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
    color: #a3b1c2;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.2s ease;
    }

    .social-links a:hover {
    color: white;
    }

    @media (max-width: 768px) {
    .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
    }
    }
    </style> 