<template>
  <section id="timeline" class="section">
    <div class="content-wrapper">
      <div class="title-container">
        <h1 class="title">TIMELINE PROGRAM</h1>
      </div>
      <div class="timeline-scroll">
        <div class="timeline-events">
          <!-- Februari -->
          <div class="event-card">
            <div class="event-date">
              <span class="month">Februari</span>
              <span class="day">20</span>
            </div>
            <div class="event-content">
              <h3>Minggu 3</h3>
              <ul>
                <li>Sidang Media</li>
                <li>Pengiklanan Pendaftaran</li>
                <li>Pendaftaran permohonan</li>
                <li>Saringan peserta</li>
              </ul>
            </div>
          </div>

          <!-- Mac -->
          <div class="event-card">
            <div class="event-date">
              <span class="month">Mac</span>
              <span class="day">10</span>
            </div>
            <div class="event-content">
              <h3>Minggu 2</h3>
              <ul>
                <li>Tutup Pendaftaran</li>
              </ul>
            </div>
          </div>

          <div class="event-card">
            <div class="event-date">
              <span class="month">Mac</span>
              <span class="day">13</span>
            </div>
            <div class="event-content">
              <h3>Minggu 2</h3>
              <ul>
                <li>Keluarkan Acceptance Letter</li>
              </ul>
            </div>
          </div>

          <div class="event-card">
            <div class="event-date">
              <span class="month">Mac</span>
              <span class="day">20</span>
            </div>
            <div class="event-content">
              <h3>9am - 4pm</h3>
              <ul>
                <li>Modul 1: Pengenalan dasar Care Economy</li>
                <li>Soft launch</li>
              </ul>
            </div>
          </div>

          <div class="event-card">
            <div class="event-date">
              <span class="month">Mac</span>
              <span class="day">24</span>
            </div>
            <div class="event-content">
              <h3>9am - 4pm</h3>
              <ul>
                <li>Modul 2: Apa itu BMC?</li>
                <li>Pitching Class 1 (Pitching Fundamental Skills)</li>
              </ul>
            </div>
          </div>

          <div class="event-card">
            <div class="event-date">
              <span class="month">Mac</span>
              <span class="day">25</span>
            </div>
            <div class="event-content">
              <h3>9am - 4pm</h3>
              <ul>
                <li>Pitching Clinic 1: Elevator Pitch</li>
                <li>Modul 3: Strategi Branding dalam trend global semasa</li>
              </ul>
            </div>
          </div>

          <!-- April -->
          <div class="event-card">
            <div class="event-date">
              <span class="month">April</span>
              <span class="day">9</span>
            </div>
            <div class="event-content">
              <h3>9am - 4pm</h3>
              <ul>
                <li>Pitching Class 2: Preparing a Winning Pitch Deck</li>
                <li>Pitching Clinic 2</li>
              </ul>
            </div>
          </div>

          <div class="event-card">
            <div class="event-date">
              <span class="month">April</span>
              <span class="day">10</span>
            </div>
            <div class="event-content">
              <h3>9am - 4pm</h3>
              <ul>
                <li>Modul 4: Strategic Fundraising</li>
                <li>Modul 5: Jaga Duit, Jaga Bisnes</li>
              </ul>
            </div>
          </div>

          <div class="event-card">
            <div class="event-date">
              <span class="month">April</span>
              <span class="day">15</span>
            </div>
            <div class="event-content">
              <h3>9am - 1pm</h3>
              <ul>
                <li>Business Talk & Networking Event</li>
              </ul>
            </div>
          </div>

          <div class="event-card">
            <div class="event-date">
              <span class="month">April</span>
              <span class="day">16</span>
            </div>
            <div class="event-content">
              <h3>9am - 4pm</h3>
              <ul>
                <li>Lawatan Industri</li>
              </ul>
            </div>
          </div>

          <div class="event-card">
            <div class="event-date">
              <span class="month">April</span>
              <span class="day">23</span>
            </div>
            <div class="event-content">
              <h3>9am - 4pm</h3>
              <ul>
                <li>Modul 6: Strategi Pemasaran Digital</li>
                <li>Modul 7: Data Analitik</li>
              </ul>
            </div>
          </div>

          <div class="event-card">
            <div class="event-date">
              <span class="month">April</span>
              <span class="day">24</span>
            </div>
            <div class="event-content">
              <h3>9am - 4pm</h3>
              <ul>
                <li>Pitching clinic 3: Role Play Pitch</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TimelineSection'
}
</script>

<style scoped>
.section {
  padding: 4rem 2rem;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.title-container {
  text-align: center;
  margin-bottom: 3rem;
}

.title {
  font-size: 3.5rem;
  color: #2c3e50;
  line-height: 1.2;
  font-weight: bold;
}

.timeline-scroll {
  overflow-x: auto;
  padding: 1rem 0;
  -webkit-overflow-scrolling: touch;
}

.timeline-events {
  display: flex;
  gap: 2rem;
  padding: 0.5rem;
}

.event-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  min-width: 300px;
  max-width: 300px;
  transition: transform 0.2s ease;
}

.event-card:hover {
  transform: translateY(-5px);
}

.event-date {
  background: #2c3e50;
  color: white;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.month {
  font-size: 1.1rem;
  text-transform: uppercase;
}

.day {
  font-size: 1.8rem;
  font-weight: bold;
}

.event-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.event-content h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.event-content ul {
  list-style-type: none;
  padding: 0;
}

.event-content li {
  margin-bottom: 0.5rem;
  color: #666;
  font-size: 1rem;
  line-height: 1.4;
}

/* Custom scrollbar */
.timeline-scroll::-webkit-scrollbar {
  height: 8px;
}

.timeline-scroll::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.timeline-scroll::-webkit-scrollbar-thumb {
  background: #2c3e50;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .title {
    font-size: 2.5rem;
  }

  .event-card {
    min-width: 280px;
  }
}
</style> 