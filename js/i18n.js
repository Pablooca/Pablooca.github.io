/* ==========================================================================
   i18n — EN (default) / ES
   - Elements with   data-i18n="key"             → innerHTML is replaced.
   - Elements with   data-i18n-attr="attr:key;…"  → attributes are replaced.
   - Choice persisted in localStorage ("lang"); ?lang=es|en overrides it.
   ========================================================================== */
(function () {
  'use strict';

  var DICT = {
    en: {
      'meta.title': 'Pablo Oca Galeano — Software Engineer · AI & HPC Researcher · Data Engineer',
      'meta.description': 'Pablo Oca Galeano — Software Engineer at NTT Data and Graduate Research Assistant at SynergIA Lab (Universidad Pablo de Olavide). Scalable software, High-Performance Computing and AI applied to biomedicine. Seville, Spain.',

      'a11y.skip': 'Skip to content',
      'a11y.language': 'Language',
      'a11y.theme': 'Toggle light / dark theme',
      'a11y.menu': 'Open menu',
      'a11y.menuClose': 'Close menu',

      'nav.experience': 'Experience',
      'nav.education': 'Education',
      'nav.talks': 'Talks',
      'nav.projects': 'Projects',
      'nav.stack': 'Stack',
      'nav.beyond': 'Beyond',

      'common.seville': 'Seville, Spain',

      'hero.location': 'Seville, Spain · Open to opportunities in the Nordics',
      'hero.role2': 'AI &amp; HPC Researcher',
      'hero.role3': 'Data Engineer',
      'hero.lead': 'I build at the intersection of <strong>scalable software engineering</strong>, <strong>High-Performance Computing</strong> and <strong>Artificial Intelligence applied to biomedicine</strong> — from cloud-native microservices in production to GPU-accelerated genomics on supercomputers.',
      'hero.ctaProjects': 'View Projects',
      'hero.ctaTalks': 'Talks &amp; Publications',
      'hero.stat1Label': 'Thesis grade',
      'hero.stat2Label': 'Speaker',
      'hero.stat3Label': 'Compute',
      'hero.stat4Label': 'Countries lived',

      'experience.title': 'Experience &amp; Research',
      'experience.ntt.date': 'Dec 2025 — Present',
      'experience.ntt.desc': 'Development of cloud-native microservices with Java and Spring Boot, business-process automation with Camunda BPMN, SQL databases, and deployment on Azure and Kubernetes within agile teams.',
      'experience.synergia.date': 'Nov 2025 — Present',
      'experience.synergia.role': 'Graduate Research Assistant',
      'experience.synergia.desc': 'Research in Artificial Intelligence and High-Performance Computing on the CICA Hércules supercomputer (Slurm), spatial transcriptomics (TCGA-BRCA, 10x Xenium) and medical / histological image analysis — laying the groundwork for a PhD.',
      'experience.synergia.tag': 'Medical imaging',

      'education.title': 'Education',
      'education.msc.title': 'M.Sc. in Data Science &amp; Artificial Intelligence',
      'education.msc.original': '<em>Máster Universitario en Ingeniería y Ciencia de Datos</em>',
      'education.bsc.title': 'B.Sc. in Computer Engineering (Information Systems)',
      'education.bsc.original': '<em>Grado en Ingeniería Informática</em>',
      'education.bsc.badge': 'Bachelor’s Thesis',
      'education.bsc.honors': 'With Honors',
      'education.bsc.thesis': 'Accelerating AI algorithms in bioinformatics through HPC: extension of the Python library <code>bioScience</code> with parallel CPU / GPU implementations of the BiBit and BCCA biclustering algorithms.',
      'education.lut.title': 'Exchange · Bachelor of Engineering in Computer Software Engineering',

      'talks.title': 'Talks, Community &amp; Leadership',
      'talks.pycon.alt': 'Pablo Oca Galeano\'s red speaker badge at PyConES 2026 in Barcelona, hanging in a cloister courtyard',
      'talks.pycon.kicker': 'Speaker',
      'talks.pycon.subtitle': 'Beyond the Global Interpreter Lock: squeezing genomic algorithms with Numba, Cython and CUDA.',
      'talks.pycon.desc': 'How to escape Python’s GIL to accelerate real bioinformatics workloads — biclustering on gene-expression matrices — moving from pure Python to JIT compilation, native extensions and GPU kernels, with reproducible benchmarks.',
      'talks.pycon.cta': 'Slides &amp; code on GitHub',
      'talks.pyes.date': 'Since Nov 2026',
      'talks.pyes.title': 'Member of Python España',
      'talks.pyes.desc': 'Part of the Spanish Python community, supporting events, knowledge sharing and open-source culture.',
      'talks.esoliupo.title': 'President of ESOLIUPO',
      'talks.esoliupo.sub': 'Free Software Students’ Association, Universidad Pablo de Olavide',
      'talks.esoliupo.desc': 'Organised the 9th and 10th editions of the <em>Jornadas Ingenieros en la UPO</em> and coordinated hands-on technical workshops.',
      'talks.esoliupo.tagSec': 'Cybersecurity',

      'projects.title': 'Featured Work &amp; Research',
      'projects.tag.benchmarks': 'Benchmarks',
      'projects.pycon.badge': 'Talk · PyConES 2026',
      'projects.pycon.title': 'PyConES 2026: Bypassing the Python GIL for Genomic Algorithms',
      'projects.pycon.desc': 'Slides, code and reproducible benchmarks from my PyConES 2026 talk: escaping the Global Interpreter Lock to accelerate genomic biclustering with Numba, Cython and CUDA.',
      'projects.bioscience.badge': 'B.Sc. Thesis • 10/10',
      'projects.bioscience.title': 'HPC Acceleration for Bioinformatics (<code>bioScience</code>)',
      'projects.bioscience.desc': 'Parallel CPU / GPU implementations of the BiBit and BCCA biclustering algorithms within the Python library <code>bioScience</code>, using Numba, Cython, OpenMP and CUDA to accelerate gene-expression analysis.',
      'projects.openbsi.badge': 'In Progress',
      'projects.openbsi.title': 'OpenBSI &amp; Spatial Transcriptomics Pipeline',
      'projects.openbsi.desc': 'Ongoing biomedical AI and high-performance computing research at the SynergIA Laboratory (UPO). Developing automated deep learning pipelines for bone scintigraphy metastasis quantification (OpenBSI) alongside whole-slide histological image (WSI) preprocessing and spatial transcriptomics integration (TCGA-BRCA, 10x Xenium) executed on the CICA Hércules supercomputer via Slurm.',
      'projects.openbsi.tag': 'Spatial Transcriptomics',
      'projects.more': 'More on github.com/Pablooca',

      'stack.title': 'Tech Stack',
      'stack.languages': 'Languages',
      'stack.backend': 'Backend &amp; Data Engineering',

      'beyond.title': 'Beyond the Code',
      'beyond.intro': 'International mindset, resilience and discipline — the same traits that make long benchmarks and long distances worth it.',
      'beyond.finland.alt': 'Pablo sitting on a white bench under golden autumn trees in Lappeenranta, Finland',
      'beyond.finland.title': 'A year in Finland',
      'beyond.finland.desc': 'Exchange at LUT University: Nordic engineering culture, long autumns and longer winters.',
      'beyond.hm.label': 'Helsinki Half Marathon',
      'beyond.hm.desc': 'Finished in Helsinki during my time in Finland.',
      'beyond.sign.alt': 'Film-style photo of Pablo holding a Lappeenranta street sign indoors',
      'beyond.sign.caption': 'Souvenir from Lappeenranta',
      'beyond.camino.alt': 'Pablo standing in a rain-soaked Praza do Obradoiro facing Santiago de Compostela Cathedral, 2026',
      'beyond.camino.title': 'Camino de Santiago',
      'beyond.camino.desc': 'Completed several times, from Sarria to the Praza do Obradoiro — rain or shine.',
      'beyond.caminoStat.label': 'Per Camino',
      'beyond.caminoStat.desc': 'On foot, stage after stage. Consistency beats intensity.',
      'beyond.compete.label': 'Competitive mindset',
      'beyond.compete.title': 'Strategy &amp; long-distance running',
      'beyond.compete.desc': 'I enjoy strategy games and distance running: planning ahead, managing resources and pacing effort — the same way I approach engineering problems.',

      'contact.title': 'Let’s build something fast.',
      'contact.desc': 'Open to conversations about software engineering, HPC, AI for biomedicine and opportunities in the Nordics.',

      'footer.built': 'Built with HTML, CSS &amp; vanilla JS · Hosted on GitHub Pages'
    },

    es: {
      'meta.title': 'Pablo Oca Galeano — Ingeniero de Software · Investigador en IA y HPC · Ingeniero de Datos',
      'meta.description': 'Pablo Oca Galeano — Ingeniero de Software en NTT Data e Investigador en el Laboratorio SynergIA (Universidad Pablo de Olavide). Software escalable, Computación de Altas Prestaciones e IA aplicada a biomedicina. Sevilla, España.',

      'a11y.skip': 'Saltar al contenido',
      'a11y.language': 'Idioma',
      'a11y.theme': 'Cambiar tema claro / oscuro',
      'a11y.menu': 'Abrir menú',
      'a11y.menuClose': 'Cerrar menú',

      'nav.experience': 'Experiencia',
      'nav.education': 'Formación',
      'nav.talks': 'Charlas',
      'nav.projects': 'Proyectos',
      'nav.stack': 'Stack',
      'nav.beyond': 'Más allá',

      'common.seville': 'Sevilla, España',

      'hero.location': 'Sevilla, España · Abierto a oportunidades en los países nórdicos',
      'hero.role2': 'Investigador en IA y HPC',
      'hero.role3': 'Ingeniero de Datos',
      'hero.lead': 'Trabajo en la intersección entre la <strong>ingeniería de software escalable</strong>, la <strong>Computación de Altas Prestaciones (HPC)</strong> y la <strong>Inteligencia Artificial aplicada a biomedicina</strong>: desde microservicios cloud-native en producción hasta genómica acelerada en GPU sobre supercomputadores.',
      'hero.ctaProjects': 'Ver Proyectos',
      'hero.ctaTalks': 'Charlas y Publicaciones',
      'hero.stat1Label': 'Nota del TFG',
      'hero.stat2Label': 'Ponente',
      'hero.stat3Label': 'Cómputo',
      'hero.stat4Label': 'Países vividos',

      'experience.title': 'Experiencia e Investigación',
      'experience.ntt.date': 'Dic 2025 — Actualidad',
      'experience.ntt.desc': 'Desarrollo de microservicios cloud-native con Java y Spring Boot, automatización de procesos de negocio con Camunda BPMN, bases de datos SQL y despliegue en Azure y Kubernetes dentro de equipos ágiles.',
      'experience.synergia.date': 'Nov 2025 — Actualidad',
      'experience.synergia.role': 'Investigador Asistente (Graduate Research Assistant)',
      'experience.synergia.desc': 'Investigación en Inteligencia Artificial y Computación de Altas Prestaciones en el supercomputador CICA Hércules (Slurm), transcriptómica espacial (TCGA-BRCA, 10x Xenium) y análisis de imagen médica / histológica, preparando el camino hacia el doctorado.',
      'experience.synergia.tag': 'Imagen médica',

      'education.title': 'Formación Académica',
      'education.msc.title': 'Máster Universitario en Ingeniería y Ciencia de Datos',
      'education.msc.original': '<em>M.Sc. in Data Science &amp; Artificial Intelligence</em>',
      'education.bsc.title': 'Grado en Ingeniería Informática en Sistemas de Información',
      'education.bsc.original': '<em>B.Sc. in Computer Engineering (Information Systems)</em>',
      'education.bsc.badge': 'Trabajo Fin de Grado',
      'education.bsc.honors': 'Matrícula de Honor',
      'education.bsc.thesis': 'Aceleración de algoritmos de IA en bioinformática mediante HPC: extensión de la librería Python <code>bioScience</code> con implementaciones paralelas en CPU / GPU de los algoritmos de biclustering BiBit y BCCA.',
      'education.lut.title': 'Intercambio · Bachelor of Engineering in Computer Software Engineering',

      'talks.title': 'Charlas, Comunidad y Liderazgo',
      'talks.pycon.alt': 'Acreditación roja de ponente de Pablo Oca Galeano en la PyConES 2026 de Barcelona, colgando en el patio de un claustro',
      'talks.pycon.kicker': 'Ponente',
      'talks.pycon.subtitle': '',
      'talks.pycon.desc': 'Cómo escapar del GIL de Python para acelerar cargas reales de bioinformática —biclustering sobre matrices de expresión génica— pasando de Python puro a compilación JIT, extensiones nativas y kernels de GPU, con benchmarks reproducibles.',
      'talks.pycon.cta': 'Diapositivas y código en GitHub',
      'talks.pyes.date': 'Desde nov 2026',
      'talks.pyes.title': 'Miembro de Python España',
      'talks.pyes.desc': 'Parte de la comunidad Python española, apoyando eventos, la difusión de conocimiento y la cultura open-source.',
      'talks.esoliupo.title': 'Presidente de ESOLIUPO',
      'talks.esoliupo.sub': 'Asociación de Estudiantes de Software Libre de la Universidad Pablo de Olavide',
      'talks.esoliupo.desc': 'Organización de las IX y X <em>Jornadas Ingenieros en la UPO</em> y coordinación de talleres técnicos prácticos.',
      'talks.esoliupo.tagSec': 'Ciberseguridad',

      'projects.title': 'Proyectos e Investigación Destacados',
      'projects.tag.benchmarks': 'Benchmarks',
      'projects.pycon.badge': 'Charla · PyConES 2026',
      'projects.pycon.title': 'PyConES 2026: Más allá del GIL de Python en algoritmos genómicos',
      'projects.pycon.desc': 'Diapositivas, código y benchmarks reproducibles de mi charla en la PyConES 2026: cómo escapar del Global Interpreter Lock para acelerar el biclustering genómico con Numba, Cython y CUDA.',
      'projects.bioscience.badge': 'TFG • 10/10',
      'projects.bioscience.title': 'Aceleración HPC para Bioinformática (<code>bioScience</code>)',
      'projects.bioscience.desc': 'Implementaciones paralelas en CPU / GPU de los algoritmos de biclustering BiBit y BCCA dentro de la librería Python <code>bioScience</code>, usando Numba, Cython, OpenMP y CUDA para acelerar el análisis de expresión génica.',
      'projects.openbsi.badge': 'En proceso',
      'projects.openbsi.title': 'OpenBSI y Pipeline de Transcriptómica Espacial',
      'projects.openbsi.desc': 'Investigación en curso sobre IA biomédica y computación de altas prestaciones en el laboratorio SynergIA (UPO). Desarrollo de pipelines automatizados de deep learning para la cuantificación de metástasis en gammagrafía ósea (OpenBSI), junto con el preprocesamiento de imágenes histológicas de diapositiva completa (WSI) e integración de transcriptómica espacial (TCGA-BRCA, 10x Xenium) ejecutados en el supercomputador CICA Hércules mediante Slurm.',
      'projects.openbsi.tag': 'Transcriptómica espacial',
      'projects.more': 'Más en github.com/Pablooca',

      'stack.title': 'Stack Tecnológico',
      'stack.languages': 'Lenguajes',
      'stack.backend': 'Backend e Ingeniería de Datos',

      'beyond.title': 'Más allá del código',
      'beyond.intro': 'Mentalidad internacional, resiliencia y disciplina: lo mismo que hace que merezcan la pena los benchmarks largos y las distancias largas.',
      'beyond.finland.alt': 'Pablo sentado en un banco blanco bajo árboles dorados de otoño en Lappeenranta, Finlandia',
      'beyond.finland.title': 'Un año en Finlandia',
      'beyond.finland.desc': 'Intercambio en LUT University: cultura de ingeniería nórdica, otoños largos e inviernos aún más largos.',
      'beyond.hm.label': 'Media Maratón de Helsinki',
      'beyond.hm.desc': 'Completada en Helsinki durante mi etapa en Finlandia.',
      'beyond.sign.alt': 'Foto con estética analógica de Pablo sosteniendo una señal de Lappeenranta en interior',
      'beyond.sign.caption': 'Recuerdo de Lappeenranta',
      'beyond.camino.alt': 'Pablo de pie en la Praza do Obradoiro mojada por la lluvia frente a la Catedral de Santiago de Compostela, 2026',
      'beyond.camino.title': 'Camino de Santiago',
      'beyond.camino.desc': 'Completado en varias ocasiones, desde Sarria hasta la Praza do Obradoiro, con lluvia o con sol.',
      'beyond.caminoStat.label': 'Por Camino',
      'beyond.caminoStat.desc': 'A pie, etapa tras etapa. La constancia gana a la intensidad.',
      'beyond.compete.label': 'Mentalidad competitiva',
      'beyond.compete.title': 'Estrategia y running de fondo',
      'beyond.compete.desc': 'Disfruto de los juegos de estrategia y de las carreras de fondo: planificar, gestionar recursos y dosificar el esfuerzo, igual que abordo los problemas de ingeniería.',

      'contact.title': 'Construyamos algo rápido.',
      'contact.desc': 'Abierto a conversar sobre ingeniería de software, HPC, IA para biomedicina y oportunidades en los países nórdicos.',

      'footer.built': 'Hecho con HTML, CSS y JS vanilla · Alojado en GitHub Pages'
    }
  };

  var SUPPORTED = ['en', 'es'];
  var DEFAULT_LANG = 'en';
  var current = DEFAULT_LANG;

  function storageGet(key) {
    try { return window.localStorage.getItem(key); } catch (e) { return null; }
  }
  function storageSet(key, value) {
    try { window.localStorage.setItem(key, value); } catch (e) { /* private mode: ignore */ }
  }

  function t(key, lang) {
    var d = DICT[lang || current];
    if (d && Object.prototype.hasOwnProperty.call(d, key)) return d[key];
    return Object.prototype.hasOwnProperty.call(DICT[DEFAULT_LANG], key) ? DICT[DEFAULT_LANG][key] : null;
  }

  function apply(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = DEFAULT_LANG;
    current = lang;

    var root = document.documentElement;
    root.setAttribute('lang', lang);

    // Text / HTML content (dictionary is static and trusted)
    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var value = t(nodes[i].getAttribute('data-i18n'), lang);
      if (value !== null) nodes[i].innerHTML = value;
    }

    // Attributes: data-i18n-attr="alt:key;aria-label:key"
    var attrNodes = document.querySelectorAll('[data-i18n-attr]');
    for (var j = 0; j < attrNodes.length; j++) {
      var pairs = attrNodes[j].getAttribute('data-i18n-attr').split(';');
      for (var k = 0; k < pairs.length; k++) {
        var parts = pairs[k].split(':');
        if (parts.length !== 2) continue;
        var attrVal = t(parts[1].trim(), lang);
        if (attrVal !== null) attrNodes[j].setAttribute(parts[0].trim(), attrVal);
      }
    }

    // Document metadata
    document.title = t('meta.title', lang);
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', t('meta.description', lang));

    // Switch buttons state
    var btns = document.querySelectorAll('.lang-switch__btn');
    for (var b = 0; b < btns.length; b++) {
      btns[b].setAttribute('aria-pressed', btns[b].getAttribute('data-lang') === lang ? 'true' : 'false');
    }

    storageSet('lang', lang);
    document.dispatchEvent(new CustomEvent('i18n:change', { detail: { lang: lang } }));
  }

  function initialLang() {
    var fromUrl = null;
    try { fromUrl = new URLSearchParams(window.location.search).get('lang'); } catch (e) {}
    if (SUPPORTED.indexOf(fromUrl) !== -1) return fromUrl;
    var saved = storageGet('lang');
    if (SUPPORTED.indexOf(saved) !== -1) return saved;
    return DEFAULT_LANG; // English by default, regardless of browser language
  }

  function init() {
    var btns = document.querySelectorAll('.lang-switch__btn');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function () {
        var lang = this.getAttribute('data-lang');
        if (lang !== current) apply(lang);
      });
    }
    var lang = initialLang();
    // HTML ships in English; only re-render when needed (but always sync UI state)
    apply(lang);
  }

  window.I18n = { t: t, setLang: apply, getLang: function () { return current; } };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
