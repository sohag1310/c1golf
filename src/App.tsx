import { useEffect, useState } from 'react';
import {
  Footer,
  GearSection,
  InstructionSection,
  LifestyleSection,
  MarqueeBanner,
  MembershipSection,
  NewsSection,
  NewsletterSection,
  ShopSection,
  TravelSection,
  VideosPodcastsSection,
} from './components/EditorialSections';
import { HeaderAndOverlays } from './components/HeaderAndOverlays';
import { HeroScene } from './components/HeroScene';
import { VideoModal } from './components/VideoModal';
import type { VideoItem } from './data/golfData';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [overlayOpen, setOverlayOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? (y / scrollable) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = overlayOpen || activeVideo ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [overlayOpen, activeVideo]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.04, rootMargin: '0px 0px 40px 0px' }
    );

    const nodes = document.querySelectorAll('.reveal');
    nodes.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <HeaderAndOverlays
        scrolled={scrolled}
        progress={progress}
        onSelectVideo={setActiveVideo}
        onOverlayChange={setOverlayOpen}
      />
      <main id="top">
        <HeroScene />
        <MarqueeBanner />
        <NewsSection />
        <InstructionSection />
        <GearSection />
        <VideosPodcastsSection onSelectVideo={setActiveVideo} />
        <TravelSection />
        <LifestyleSection />
        <ShopSection />
        <MembershipSection />
        <NewsletterSection />
      </main>
      <Footer />
      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </>
  );
}
