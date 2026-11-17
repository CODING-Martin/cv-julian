import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { createRoot as createClientRoot } from 'react-dom/client';
import CircularCarousel, { type CircularCarouselItem } from './components/CircularCarousel';
import FoldText from './components/FoldText';
import './hero-carousel.css';

const serviceMarqueeItems = [
  'CONTENT CREATION',
  'VIDEO PRODUCTION',
  'VIDEO EDITING',
  'REELS',
  'TIKTOK',
  'AUDIOVISUAL CONTENT',
  'SOCIAL MEDIA',
  'BRAND CONTENT'
];

const items: CircularCarouselItem[] = [
  {
    src: '/videos/bracco-equipamiento-carousel.mp4',
    media: 'video',
    poster: '/posters/bracco-equipamiento-480.webp',
    subtitle: '@BRACCOMENDOZA',
    alt: 'Bracco — Presentación de accesorios automotrices'
  },
  {
    src: '/videos/ubuntu-carousel.mp4',
    media: 'video',
    poster: '/posters/ubuntu-480.webp',
    subtitle: '@UBUNTU',
    alt: 'Ubuntu — Presentación de marca'
  },
  {
    src: '/videos/huentata-carousel.mp4',
    media: 'video',
    poster: '/posters/huentata-480.webp',
    subtitle: '@HUENTATA TURISMO',
    alt: 'Huentata — Experiencias turísticas'
  },
  {
    src: '/videos/flipping-carousel.mp4',
    media: 'video',
    poster: '/posters/flipping-carousel-480.webp',
    subtitle: '@FLIPPING',
    alt: 'Flipping — Contenido inmobiliario'
  },
  {
    src: '/videos/carteles-carousel.mp4',
    media: 'video',
    poster: '/posters/carteles-carousel-480.webp',
    subtitle: 'Publicidad exterior',
    alt: 'Carteles — Campaña de alto impacto'
  }
];

function PhoneCarousel() {
  return (
    <div className="hero-phone-carousel" aria-label="Galería de casos destacados">
      <CircularCarousel
        items={items}
        preset="orbit"
        intro="spin"
        cardWidth={272}
        aspectRatio={0.51}
        gap={18}
        tilt={-4}
        perspective={1600}
        autoplay="drift"
        speed={3.5}
        direction="right"
        draggable
        momentum={0.62}
        snap
        pauseOnHover
        focusOnClick
        parallax={0.2}
        stretch={0.08}
        depthFade={0.86}
        fadeColor="#090909"
        innerShade={0.16}
        cornerRadius={32}
      />
      <div className="hero-phone-carousel__status" aria-hidden="true">
        <i />
        <span>Arrastrá para explorar</span>
      </div>
    </div>
  );
}

function StudioHero() {
  const heroTitle = 'Creación de contenido y edición audiovisual.';

  return (
    <div className="studio-hero">
      <div className="container-x studio-hero__layout">
        <section className="studio-hero__message" aria-labelledby="studio-hero-title">
          <h1 id="studio-hero-title">
            <FoldText
              text={heroTitle}
              splitBy="char"
              hinge="top"
              foldStyle="paper"
              duration={0.72}
              stagger={0.032}
              foldAngle={92}
              perspective={700}
              creaseShading={0.55}
              trigger="mount"
              fontSize="inherit"
              fontWeight="inherit"
              color="currentColor"
              style={{ lineHeight: 'inherit', letterSpacing: 'inherit' }}
            />
          </h1>
          <p className="studio-hero__copy">
              Producción y edición de videos para marcas, emprendimientos y proyectos.
          </p>
          <div className="studio-hero__divider" aria-hidden="true" />
        </section>

        <div className="studio-hero__showcase">
          <PhoneCarousel />
        </div>
      </div>
    </div>
  );
}

