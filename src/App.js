import React, { useState } from 'react';
import './App.css';
import Silk from './components/Silk';

const GALLERY_IMAGES = [
  '/files/image_gallery/MM8A0282.jpg',
  '/files/image_gallery/IMG_9462.jpg',
  '/files/image_gallery/MM8A3187.jpg',
  '/files/image_gallery/1777591093255.jpg',
];

const PRES_SLIDES = [
  '/files/amphibean_pres/Slide1.JPG',
  '/files/amphibean_pres/Slide2.JPG',
  '/files/amphibean_pres/Slide3.JPG',
  '/files/amphibean_pres/Slide4.JPG',
  '/files/amphibean_pres/Slide5.JPG',
  '/files/amphibean_pres/slide6.png',
  '/files/amphibean_pres/Slide7.JPG',
  '/files/amphibean_pres/Slide8.jpg',
];

const POSTER_SLIDES = [
  '/files/posters/Slide11.JPG',
  '/files/posters/Slide12.JPG',
  '/files/posters/Slide13.JPG',
  '/files/posters/Slide14.JPG',
];

const FAUNA_ID = '_GS-zcPsGYI';
const FILM_REEL_ID = 'jIUPzPcOSCo';
const DOC_ID = 'Zso61uQWuNM';

function ImageGallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <div className="gallery-grid">
        {GALLERY_IMAGES.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Wildlife ${i + 1}`}
            className="gallery-thumb"
            onClick={() => setLightbox(i)}
          />
        ))}
      </div>

      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <img src={GALLERY_IMAGES[lightbox]} alt="Full size" />
        </div>
      )}
    </>
  );
}

function Slideshow({ slides }) {
  const [idx, setIdx] = useState(0);

  return (
    <div className="slideshow">
      <img src={slides[idx]} alt={`Slide ${idx + 1}`} className="slide-img" />
      <div className="slide-controls">
        <button onClick={() => setIdx(i => i - 1)} disabled={idx === 0}>← Prev</button>
        <span>{idx + 1} / {slides.length}</span>
        <button onClick={() => setIdx(i => i + 1)} disabled={idx === slides.length - 1}>Next →</button>
      </div>
    </div>
  );
}

function YoutubeEmbed({ videoId, title }) {
  return (
    <div className="video-wrapper">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

function App() {
  return (
    <div className="App">

      <div className="hero">
        <div className="hero-silk">
          <Silk speed={3} scale={1.4} color="#1e4d2b" noiseIntensity={1.5} rotation={0.3} />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-eyebrow">Microbiologist · Filmmaker · Researcher</p>
          <h1>Ryan Thompson</h1>
          <p className="hero-sub">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in the wilderness,
            between the moss and the microscope.
          </p>
        </div>
        <div className="hero-scroll-hint">↓</div>
      </div>

      <main className="main-content">

        <section className="section">
          <div className="section-label">01 — Photography</div>
          <h2>Wildlife</h2>
          <p className="caption">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae
            vestibulum vestibulum. Donec in efficitur leo, in commodo odio.
          </p>
          <ImageGallery />
        </section>

        <section className="section">
          <div className="section-label">02 — Research</div>
          <h2>Amphibian Study</h2>
          <p className="caption">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
          <Slideshow slides={PRES_SLIDES} />
        </section>

        <section className="section">
          <div className="section-label">03 — Research</div>
          <h2>Posters</h2>
          <p className="caption">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <Slideshow slides={POSTER_SLIDES} />
        </section>

        <section className="section">
          <div className="section-label">04 — Film</div>
          <h2>Cinematography</h2>
          <p className="caption">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris.
          </p>
          <div className="videos-grid">
            <YoutubeEmbed videoId={FAUNA_ID} title="Fauna" />
            <YoutubeEmbed videoId={FILM_REEL_ID} title="Film Reel" />
            <YoutubeEmbed videoId={DOC_ID} title="Documentary" />
          </div>
        </section>

        <section className="section">
          <div className="section-label">05 — CV</div>
          <h2>Curriculum Vitae</h2>
          <p className="caption">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <a
            href="/files/CV%202026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-link"
          >
            View CV (PDF)
          </a>
        </section>

      </main>

      <footer className="site-footer">
        <p>© 2026 Ryan Thompson</p>
      </footer>
    </div>
  );
}

export default App;
