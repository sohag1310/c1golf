import type { CSSProperties } from 'react';

export function HeroScene() {
  return (
    <section className="hero hero-video-section" style={{ padding: 0 }}>
      {/* Cropped full-bleed hero video (bottom watermark cropped out + seamless shadow blend) */}
      <div className="hero-media" aria-hidden="true">
        <video
          className="hero-video"
          src="/assets/aistudio/hero-golf-trimmed-v2.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        <div className="hero-scrim-side" />
        <div className="hero-scrim-bottom" />
      </div>

      <div className="wrap hero-in">
        <p className="eyebrow reveal-h" style={{ '--d': 0 } as CSSProperties}>
          News · Instruction · Gear · Travel
        </p>
        <h1 className="reveal-h" style={{ '--d': 120 } as CSSProperties}>
          Every great round <em>starts here.</em>
        </h1>
        <p className="lead reveal-h" style={{ '--d': 260 } as CSSProperties}>
          Tour news, lessons from the Top 100 Teachers, honest gear advice and the world&apos;s best
          courses, all in one place.
        </p>
        <div className="cta reveal-h" style={{ '--d': 380 } as CSSProperties}>
          <a className="btn lime" href="#travel">
            Explore Top 100 Courses
          </a>
          <a className="btn ghost" href="#membership">
            Join InsideGOLF
          </a>
        </div>
        <ul className="hstats reveal-h" style={{ '--d': 520 } as CSSProperties}>
          <li>
            <b>100</b>
            <span>Top Courses</span>
          </li>
          <li>
            <b>100</b>
            <span>Top Teachers</span>
          </li>
          <li>
            <b>600+</b>
            <span>Magazine issues</span>
          </li>
        </ul>
      </div>

      <a className="scroll" href="#marq" aria-label="Scroll down" />
    </section>
  );
}