const videoPortfolioSlots = [
  {
    number: '01',
    client: 'Bracco',
    modalTitle: '@BRACCO.MENDOZA',
    category: 'Accesorios automotrices',
    title: '3 errores que tenés que evitar',
    description: 'Participación frente a cámara y presentación de productos de la marca.',
    role: 'Participación frente a cámara, grabación y edición.',
    duration: '0:34',
    src: '/videos/bracco-3-errores.mp4',
    poster: '/posters/bracco-3-errores.webp'
  },
  {
    number: '02',
    client: 'Huentata',
    modalTitle: '@HUENTATATURISMO',
    category: 'Agencia de turismo',
    title: 'La experiencia detrás de cada viaje',
    description: 'Presentación de experiencias turísticas y comunicación de marca.',
    role: 'Grabación y edición.',
    duration: '0:50',
    src: '/videos/huentata.mp4',
    poster: '/posters/huentata.webp'
  },
  {
    number: '03',
    client: 'Factores',
    modalTitle: '@ABALLAYAGUSTIN.RE',
    category: 'Inmobiliaria',
    title: 'Qué define el valor de una propiedad',
    description: 'Contenido educativo sobre el mercado inmobiliario y sus principales conceptos.',
    role: 'Grabación y edición.',
    duration: '0:43',
    src: '/videos/factores-propiedad.mp4',
    poster: '/posters/factores-propiedad.webp'
  },
  {
    number: '04',
    client: 'Ubuntu',
    modalTitle: '@UBUNTUDESARROLLOS',
    category: 'Inmobiliaria',
    title: 'Tu propiedad, acompañada por un equipo',
    description: 'Presentación de marca y comunicación de servicios inmobiliarios.',
    role: 'Grabación y edición.',
    duration: '0:44',
    src: '/videos/ubuntu.mp4',
    poster: '/posters/ubuntu.webp'
  },
  {
    number: '05',
    client: 'Flipping',
    modalTitle: '@FLIPPING',
    category: 'Inmobiliaria',
    title: 'Cómo funciona el flipping inmobiliario',
    description: 'Contenido informativo sobre inversiones y oportunidades inmobiliarias.',
    role: 'Grabación y edición.',
    duration: '0:48',
    src: '/videos/flipping-inmobiliario.mp4',
    poster: '/posters/flipping-inmobiliario.webp'
  },
  {
    number: '06',
    client: 'Balzac',
    modalTitle: '@BALZAC_SANDWICHS',
    category: 'Gastronomía',
    title: 'El lomito que se lleva todas las miradas',
    description: 'Contenido gastronómico centrado en productos, recomendaciones y experiencias.',
    role: 'Grabación y edición.',
    duration: '0:24',
    src: '/videos/barroluco.mp4',
    poster: '/posters/barroluco.webp'
  },
  {
    number: '07',
    client: 'Bracco',
    modalTitle: '@BRACCO.MENDOZA',
    category: 'Accesorios automotrices',
    title: 'Todo para equipar tu camioneta',
    description: 'Presentación de accesorios automotrices y demostraciones de productos de la marca.',
    role: 'Participación frente a cámara, grabación y edición.',
    duration: '0:39',
    src: '/videos/bracco-equipamiento.mp4',
    poster: '/posters/bracco-equipamiento.webp'
  },
  {
    number: '08',
    client: "Rick's Burgers",
    modalTitle: '@RICKSBURGERS_',
    category: 'Gastronomía',
    title: 'Sweet Bacon: una combinación inesperada',
    description: 'Presentación de productos, preparación y contenido gastronómico para redes sociales.',
    role: 'Grabación y edición.',
    duration: '0:36',
    src: '/videos/ricks-sweet-bacon.mp4',
    poster: '/posters/ricks-sweet-bacon.webp'
  },
  {
    number: '09',
    client: 'Ariel Martínez',
    modalTitle: 'ARIELMARTINEZ.ARQ',
    category: 'Arquitectura',
    title: 'Instalaciones que definen una buena obra',
    description: 'Contenido profesional sobre arquitectura, instalaciones y mantenimiento de una vivienda.',
    role: 'Grabación y edición.',
    duration: '0:28',
    src: '/videos/ariel-martinez-arq.mp4',
    poster: '/posters/ariel-martinez-arq.webp'
  }
] as const;

const portfolioTotal = String(videoPortfolioSlots.length).padStart(2, '0');

type VideoPortfolioSlot = (typeof videoPortfolioSlots)[number];
type ReadyVideoPortfolioSlot = Extract<VideoPortfolioSlot, { readonly src: string }>;

function getPortfolioTitle(slot: VideoPortfolioSlot) {
  return slot.modalTitle;
}

function getPortfolioTitleSizeClass(slot: VideoPortfolioSlot) {
  return getPortfolioTitle(slot).length >= 12 ? 'portfolio-video-title--long' : '';
}

