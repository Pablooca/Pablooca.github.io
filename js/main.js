/* ==========================================================================
   main.js — theme toggle, mobile navigation, active section, scroll reveal
   ========================================================================== */
(function () {
  'use strict';

  var root = document.documentElement;
  root.classList.add('js');

  function storageSet(key, value) {
    try { window.localStorage.setItem(key, value); } catch (e) { /* ignore */ }
  }

  /* ---------- Theme ---------- */
  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'light' ? '#f7f8fa' : '#0a0c10');
  }

  function initTheme() {
    var toggle = document.getElementById('theme-toggle');
    setTheme(root.getAttribute('data-theme') === 'light' ? 'light' : 'dark');
    if (!toggle) return;
    toggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      setTheme(next);
      storageSet('theme', next);
    });
  }

  /* ---------- Navigation ---------- */
  function initNav() {
    var nav = document.getElementById('nav');
    var burger = document.getElementById('nav-burger');
    var links = document.getElementById('nav-links');

    function onScroll() {
      if (nav) nav.classList.toggle('is-scrolled', window.scrollY > 8);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    if (!burger || !links) return;

    function label(open) {
      var key = open ? 'a11y.menuClose' : 'a11y.menu';
      var text = window.I18n ? window.I18n.t(key) : (open ? 'Close menu' : 'Open menu');
      burger.setAttribute('aria-label', text);
    }

    function setOpen(open) {
      links.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      label(open);
    }

    burger.addEventListener('click', function () {
      setOpen(burger.getAttribute('aria-expanded') !== 'true');
    });

    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && burger.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        burger.focus();
      }
    });

    document.addEventListener('click', function (e) {
      if (burger.getAttribute('aria-expanded') === 'true' && !e.target.closest('#nav')) setOpen(false);
    });

    document.addEventListener('i18n:change', function () {
      label(burger.getAttribute('aria-expanded') === 'true');
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 980) setOpen(false);
    });
  }

  /* ---------- Active section highlight ---------- */
  function initActiveSection() {
    if (!('IntersectionObserver' in window)) return;
    var navLinks = document.querySelectorAll('.nav__links a[href^="#"]');
    var map = {};
    for (var i = 0; i < navLinks.length; i++) map[navLinks[i].getAttribute('href').slice(1)] = navLinks[i];

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        for (var id in map) map[id].classList.remove('is-active');
        var link = map[entry.target.id];
        if (link) link.classList.add('is-active');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    Object.keys(map).forEach(function (id) {
      var section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  }

  /* ---------- Reveal on scroll ---------- */
  function initReveal() {
    var items = document.querySelectorAll('.reveal');
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce || !('IntersectionObserver' in window)) {
      for (var i = 0; i < items.length; i++) items[i].classList.add('is-visible');
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    for (var j = 0; j < items.length; j++) observer.observe(items[j]);
  }

  /* ---------- Footer year ---------- */
  function initYear() {
    var el = document.getElementById('year');
    if (el) el.textContent = String(new Date().getFullYear());
  }

  function init() {
    initTheme();
    initNav();
    initActiveSection();
    initReveal();
    initYear();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
