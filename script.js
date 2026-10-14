// ==========================================================================
// AEROBMSCE — CONTROLLER & INTERACTION ENGINE
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for internal navigation anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Contact Form Handling with Field Validation
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contactName').value.trim();
      const org = document.getElementById('contactOrg').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const category = document.getElementById('contactCategory').value;
      const msg = document.getElementById('contactMsg').value.trim();

      if (!name || !org || !email || !category || !msg) {
        formStatus.textContent = 'ERROR: All telemetry fields marked with * are required.';
        formStatus.style.display = 'block';
        formStatus.style.background = 'rgba(255, 50, 50, 0.15)';
        formStatus.style.border = '1px solid #ff3333';
        formStatus.style.color = '#ff6666';
        return;
      }

      // Simple email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        formStatus.textContent = 'ERROR: Please provide a valid email address.';
        formStatus.style.display = 'block';
        formStatus.style.background = 'rgba(255, 50, 50, 0.15)';
        formStatus.style.border = '1px solid #ff3333';
        formStatus.style.color = '#ff6666';
        return;
      }

      // Successful transmission simulation
      formStatus.innerHTML = `
        <strong>TRANSMISSION SUCCESSFUL [STATUS 200 OK]</strong><br />
        Thank you, ${name}. Your message regarding <em>${category}</em> has been securely routed to Rajesh (Partnership Head) and the AeroBMSCE team at Propel Lab–3. We will respond within 24–48 hours.
      `;
      formStatus.style.display = 'block';
      formStatus.className = 'form-status success';
      contactForm.reset();
    });
  }
});