function getResponsivePosterSet(poster: string) {
  const base = poster.replace(/\.webp$/i, '');
  return `${base}-360.webp 360w, ${base}-480.webp 480w`;
}

function getCardPoster(poster: string) {
  return poster.replace(/\.webp$/i, '-480.webp');
}

function PlayIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M8 5.75v12.5L18 12 8 5.75Z" fill="currentColor" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="m6.75 6.75 10.5 10.5m0-10.5-10.5 10.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
    </svg>
  );
}

function SoundIcon({ muted }: { muted: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5.5 9.25H9l4-3.25v12l-4-3.25H5.5v-5.5Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.7" />
      {muted ? (
        <path d="m16.25 9.25 3.5 5.5m0-5.5-3.5 5.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
      ) : (
        <path d="M16.25 9.25c1.4 1.5 1.4 4 0 5.5m2.25-7.7c2.55 2.7 2.55 7.2 0 9.9" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
      )}
    </svg>
  );
}

function FullscreenIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M9 5H5v4m10-4h4v4M9 19H5v-4m10 4h4v-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
    </svg>
  );
}

type IOSVideoElement = HTMLVideoElement & {
  webkitEnterFullscreen?: () => void;
};

function PortfolioVideoDialog({ slot, onClose }: { slot: ReadyVideoPortfolioSlot; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const enterFullscreen = async () => {
    const video = videoRef.current as IOSVideoElement | null;
    if (!video) return;

    try {
      if (video.requestFullscreen) {
        await video.requestFullscreen();
        return;
      }
    } catch {
      // Safari on iPhone may expose the standard API but still require its native video fullscreen method.
    }

    video.webkitEnterFullscreen?.();
  };

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div className="portfolio-video-dialog__backdrop" onMouseDown={event => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <section
        className="portfolio-video-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="portfolio-video-dialog-title"
      >
        <button ref={closeRef} type="button" className="portfolio-video-dialog__close" onClick={onClose} aria-label="Cerrar proyecto">
          <CloseIcon />
        </button>

        <div className="portfolio-video-dialog__layout">
          <div className="portfolio-video-dialog__media">
            <video
              ref={videoRef}
              src={slot.src}
              poster={slot.poster}
              preload="metadata"
              playsInline
              controls
              controlsList="nodownload nofullscreen"
              aria-label={`${slot.client}: ${slot.title}`}
              onVolumeChange={event => setIsMuted(event.currentTarget.muted)}
            >
              Tu navegador no puede reproducir este video.
            </video>
            <div className="portfolio-video-dialog__media-actions" aria-label="Controles adicionales del video">
              <button type="button" onClick={toggleMute} aria-pressed={isMuted}>
                <SoundIcon muted={isMuted} />
                <span>{isMuted ? 'Activar sonido' : 'Silenciar'}</span>
              </button>
              <button type="button" onClick={enterFullscreen}>
                <FullscreenIcon />
                <span>Pantalla completa</span>
              </button>
            </div>
          </div>

          <div className="portfolio-video-dialog__content">
            <p className="portfolio-video-dialog__eyebrow">Proyecto {slot.number} / {portfolioTotal}</p>
            <h2
              id="portfolio-video-dialog-title"
              className={getPortfolioTitleSizeClass(slot) || undefined}
            >
              {getPortfolioTitle(slot)}
            </h2>
            <p className="portfolio-video-dialog__description">{slot.description}</p>

            <dl className="portfolio-video-dialog__facts">
              <div className="portfolio-video-dialog__fact portfolio-video-dialog__fact--industry">
                <dt>Industria</dt><dd>{slot.category}</dd>
              </div>
              <div className="portfolio-video-dialog__fact portfolio-video-dialog__fact--format">
                <dt>Formato</dt><dd>Vertical · 9:16</dd>
              </div>
              <div className="portfolio-video-dialog__fact portfolio-video-dialog__fact--duration">
                <dt>Duración</dt><dd>{slot.duration}</dd>
              </div>
              <div className="portfolio-video-dialog__fact portfolio-video-dialog__fact--role">
                <dt>Rol en el proyecto</dt>
                <dd>{'role' in slot ? slot.role : 'Producción y edición audiovisual.'}</dd>
              </div>
            </dl>

          </div>
        </div>
      </section>
    </div>,
    document.body
  );
}

function PortfolioVideoCard({ slot }: { slot: VideoPortfolioSlot }) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const closeDialog = () => {
    setIsOpen(false);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  };

  return (
    <article className="portfolio-video-card portfolio-video-card--ready">
      <button
        ref={triggerRef}
        type="button"
        className="portfolio-video-card__media"
        onClick={() => setIsOpen(true)}
        aria-haspopup="dialog"
        aria-label={`Ver proyecto ${slot.client}: ${getPortfolioTitle(slot)}`}
      >
        <img
          src={getCardPoster(slot.poster)}
          srcSet={getResponsivePosterSet(slot.poster)}
          sizes="(max-width: 559px) 82vw, (max-width: 899px) 42vw, 31vw"
          alt=""
          loading="lazy"
          decoding="async"
          width="720"
          height="1280"
        />
        <span className="portfolio-video-card__index">{slot.number} / {portfolioTotal}</span>
        <span className="portfolio-video-card__play" aria-hidden="true"><PlayIcon /></span>
        <span className="portfolio-video-card__open-label">Ver proyecto</span>
      </button>

      <div className="portfolio-video-card__body">
        <div className="portfolio-video-card__meta">
          <span>{slot.category}</span>
          <span>{slot.duration}</span>
        </div>
        <p className="portfolio-video-card__client">{slot.client}</p>
        <h3 className={getPortfolioTitleSizeClass(slot) || undefined}>{getPortfolioTitle(slot)}</h3>
        <p className="portfolio-video-card__description">{slot.description}</p>
        <button type="button" className="portfolio-video-card__details" onClick={() => setIsOpen(true)}>
          Ver video y detalles <span aria-hidden="true">↗</span>
        </button>
      </div>

      {isOpen && <PortfolioVideoDialog slot={slot} onClose={closeDialog} />}
    </article>
  );
}

