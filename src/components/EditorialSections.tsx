import { useEffect, useState, type CSSProperties, type FormEvent } from 'react';
import {
  CATS,
  COLS,
  COURSE_FINDER_IMG,
  FAVS,
  GEAR,
  GSER,
  INSIDE_GOLF_COLLAGE_IMG,
  INST,
  ISER,
  LIFE,
  MARQ,
  NEWS,
  PODS,
  RANK,
  SHOWS,
  TRAVEL,
  VIDS,
  type NewsItem,
  type SeriesItem,
  type VideoItem,
} from '../data/golfData';

function StoryCard({ item, index }: { item: NewsItem; index: number }) {
  return (
    <article
      className={`card reveal${item.f ? ' feat' : ''}`}
      style={{ '--d': `${(index % 4) * 80}ms` } as CSSProperties}
    >
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="thumb"
      >
        <img src={item.img} alt={item.t} loading={index < 2 ? 'eager' : 'lazy'} />
        {item.lock ? <span className="lock">Insiders only</span> : null}
      </a>
      <div className="meta">
        <span className="tag">{item.tag}</span>
        <h3>
          <a href={item.href} target="_blank" rel="noopener noreferrer">
            {item.t}
          </a>
        </h3>
        {item.ex ? <p className="ex">{item.ex}</p> : null}
        <p className="by">{item.by || 'By GOLF Staff'}</p>
      </div>
    </article>
  );
}

function SeriesGrid({ items }: { items: SeriesItem[] }) {
  return (
    <div className="series">
      {items.map((ser, i) => (
        <a
          key={ser.title}
          href={ser.href}
          target="_blank"
          rel="noopener noreferrer"
          className="ser reveal"
          style={{ '--d': `${i * 50}ms` } as CSSProperties}
        >
          <b>{ser.title}</b>
          <span>{ser.subtitle}</span>
        </a>
      ))}
    </div>
  );
}

export function MarqueeBanner() {
  const repeated = [...MARQ, ...MARQ, ...MARQ, ...MARQ];
  return (
    <div className="marq" id="marq" aria-hidden="true">
      <div className="mt">
        {repeated.map((label, idx) => (
          <span key={idx}>{label}</span>
        ))}
      </div>
    </div>
  );
}

