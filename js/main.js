// Sheria Tafiti — shared behaviour

document.addEventListener('DOMContentLoaded', function () {

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Tabs (Insights page)
  var tabButtons = document.querySelectorAll('.tab-btn');
  if (tabButtons.length) {
    tabButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var targetId = btn.getAttribute('data-tab-target');
        var group = btn.closest('[data-tab-group]');
        if (!group) return;

        group.querySelectorAll('.tab-btn').forEach(function (b) {
          b.setAttribute('aria-selected', 'false');
        });
        group.querySelectorAll('.tab-panel').forEach(function (p) {
          p.classList.remove('is-active');
        });

        btn.setAttribute('aria-selected', 'true');
        var panel = document.getElementById(targetId);
        if (panel) panel.classList.add('is-active');
      });
    });
  }

  // Consultation booking form (client-side confirmation only — no backend)
  var consultForm = document.getElementById('consultation-form');
  if (consultForm) {
    consultForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var success = document.getElementById('form-success');
      if (success) {
        success.classList.add('is-visible');
        success.setAttribute('tabindex', '-1');
        success.focus();
      }
      consultForm.reset();
    });
  }

});