function VideoPortfolioSection() {
  return (
    <div className="container-x portfolio-video-section__inner">
      <header className="portfolio-video-section__header">
        <div className="portfolio-video-section__intro">
          <h2><span>Algunos de</span>{' '}<em>mis trabajos.</em></h2>
        </div>
      </header>

      <div className="portfolio-video-grid" aria-label="Proyectos audiovisuales">
        {videoPortfolioSlots.map(slot => <PortfolioVideoCard key={slot.number} slot={slot} />)}
      </div>
      <p className="portfolio-video-section__swipe-hint">Deslizá para ver más proyectos <span aria-hidden="true">→</span></p>
    </div>
  );
}

function ServiceMarquee() {
  const rowItems = [...serviceMarqueeItems, ...serviceMarqueeItems];

  return (
    <section className="service-marquee" aria-label="Servicios audiovisuales">
      {[false, true].map(reverse => (
        <div
          key={String(reverse)}
          className={`service-marquee__row${reverse ? ' service-marquee__row--secondary' : ''}`}
        >
          <div className={`service-marquee__track${reverse ? ' service-marquee__track--reverse' : ''}`}>
            {rowItems.map((item, index) => (
              <span className="service-marquee__item" key={`${item}-${index}`} aria-hidden={index >= serviceMarqueeItems.length}>
                {item}<i aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

function WhatsappIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.4-4.2A8.5 8.5 0 1 1 20.5 11.7Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.6" />
      <path d="M8.7 7.8c.3-.3.7-.2.9.2l.8 1.8c.1.3.1.5-.1.7l-.6.7c.7 1.4 1.8 2.4 3.2 3.1l.7-.8c.2-.2.5-.3.7-.2l1.8.8c.4.2.5.6.3.9-.5.9-1.4 1.4-2.4 1.2-3.8-.8-6.8-3.8-7.5-7.5-.2-.4.1-.7.4-.9Z" fill="currentColor" />
    </svg>
  );
}

function ContactSection() {
  return (
    <section className="studio-contact" aria-labelledby="studio-contact-title">
      <div className="container-x studio-contact__inner">
        <p className="studio-contact__eyebrow motion-reveal-item"><i aria-hidden="true" /> Siguiente paso</p>
        <h2 id="studio-contact-title" className="motion-reveal-item"><span>¿Trabajamos</span>{' '}<em>Juntos?</em></h2>
        <p className="studio-contact__copy motion-reveal-item">
          Para consultas, proyectos o colaboraciones, contactame directamente.
        </p>
        <a
          className="studio-contact__button motion-reveal-item"
          href="https://wa.me/5492612573805"
          target="_blank"
          rel="noreferrer"
        >
          <WhatsappIcon />
          <span>WhatsApp directo</span>
        </a>
      </div>
    </section>
  );
}

function StandalonePage() {
  useLayoutEffect(() => {
    setupLightweightSectionReveals();
  }, []);

  return (
    <>
      <main className="studio-standalone-page">
        <StudioHero />
        <ServiceMarquee />
        <section id="trabajos" className="portfolio-video-section">
          <VideoPortfolioSection />
        </section>
        <ContactSection />
      </main>
      <p className="site-copyright">Todos los derechos reservados · 2026</p>
    </>
  );
}

const retiredPaths = ['/clientes', '/contacto'];

function removeRetiredContent() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';

  if (retiredPaths.includes(pathname)) {
    window.history.replaceState(null, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  document.querySelectorAll<HTMLAnchorElement | HTMLButtonElement>('a, button').forEach(element => {
    const label = element.textContent?.replace(/\s+/g, ' ').trim().toLocaleLowerCase('es-AR');
    if (label?.startsWith('impulsar mi marca')) element.remove();
    if (label?.startsWith('ver los 9 casos')) element.remove();

    if (label?.includes('plazas') && label.includes('2026')) {
      element.closest('section')?.remove() ?? element.remove();
    }
  });

  document.querySelectorAll<HTMLAnchorElement>('a[href="/clientes"], a[href="/contacto"]').forEach(link => link.remove());

  Array.from(document.querySelectorAll<HTMLElement>('div'))
    .find(
      element =>
        element.className.includes('mt-12 grid') &&
        element.textContent?.includes('Respuesta') &&
        element.textContent?.includes('Sin contratos largos')
    )
    ?.remove();

  const availabilityCircle = Array.from(document.querySelectorAll<SVGTextPathElement>('textPath')).find(
    element => element.textContent?.includes('2 PLAZAS') && element.textContent?.includes('2026')
  );
  availabilityCircle?.closest('svg')?.parentElement?.remove();

  const selectedWorkLabel = Array.from(document.querySelectorAll<HTMLElement>('span')).find(element =>
    element.textContent?.replace(/\s+/g, ' ').trim().toLocaleLowerCase('es-AR').startsWith('trabajos seleccionados')
  );
  selectedWorkLabel?.parentElement?.remove();

  Array.from(document.querySelectorAll<HTMLParagraphElement>('p'))
    .find(element => /^\d+\s+de\s+\d+\s+proyectos$/i.test(element.textContent?.replace(/\s+/g, ' ').trim() ?? ''))
    ?.remove();
}

function removeProcessSection() {
  const processLabel = Array.from(document.querySelectorAll<HTMLElement>('span')).find(element =>
    element.textContent?.replace(/\s+/g, ' ').trim().toLocaleLowerCase('es-AR').startsWith('el proceso')
  );
  processLabel?.closest('section')?.remove();
}

function removeImpactMetrics() {
  document.querySelector<HTMLElement>('[aria-label="Métricas de impacto"]')?.remove();
}

function updateWorkCategoryLabels() {
  const filterButtons = Array.from(document.querySelectorAll<HTMLButtonElement>('#trabajos button[aria-pressed]'));
  const categories = [
    ['Todos', 'Todos'],
    ['Instagram Reels', 'Reels'],
    ['TikTok Virales', 'TikTok'],
    ['Ads de Conversión', 'Publicidad'],
    ['UGC', 'Producción audiovisual'],
    ['Edición CapCut Pro', 'Edición de video']
  ] as const;

  filterButtons.forEach(button => {
    const label = Array.from(button.querySelectorAll<HTMLSpanElement>('span')).find(span => span.textContent?.trim());
    const current = label?.textContent?.trim();
    const category = categories.find(([source]) => source === current);

    if (!label || !category) return;

    if (label.textContent !== category[1]) label.textContent = category[1];
  });
}

function updateCapabilityMarquee() {
  const section = document.querySelector<HTMLElement>('[aria-label="Clientes y capacidades"]');
  if (!section || section.dataset.marqueePhrases === 'true') return;

  const rows = Array.from(section.children) as HTMLElement[];
  const clientRow = rows.find(row => row.textContent?.includes('AURA SKIN')) ?? rows[0];
  const serviceRow = rows.find(row => row.textContent?.includes('CapCut Pro')) ?? rows[1];

  const updateRow = (row: HTMLElement | undefined, items: string[]) => {
    if (!row) return false;

    const labels = Array.from(row.querySelectorAll<HTMLSpanElement>('span')).filter(span => span.textContent?.trim());
    if (!labels.length) return false;

    labels.forEach((label, index) => {
      label.textContent = items[index % items.length];
    });
    return true;
  };

  const clientsUpdated = updateRow(clientRow, serviceMarqueeItems);
  const servicesUpdated = updateRow(serviceRow, serviceMarqueeItems);

  if (clientsUpdated && servicesUpdated) section.dataset.marqueePhrases = 'true';
}

const videoMetricPattern = /(?:vistas?|retenci[oó]n|roas|ctr|reservas?|guardados?|leads?|sell[- ]out|suscripciones?|comentarios?|ingresos?|cpa|altas|consultas|ticket medio|ugc recibido)/i;

function removeVideoMetricOverlay(overlay: HTMLElement | undefined) {
  if (!overlay) return;

  Array.from(overlay.querySelectorAll<HTMLElement>('p, span')).forEach(label => {
    if (!videoMetricPattern.test(label.textContent?.replace(/\s+/g, ' ').trim() ?? '')) return;

    const playerCaption = label.closest<HTMLElement>('[class*="bottom-0"]');
    if (playerCaption && playerCaption !== overlay) {
      playerCaption.remove();
      return;
    }

    label.closest<HTMLElement>('[class*="rounded-full"]')?.remove();
  });
}

function removeLegacyVideoMetrics() {
  document.querySelectorAll<HTMLElement>('button[aria-label^="Ver caso de estudio de "]').forEach(card => {
    card.querySelectorAll<HTMLElement>('[class*="rounded-full"]').forEach(badge => {
      if (videoMetricPattern.test(badge.textContent?.replace(/\s+/g, ' ').trim() ?? '')) badge.remove();
    });

    const overlay = Array.from(card.querySelectorAll<HTMLElement>('[class*="pointer-events-none"]')).find(element =>
      videoMetricPattern.test(element.textContent?.replace(/\s+/g, ' ').trim() ?? '')
    );
    removeVideoMetricOverlay(overlay);
  });
}

function simplifyCaseStudyDialogs() {
  document.querySelectorAll<HTMLElement>('[role="dialog"]').forEach(dialog => {
    const title = dialog.querySelector<HTMLHeadingElement>('h3');
    if (!title) return;

    const previewLabel = Array.from(dialog.querySelectorAll<HTMLParagraphElement>('p')).find(element =>
      element.textContent?.includes('Preview del corte final entregado')
    );
    if (previewLabel) {
      if (previewLabel.textContent !== 'Preview del video') previewLabel.textContent = 'Preview del video';
      previewLabel.classList.add('case-study-preview-label');
      previewLabel.parentElement?.classList.add('case-study-media-column');
    }

    Array.from(dialog.querySelectorAll<HTMLElement>('div'))
      .find(element =>
        element.className.includes('flex-wrap') &&
        Array.from(element.children).filter(child => child instanceof HTMLSpanElement).length === 3
      )
      ?.remove();

    title.previousElementSibling?.remove();
    title.classList.add('case-study-title');

    const results = title.nextElementSibling as HTMLElement | null;
    if (results?.className.includes('grid-cols-3')) results.remove();

    const details = title.nextElementSibling as HTMLElement | null;
    if (!details) return;

    details.classList.add('case-study-details');
    Array.from(details.querySelectorAll<HTMLParagraphElement>('p'))
      .find(element => element.textContent?.trim().toLocaleLowerCase('es-AR') === 'técnicas aplicadas')
      ?.parentElement?.remove();

    dialog.querySelector<HTMLAnchorElement>('a[href="https://instagram.com"]')?.remove();
  });
}

function mountCarousel() {
  const marker = Array.from(document.querySelectorAll('span')).find(
    element => element.textContent?.trim() === 'Preview en loop'
  );
  const originalVisual = marker?.parentElement?.parentElement;

  if (!originalVisual || originalVisual.dataset.reactbitsMounted) return false;

  originalVisual.dataset.reactbitsMounted = 'true';
  originalVisual.replaceChildren();
  createClientRoot(originalVisual).render(<PhoneCarousel />);
  return true;
}

function mountStudioHero() {
  if (window.location.pathname !== '/') return false;

  const headline = Array.from(document.querySelectorAll('h1')).find(element =>
    element.textContent?.replace(/\s+/g, ' ').toUpperCase().includes('TRANSFORMAMOS')
  );
  const originalHero = headline?.closest<HTMLElement>('section');

  if (!originalHero || originalHero.dataset.studioHeroMounted) return false;

  originalHero.dataset.studioHeroMounted = 'true';
  originalHero.classList.add('studio-hero-section');
  originalHero.replaceChildren();
  createClientRoot(originalHero).render(<StudioHero />);
  return true;
}

function mountVideoPortfolio() {
  if (window.location.pathname !== '/') return false;

  const section = document.querySelector<HTMLElement>('#trabajos');
  if (!section || section.dataset.videoPortfolioMounted) return false;

  section.dataset.videoPortfolioMounted = 'true';
  section.className = 'portfolio-video-section';
  section.replaceChildren();
  createClientRoot(section).render(<VideoPortfolioSection />);
  return true;
}

function removeTopNavigation() {
  const brand = document.querySelector<HTMLElement>('[aria-label="NUEVE, inicio"]');
  const header = brand?.closest<HTMLElement>('header');
  if (!header) return false;

  header.remove();
  return true;
}

function removeFooter() {
  document.querySelectorAll<HTMLElement>('footer').forEach(footer => footer.remove());
}

function addCopyrightNotice() {
  const root = document.getElementById('root');
  if (!root || root.querySelector('.site-copyright')) return;

  const notice = document.createElement('p');
  notice.className = 'site-copyright';
  notice.textContent = 'Todos los derechos reservados · 2026';
  root.append(notice);
}

function addContactQuestionMark() {
  const heading = Array.from(document.querySelectorAll<HTMLHeadingElement>('h1, h2')).find(element =>
    element.textContent?.replace(/\s+/g, ' ').trim().toLocaleLowerCase('es-AR') === '¿trabajamos juntos'
  );

  if (!heading || heading.textContent?.trim().endsWith('?')) return;

  const styledEnding = Array.from(heading.querySelectorAll<HTMLElement>('span, em')).find(element =>
    element.textContent?.trim().toLocaleLowerCase('es-AR') === 'juntos'
  );

  if (styledEnding) {
    styledEnding.textContent = `${styledEnding.textContent?.trim()}?`;
    return;
  }

  heading.append('?');
}

function removeContactGrid() {
  const heading = Array.from(document.querySelectorAll<HTMLHeadingElement>('h1, h2')).find(element =>
    element.textContent?.replace(/\s+/g, ' ').trim().toLocaleLowerCase('es-AR').startsWith('¿trabajamos juntos')
  );
  const section = heading?.closest<HTMLElement>('section');

  if (!section) return;

  section.querySelectorAll<HTMLElement>('[class*="bg-hairline-grid"]').forEach(grid => grid.remove());
  Array.from(section.children)
    .find(element =>
      element.getAttribute('aria-hidden') === 'true' &&
      element instanceof HTMLElement &&
      element.style.backgroundImage.includes('linear-gradient')
    )
    ?.remove();

  Array.from(section.querySelectorAll<HTMLElement>('span')).find(element =>
    element.textContent?.replace(/\s+/g, ' ').trim().toLocaleLowerCase('es-AR') === 'siguiente paso'
  )?.parentElement?.style.setProperty('border-top', '0');
}

let sectionRevealObserver: IntersectionObserver | null = null;

function getSectionRevealObserver() {
  if (sectionRevealObserver || !('IntersectionObserver' in window)) return sectionRevealObserver;

  sectionRevealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const target = entry.target as HTMLElement;
      if (target.classList.contains('motion-reveal-on-view')) {
        target.classList.add('motion-reveal-on-view--visible');
        sectionRevealObserver?.unobserve(target);
        return;
      }

      const section = target.classList.contains('motion-reveal-section')
        ? target
        : target.closest<HTMLElement>('.motion-reveal-section');

      if (!section) return;

      section.classList.add('motion-reveal-section--visible');
      sectionRevealObserver?.unobserve(target);
    });
  }, {
    threshold: 0.16,
    rootMargin: '0px 0px -8% 0px'
  });

  return sectionRevealObserver;
}

function addRevealItem(element: HTMLElement | null | undefined, delay: number) {
  if (!element) return;

  element.classList.add('motion-reveal-item');
  element.style.setProperty('--motion-reveal-delay', `${delay}ms`);
}

function observeRevealItem(element: HTMLElement, delay: number) {
  if (element.dataset.motionRevealObserved) return;

  element.dataset.motionRevealObserved = 'true';
  element.classList.add('motion-reveal-on-view');
  element.style.setProperty('--motion-reveal-delay', `${delay}ms`);

  const revealObserver = getSectionRevealObserver();
  if (!revealObserver || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    element.classList.add('motion-reveal-on-view--visible');
    return;
  }

  revealObserver.observe(element);
}

function observeRevealSection(
  section: HTMLElement | null,
  variant: 'portfolio' | 'contact',
  trigger: HTMLElement | null = section
) {
  if (!section || section.dataset.motionRevealObserved) return;

  section.dataset.motionRevealObserved = 'true';
  section.classList.add('motion-reveal-section', `motion-reveal-section--${variant}`);

  const revealObserver = getSectionRevealObserver();
  if (!revealObserver || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    section.classList.add('motion-reveal-section--visible');
    return;
  }

  revealObserver.observe(trigger ?? section);
}

function setupLightweightSectionReveals() {
  const portfolioSection = document.querySelector<HTMLElement>('.portfolio-video-section');
  const portfolioTitle = portfolioSection?.querySelector<HTMLHeadingElement>('.portfolio-video-section__intro h2');
  const portfolioCards = portfolioSection?.querySelectorAll<HTMLElement>('.portfolio-video-card');

  if (portfolioSection && portfolioTitle && portfolioCards?.length === videoPortfolioSlots.length) {
    addRevealItem(portfolioTitle, 0);
    observeRevealSection(portfolioSection, 'portfolio', portfolioTitle);

    portfolioCards.forEach((card, index) => {
      observeRevealItem(card, (index % 3) * 80);
    });
  } else {
    return;
  }

  const contactTitle = Array.from(document.querySelectorAll<HTMLHeadingElement>('h1, h2')).find(element =>
    element.textContent?.replace(/\s+/g, ' ').trim().toLocaleLowerCase('es-AR').startsWith('¿trabajamos juntos')
  );
  const contactSection = contactTitle?.closest<HTMLElement>('section');

  if (!contactSection || !contactTitle) return;

  const contactEyebrow = Array.from(contactSection.querySelectorAll<HTMLElement>('span')).find(element =>
    element.textContent?.replace(/\s+/g, ' ').trim().toLocaleLowerCase('es-AR') === 'siguiente paso'
  )?.parentElement;
  const contactCopy = Array.from(contactSection.querySelectorAll<HTMLParagraphElement>('p')).find(element =>
    element.textContent?.replace(/\s+/g, ' ').trim().toLocaleLowerCase('es-AR').startsWith('para consultas')
  );
  const contactButton = Array.from(contactSection.querySelectorAll<HTMLAnchorElement>('a')).find(element =>
    element.textContent?.replace(/\s+/g, ' ').trim().toLocaleLowerCase('es-AR').includes('whatsapp directo')
  );

  addRevealItem(contactEyebrow, 0);
  addRevealItem(contactTitle, 70);
  addRevealItem(contactCopy, 140);
  addRevealItem(contactButton, 210);
  observeRevealSection(contactSection, 'contact', contactTitle);
}

function mountStandalonePage() {
  const root = document.getElementById('root');
  const hasLegacyHero = Array.from(document.querySelectorAll('h1')).some(element =>
    element.textContent?.replace(/\s+/g, ' ').toUpperCase().includes('TRANSFORMAMOS')
  );

  if (!root || root.dataset.standaloneMounted || document.querySelector('.studio-standalone-page') || hasLegacyHero) {
    return false;
  }

  root.dataset.standaloneMounted = 'true';
  root.replaceChildren();
  createClientRoot(root).render(<StandalonePage />);
  return true;
}

const root = document.getElementById('root');

if (!root) throw new Error('No se encontró el contenedor principal de la aplicación.');

createClientRoot(root).render(<StandalonePage />);