export function NewsSection() {
  return (
    <section id="news" className="golf-section">
      <div className="wrap">
        <div className="sh reveal">
          <div>
            <p className="k">News</p>
            <h2>The stories shaping the game</h2>
          </div>
          <a
            className="more"
            href="https://golf.com/news/"
            target="_blank"
            rel="noopener noreferrer"
          >
            All news →
          </a>
        </div>
        <div className="grid-cards g-news">
          {NEWS.map((item, i) => (
            <StoryCard key={item.t} item={item} index={i} />
          ))}
        </div>
        <h3 className="fh reveal">Reader favorites</h3>
        <ol className="favs">
          {FAVS.map((fav, i) => (
            <li
              key={fav.title}
              className="fav reveal"
              style={{ '--d': `${i * 70}ms` } as CSSProperties}
            >
              <b>{String(i + 1).padStart(2, '0')}</b>
              <a href={fav.href} target="_blank" rel="noopener noreferrer">
                {fav.title}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function InstructionSection() {
  const keys = Object.keys(INST);
  const [activeTab, setActiveTab] = useState(keys[0]);

  useEffect(() => {
    const onSelectTab = (e: Event) => {
      const detail = (e as CustomEvent<{ section: string; tab: string }>).detail;
      if (detail?.section === 'instruction' && detail.tab in INST) {
        setActiveTab(detail.tab);
      }
    };
    window.addEventListener('golf:select-tab', onSelectTab);
    return () => window.removeEventListener('golf:select-tab', onSelectTab);
  }, []);

  return (
    <section id="instruction" className="golf-section dark">
      <div className="wrap">
        <div className="sh reveal">
          <div>
            <p className="k">Instruction</p>
            <h2>Lower scores, from the best teachers in golf</h2>
          </div>
          <a
            className="more"
            href="https://golf.com/instruction/"
            target="_blank"
            rel="noopener noreferrer"
          >
            All instruction →
          </a>
        </div>
        <div className="tabs">
          {keys.map((k) => (
            <button
              key={k}
              type="button"
              className={`tab${activeTab === k ? ' on' : ''}`}
              onClick={() => setActiveTab(k)}
            >
              {k}
            </button>
          ))}
        </div>
        <div className="grid-cards g-4">
          {INST[activeTab].map((article, i) => (
            <article
              key={`${activeTab}-${article.title}`}
              className="card fade"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <a
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="thumb"
              >
                <img src={article.img} alt={article.title} loading="lazy" />
                {i === 2 ? <span className="lock">Insiders only</span> : null}
              </a>
              <div className="meta">
                <span className="tag">{activeTab}</span>
                <h3>
                  <a
                    href={article.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {article.title}
                  </a>
                </h3>
                <p className="by">By {article.author || 'GOLF Staff'}</p>
              </div>
            </article>
          ))}
        </div>
        <SeriesGrid items={ISER} />
      </div>
    </section>
  );
}

export function GearSection() {
  const keys = Object.keys(GEAR);
  const [activeTab, setActiveTab] = useState(keys[0]);

  useEffect(() => {
    const onSelectTab = (e: Event) => {
      const detail = (e as CustomEvent<{ section: string; tab: string }>).detail;
      if (detail?.section === 'gear' && detail.tab in GEAR) {
        setActiveTab(detail.tab);
      }
    };
    window.addEventListener('golf:select-tab', onSelectTab);
    return () => window.removeEventListener('golf:select-tab', onSelectTab);
  }, []);

  return (
    <section id="gear" className="golf-section light">
      <div className="wrap">
        <div className="sh reveal">
          <div>
            <p className="k">Gear</p>
            <h2>Find the clubs that fit your game</h2>
          </div>
          <a
            className="more"
            href="https://golf.com/gear/"
            target="_blank"
            rel="noopener noreferrer"
          >
            All gear →
          </a>
        </div>
        <div className="tabs">
          {keys.map((k) => (
            <button
              key={k}
              type="button"
              className={`tab${activeTab === k ? ' on' : ''}`}
              onClick={() => setActiveTab(k)}
            >
              {k}
            </button>
          ))}
        </div>
        <div className="grid-cards g-4">
          {GEAR[activeTab].map((article, i) => (
            <article
              key={`${activeTab}-${article.title}`}
              className="card fade"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <a
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="thumb"
              >
                <img src={article.img} alt={article.title} loading="lazy" />
              </a>
              <div className="meta">
                <span className="tag">{activeTab}</span>
                <h3>
                  <a
                    href={article.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {article.title}
                  </a>
                </h3>
                <p className="by">By {article.author || 'GOLF Staff'}</p>
              </div>
            </article>
          ))}
        </div>
        <SeriesGrid items={GSER} />
      </div>
    </section>
  );
}

export function VideosPodcastsSection({
  onSelectVideo,
}: {
  onSelectVideo: (video: VideoItem) => void;
}) {
  return (
    <section id="videos" className="golf-section dark">
      <div className="wrap">
        <div className="sh reveal">
          <div>
            <p className="k">Videos &amp; Podcasts</p>
            <h2>Watch, listen, learn</h2>
          </div>
          <a
            className="more"
            href="https://golf.com/video/"
            target="_blank"
            rel="noopener noreferrer"
          >
            All videos →
          </a>
        </div>
        <div className="rail">
          {VIDS.map((vid) => (
            <article key={vid.key} className="vid">
              <button
                type="button"
                className="thumb"
                style={{ width: '100%', textAlign: 'left' }}
                aria-label={`Play video: ${vid.title}`}
                onClick={() => onSelectVideo(vid)}
              >
                <img src={vid.img} alt={vid.title} loading="lazy" />
                <span className="play" />
                <span className="dur">{vid.duration}</span>
              </button>
              <h3>
                <button
                  type="button"
                  style={{ textAlign: 'left' }}
                  onClick={() => onSelectVideo(vid)}
                >
                  {vid.title}
                </button>
              </h3>
              <p className="by">GOLF Video</p>
            </article>
          ))}
        </div>
        <div className="tabs tabs-shows">
          {SHOWS.map((show) => (
            <a
              key={show.label}
              href={show.href}
              target="_blank"
              rel="noopener noreferrer"
              className="tab"
              style={{ opacity: 0.85 }}
            >
              {show.label}
            </a>
          ))}
        </div>
        <div className="pods">
          {PODS.map((pod, i) => (
            <div
              key={pod.name}
              className="pod reveal"
              style={{ '--d': `${i * 100}ms` } as CSSProperties}
            >
              <div className="cov">
                <img src={pod.img} alt={pod.name} loading="lazy" />
              </div>
              <div>
                <h3>{pod.name}</h3>
                <p>{pod.description}</p>
                <div className="row">
                  <a
                    href={pod.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn lime sm"
                  >
                    <span className="eq">
                      <i />
                      <i />
                      <i />
                    </span>
                    {pod.primaryCta}
                  </a>
                  <a
                    href={pod.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn ghost sm"
                  >
                    {pod.secondaryCta}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TravelSection() {
  const rankKeys = Object.keys(RANK);
  const [activeRegion, setActiveRegion] = useState(rankKeys[0]);
  const [courseQuery, setCourseQuery] = useState('');
  const [submittedCourseQuery, setSubmittedCourseQuery] = useState('');

  const finderMatches = submittedCourseQuery
    ? (() => {
        const q = submittedCourseQuery.toLowerCase();
        const seen = new Set<string>();
        const list: { name: string; region: string; listName: string; href: string }[] = [];
        for (const [listName, entries] of Object.entries(RANK)) {
          for (const c of entries) {
            if (
              !seen.has(c.name) &&
              (c.name.toLowerCase().includes(q) ||
                c.region.toLowerCase().includes(q) ||
                listName.toLowerCase().includes(q))
            ) {
              seen.add(c.name);
              list.push({ ...c, listName });
            }
          }
        }
        return list.slice(0, 4);
      })()
    : [];

  const handleFinderSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = courseQuery.trim();
    if (!trimmed) return;
    setSubmittedCourseQuery(trimmed);
  };

  return (
    <section id="travel" className="golf-section cream light">
      <div className="wrap">
        <div className="sh reveal">
          <div>
            <p className="k">Travel</p>
            <h2>The world&apos;s best courses, ranked</h2>
          </div>
          <a
            className="more"
            href="https://golf.com/travel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            All travel →
          </a>
        </div>
        <div className="tv">
          <div className="reveal">
            <div className="tabs">
              {rankKeys.map((k) => (
                <button
                  key={k}
                  type="button"
                  className={`tab${activeRegion === k ? ' on' : ''}`}
                  onClick={() => setActiveRegion(k)}
                >
                  {k}
                </button>
              ))}
            </div>
            <ol className="rank">
              {RANK[activeRegion].map((course, i) => (
                <li
                  key={`${activeRegion}-${course.name}`}
                  className="fade"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <b>{i + 1}</b>
                  <div>
                    <h4>
                      <a
                        href={course.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {course.name}
                      </a>
                    </h4>
                    <span>{course.region}</span>
                  </div>
                  <a
                    href={course.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="arr"
                    aria-label={course.name}
                  >
                    →
                  </a>
                </li>
              ))}
            </ol>
            <p className="by" style={{ marginTop: '14px' }}>
              Official GOLF Top 100 Courses rankings.
            </p>
          </div>
          <div className="finder reveal" style={{ '--d': '120ms' } as CSSProperties}>
            <div className="map">
              <img
                src={COURSE_FINDER_IMG}
                alt="GOLF Course Finder map"
                className="map-bg-img"
                loading="lazy"
              />
              <span className="pin" style={{ left: '22%', top: '24%' }} />
              <span
                className="pin"
                style={{ left: '48%', top: '38%', '--pd': '0.6s' } as CSSProperties}
              />
              <span
                className="pin"
                style={{ left: '70%', top: '22%', '--pd': '1.2s' } as CSSProperties}
              />
              <span
                className="pin"
                style={{ left: '62%', top: '58%', '--pd': '0.3s' } as CSSProperties}
              />
              <span
                className="pin"
                style={{ left: '30%', top: '52%', '--pd': '1.5s' } as CSSProperties}
              />
              <span
                className="pin"
                style={{ left: '82%', top: '46%', '--pd': '0.9s' } as CSSProperties}
              />
            </div>
            <p
              className="k"
              style={{
                color: 'var(--lime)',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
              }}
            >
              Course Finder
            </p>
            <h3>Find a course near you or your next trip</h3>
            <p>
              Browse courses worldwide, explore the Top 100 on the map, then book a tee time.
            </p>
            <form className="fs" onSubmit={handleFinderSubmit}>
              <input
                type="text"
                placeholder="City, course or region"
                aria-label="Find a course"
                value={courseQuery}
                onChange={(e) => {
                  setCourseQuery(e.target.value);
                  if (!e.target.value.trim()) setSubmittedCourseQuery('');
                }}
              />
              <button className="btn dark sm" type="submit">
                Search
              </button>
            </form>
            {submittedCourseQuery && (
              <div className="finder-results">
                <div className="finder-results-head">
                  <span>
                    {finderMatches.length
                      ? `Matches for "${submittedCourseQuery}"`
                      : `No ranked courses found for "${submittedCourseQuery}"`}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setCourseQuery('');
                      setSubmittedCourseQuery('');
                    }}
                  >
                    Clear
                  </button>
                </div>
                {finderMatches.length ? (
                  <ul>
                    {finderMatches.map((c) => (
                      <li key={`${c.listName}-${c.name}`}>
                        <a href={c.href} target="_blank" rel="noopener noreferrer">
                          <b>{c.name}</b>
                          <span>
                            {c.region} · {c.listName}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <a
                    className="finder-browse"
                    href="https://golf.com/travel/top-100-golf-courses-us/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Browse all GOLF Top 100 Courses →
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="grid-cards g-3 travel-cards">
          {TRAVEL.map((item, i) => (
            <StoryCard key={item.t} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function LifestyleSection() {
  return (
    <section id="lifestyle" className="golf-section">
      <div className="wrap">
        <div className="sh reveal">
          <div>
            <p className="k">Lifestyle</p>
            <h2>Life beyond the 18th green</h2>
          </div>
          <a
            className="more"
            href="https://golf.com/lifestyle/"
            target="_blank"
            rel="noopener noreferrer"
          >
            All lifestyle →
          </a>
        </div>
        <div className="mos">
          {LIFE.map((tile, i) => (
            <a
              key={tile.title}
              href={tile.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`tile reveal${tile.big ? ' big' : ''}`}
              style={{ '--d': `${i * 70}ms` } as CSSProperties}
            >
              <img src={tile.img} alt={tile.title} loading="lazy" />
              <div>
                <b>{tile.title}</b>
                <span>{tile.subtitle}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ShopSection() {
  return (
    <section id="shop" className="golf-section dark">
      <div className="wrap shop">
        <div className="reveal">
          <p
            className="k"
            style={{
              color: 'var(--lime)',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            Shop
          </p>
          <h2>
            Gear up with <em>editor picks</em>
          </h2>
          <p>
            Clubs, shafts, training aids, balls, bags and apparel, curated by our editors and
            tested by our fitters.
          </p>
          <a
            className="btn lime"
            href="https://fairwayjockey.com?utm_source=golfcom&utm_medium=homepage&utm_campaign=shop-navigation"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shop all
          </a>
          <div className="cats">
            {CATS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="chip"
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>
        <div className="cols">
          {COLS.map((col, i) => (
            <a
              key={col.title}
              href={col.href}
              target="_blank"
              rel="noopener noreferrer"
              className="col reveal"
              style={{ '--d': `${i * 90}ms` } as CSSProperties}
            >
              <span className="im">
                <img src={col.img} alt={col.title} loading="lazy" />
              </span>
              <div className="t">
                <b>{col.title}</b>
                <span>{col.subtitle}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MembershipSection() {
  return (
    <section id="membership" className="golf-section cream light">
      <div className="wrap">
        <div className="sh reveal" style={{ justifyContent: 'center', textAlign: 'center' }}>
          <div>
            <p className="k">InsideGOLF</p>
            <h2 style={{ marginInline: 'auto' }}>Join the club. Play the game better.</h2>
            <div
              style={{
                marginTop: '24px',
                maxWidth: '560px',
                marginInline: 'auto',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(12, 31, 23, 0.14)',
              }}
            >
              <img
                src={INSIDE_GOLF_COLLAGE_IMG}
                alt="InsideGOLF Premium member benefits"
                style={{ width: '100%', height: 'auto', display: 'block' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="plans">
          <article className="plan reveal">
            <h3>InsideGOLF</h3>
            <div className="pr">
              $39.99<small> / year</small>
            </div>
            <p className="val">$140+ in value across 16 benefits</p>
            <h5>Free stuff</h5>
            <ul>
              <li>1 dozen golf balls</li>
              <li>$20 shop credit</li>
              <li>1-year GOLF Magazine</li>
            </ul>
            <h5>Exclusive content</h5>
            <ul>
              <li>Ad-free GOLF.com</li>
              <li>50+ Insiders-only stories monthly</li>
              <li>600+ issue digital archive</li>
              <li>Weekly insider newsletters</li>
            </ul>
            <a
              className="btn dark"
              href="https://golf.com/insidegolf/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Subscribe or give
            </a>
          </article>
          <article className="plan best reveal" style={{ '--d': '120ms' } as CSSProperties}>
            <span className="ribbon">Best value</span>
            <h3>InsideGOLF Premium</h3>
            <div className="pr">
              $89.88<small> / year</small>
            </div>
            <p className="val">$375+ in value across 20 benefits</p>
            <h5>Everything in InsideGOLF, plus</h5>
            <ul>
              <li>$75 Johnnie-O gift certificate</li>
              <li>1-year GolfLogix app subscription</li>
              <li>Bushnell Green Book + leather cover</li>
            </ul>
            <h5>$500+ in discounts</h5>
            <ul>
              <li>Free True Spec fitting with club purchase</li>
              <li>$100 off qualifying shop purchases</li>
              <li>50% off Green Books &amp; GolfLogix</li>
            </ul>
            <a
              className="btn lime"
              href="https://golf.com/insidegolf/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Subscribe or give
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

const NEWSLETTER_OPTIONS = [
  'Top Stories',
  'Play Smart',
  'Our Picks',
  'Hot Mic',
  'Monday Finish',
];

export function NewsletterSection() {
  const [selected, setSelected] = useState<string[]>(['Top Stories']);
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState<string | null>(null);

  const toggleTopic = (topic: string) => {
    setFeedback(null);
    setSelected((prev) =>
      prev.includes(topic) ? prev.filter((item) => item !== topic) : [...prev, topic]
    );
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!selected.length) {
      setFeedback('Please select at least one newsletter.');
      return;
    }
    setFeedback(`You're in for ${selected.join(', ')}! Check your inbox to confirm.`);
    setEmail('');
  };

  return (
    <section
      id="newsletter"
      className="golf-section"
      style={{ paddingBlock: 'clamp(50px,7vw,90px)' }}
    >
      <div className="wrap">
        <div className="nl reveal">
          <div>
            <h2>Get the best of GOLF in your inbox</h2>
            <p>
              Tour news, instruction tips, new gear and media insider reports. Choose your
              favorites.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="nlc">
              {NEWSLETTER_OPTIONS.map((topic) => (
                <label key={topic}>
                  <input
                    type="checkbox"
                    checked={selected.includes(topic)}
                    onChange={() => toggleTopic(topic)}
                  />
                  <span>{topic}</span>
                </label>
              ))}
            </div>
            <div className="nlr">
              <input
                type="email"
                placeholder="Your email address"
                required
                aria-label="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (feedback) setFeedback(null);
                }}
              />
              <button className="btn dark sm" type="submit">
                Sign up
              </button>
            </div>
            {feedback && <p className="ok">{feedback}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="golf-footer">
      <div className="wrap">
        <div className="fg">
          <div>
            <a className="logo" href="#top">
              GOLF
            </a>
            <p className="sm">
              News, instruction, gear and travel for golfers who love the game.
            </p>
            <div className="soc">
              <a
                href="https://www.facebook.com/golf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="https://www.x.com/golf_com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                X
              </a>
              <a
                href="https://www.instagram.com/golf_com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                ig
              </a>
              <a
                href="https://www.youtube.com/channel/UCzdMqRWzdF0JUJRIVa-dgDw"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                ▶
              </a>
            </div>
          </div>
          <div>
            <h6>Categories</h6>
            <ul>
              <li>
                <a href="#news">News</a>
              </li>
              <li>
                <a href="#instruction">Instruction</a>
              </li>
              <li>
                <a href="#gear">Gear</a>
              </li>
              <li>
                <a href="#lifestyle">Lifestyle</a>
              </li>
              <li>
                <a href="#travel">Travel</a>
              </li>
            </ul>
          </div>
          <div>
            <h6>Services</h6>
            <ul>
              <li>
                <a href="https://golf.com/masthead/" target="_blank" rel="noopener noreferrer">
                  Masthead
                </a>
              </li>
              <li>
                <a href="https://golf.com/media-kit/" target="_blank" rel="noopener noreferrer">
                  GOLF Media Kit
                </a>
              </li>
              <li>
                <a href="https://golf.com/customer-service/" target="_blank" rel="noopener noreferrer">
                  Magazine Customer Service
                </a>
              </li>
              <li>
                <a href="#newsletter">Newsletters</a>
              </li>
            </ul>
          </div>
          <div>
            <h6>Legal</h6>
            <ul>
              <li>
                <a href="https://golf.com/terms-of-service/" target="_blank" rel="noopener noreferrer">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="https://golf.com/privacy-policy/" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://golf.com/privacy-policy/" target="_blank" rel="noopener noreferrer">
                  Opt-out of Sale/Share or Targeted Advertising
                </a>
              </li>
              <li>
                <a href="https://golf.com/privacy-policy/" target="_blank" rel="noopener noreferrer">
                  Your Privacy Choices
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="legal">
          <span>GOLF.com — News, Instruction, Equipment, Courses, Travel.</span>
          <span>If you buy a linked product, we may earn a fee. Pricing may vary.</span>
        </div>
      </div>
    </footer>
  );
}
