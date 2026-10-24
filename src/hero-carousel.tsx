import { Component, type CSSProperties, type ReactNode } from 'react';
import { createRoot as createClientRoot } from 'react-dom/client';
import CircularCarousel, { type CircularCarouselItem } from './components/CircularCarousel';
import GooeyNav from './components/GooeyNav';
import './hero-carousel.css';

const image = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&h=1600&q=85`;

const items: CircularCarouselItem[] = [
  {
    src: image('photo-1503951914875-452162b0f3f1'),
    title: '+840K vistas',
    subtitle: 'Corte Bravo',
    alt: 'Corte Bravo — El fade que cambió el barrio'
  },
  {
    src: image('photo-1483985988355-763728e1935b'),
    title: '+2.2M vistas',
    subtitle: 'Nova Atelier',
    alt: 'Nova Atelier — Drop 03'
  },
  {
    src: image('photo-1414235077428-338989a2e8c0'),
    title: '+1.4M vistas',
    subtitle: 'Brasa Norte',
    alt: 'Brasa Norte — El plato que se agotó en 48 horas'
  },
  {
    src: image('photo-1495474472287-4d71bcdd2085'),
    title: '+2.8M vistas',
    subtitle: 'Nomad Roasters',
    alt: 'Nomad Roasters — POV: el primer sorbo'
  },
  {
    src: image('photo-1596462502278-27bfdc403348'),
    title: '4.1x ROAS',
    subtitle: 'Aura Skin',
    alt: 'Aura Skin — Rutina de 3 pasos'
  }
];

function PhoneCarousel() {
  return (
    <div className="hero-phone-carousel" aria-label="Galería de casos destacados">
      <CircularCarousel
        items={items}
        preset="orbit"
        intro="spin"
        cardWidth={166}
        aspectRatio={0.51}
        gap={18}
        tilt={-4}
        perspective={1600}
        autoplay="drift"
        speed={8}
        direction="right"
        draggable
        momentum={0.62}
        snap
        pauseOnHover
        focusOnClick
        parallax={0.2}
        stretch={0.08}
        depthFade={0.42}
        fadeColor="#ffffff"
        innerShade={0.28}
        cornerRadius={32}
        captions
      />
      <div className="hero-phone-carousel__metric" aria-hidden="true">
        <strong>71%</strong>
        <span>Retención media</span>
      </div>
      <div className="hero-phone-carousel__status" aria-hidden="true">
        <i />
        <span>Arrastrá para explorar</span>
      </div>
    </div>
  );
}

const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/trabajos' },
  { label: 'About', href: '/clientes' },
  { label: 'Contact', href: '/contacto' }
];

function GooeyNavigation() {
  const activeIndex = Math.max(
    0,
    navigationItems.findIndex(item => item.href === window.location.pathname)
  );

  return (
    <GooeyErrorBoundary>
      <GooeyNav
        items={navigationItems}
        initialActiveIndex={activeIndex}
        theme="dark"
        color="#090909"
        activeTextColor="#ffffff"
        colors={['#090909']}
        size="md"
        frame={false}
        particleCount={15}
        spread={62}
        animationTime={450}
        timeVariance={300}
        gooeyness={0.55}
        wobble={0.55}
        hoverEffect={true}
        style={{ '--gn-ink': '#101010', '--gn-muted': 'rgba(16, 16, 16, 0.56)' } as CSSProperties}
        onChange={(index: number, item: { label: string }) => console.log(index, item.label)}
        className="site-gooey-nav"
      />
    </GooeyErrorBoundary>
  );
}

class GooeyErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? <span className="site-gooey-nav__fallback">Home · Work · About · Contact</span> : this.props.children;
  }
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

function mountGooeyNavigation() {
  const originalNavigation = document.querySelector<HTMLElement>('[aria-label="Navegación principal"]');
  const header = originalNavigation?.parentElement;
  if (!originalNavigation || !header) return false;

  let host = header.querySelector<HTMLElement>('[data-gooey-nav-host]');
  if (host) return false;

  host = document.createElement('div');
  host.dataset.gooeyNavHost = 'true';
  originalNavigation.style.display = 'none';
  originalNavigation.before(host);
  createClientRoot(host).render(<GooeyNavigation />);
  return true;
}

const observer = new MutationObserver(() => {
  mountCarousel();
  mountGooeyNavigation();
});
observer.observe(document.documentElement, { childList: true, subtree: true });
mountCarousel();
mountGooeyNavigation();
