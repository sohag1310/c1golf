import { useEffect, useMemo, useRef, useState, type CSSProperties, type FormEvent } from 'react';
import {
  COLS,
  COURSE_FINDER_IMG,
  FAVS,
  GEAR,
  INST,
  LIFE,
  MENU,
  NEWS,
  PODS,
  RANK,
  SINGLES,
  TRAVEL,
  VIDS,
  type VideoItem,
} from '../data/golfData';

interface HeaderAndOverlaysProps {
  scrolled: boolean;
  progress: number;
  onSelectVideo: (video: VideoItem) => void;
  onOverlayChange: (open: boolean) => void;
}

const LIFESTYLE_ITEMS = new Set(['Accessories', 'Celebrities', 'Food', 'Style', 'Betting Advice']);

export function HeaderAndOverlays({
  scrolled,
  progress,
  onSelectVideo,
  onOverlayChange,
}: HeaderAndOverlaysProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [loginStatus, setLoginStatus] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const loginDialogRef = useRef<HTMLDialogElement | null>(null);

  const searchMatches = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    const pool: { title: string; tag: string; img: string; href?: string; video?: VideoItem }[] = [
      ...NEWS.map((n) => ({ title: n.t, tag: `News · ${n.tag}`, img: n.img, href: n.href })),
      ...FAVS.map((f) => ({ title: f.title, tag: 'Reader Favorite', img: f.img, href: f.href })),
      ...Object.entries(INST).flatMap(([k, list]) =>
        list.map((a) => ({ title: a.title, tag: `Instruction · ${k}`, img: a.img, href: a.href }))
      ),
      ...Object.entries(GEAR).flatMap(([k, list]) =>
        list.map((a) => ({ title: a.title, tag: `Gear · ${k}`, img: a.img, href: a.href }))
      ),
      ...VIDS.map((v) => ({ title: v.title, tag: `Video · ${v.duration}`, img: v.img, video: v })),
      ...PODS.map((p) => ({ title: p.name, tag: `Podcast · ${p.description}`, img: p.img, href: p.spotifyUrl })),
      ...Object.entries(RANK).flatMap(([region, list]) =>
        list.map((c) => ({
          title: `${c.name} — ${c.region}`,
          tag: `Top 100 · ${region}`,
          img: COURSE_FINDER_IMG,
          href: c.href,
        }))
      ),
      ...TRAVEL.map((t) => ({ title: t.t, tag: `Travel · ${t.tag}`, img: t.img, href: t.href })),
      ...LIFE.map((l) => ({ title: `${l.title} — ${l.subtitle}`, tag: 'Lifestyle', img: l.img, href: l.href })),
      ...COLS.map((c) => ({ title: c.title, tag: `Shop · ${c.subtitle}`, img: c.img, href: c.href })),
    ];
    const seen = new Set<string>();
    return pool
      .filter((item) => {
        const hit = item.title.toLowerCase().includes(q) || item.tag.toLowerCase().includes(q);
        if (!hit || seen.has(item.title)) return false;
        seen.add(item.title);
        return true;
      })
      .slice(0, 10);
  }, [searchQuery]);

  useEffect(() => {
    onOverlayChange(menuOpen || searchOpen);
  }, [menuOpen, searchOpen, onOverlayChange]);

  useEffect(() => {
    if (searchOpen) {
      const timer = window.setTimeout(() => {
        searchInputRef.current?.focus();
      }, 200);
      return () => window.clearTimeout(timer);
    }
  }, [searchOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setMenuOpen(false);
      }
      const activeTag = document.activeElement?.tagName;
      if (
        e.key === '/' &&
        !loginDialogRef.current?.open &&
        (!activeTag || !/input|textarea/i.test(activeTag))
      ) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const openLogin = () => {
    setLoginStatus(null);
    loginDialogRef.current?.showModal();
  };

  const closeLogin = () => {
    loginDialogRef.current?.close();
  };

  const handleLoginSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoginStatus(`Signed in as ${email}.`);
    setEmail('');
    setPassword('');
    window.setTimeout(() => {
      closeLogin();
      setLoginStatus(null);
    }, 1200);
  };

  let drawerIndex = 0;

  return (
    <>
      <div className="progress" id="progress" style={{ width: `${progress}%` }} />

      {/* ================= HEADER ================= */}
      <header className={`hdr${scrolled ? ' scrolled' : ''}`} id="hdr">
        <div className="promo">
          Black Friday week: InsideGOLF members get a free bonus gift.{' '}
          <a href="#membership">See membership →</a>
        </div>
        <div className="bar">
          <div className="wrap nav">
            <a className="logo" href="#top" aria-label="GOLF home">
              <svg viewBox="0 0 32 32" aria-hidden="true">
                <circle cx="16" cy="16" r="14" fill="#fff" />
                <g fill="#c9d3ce">
                  <circle cx="11" cy="12" r="1.5" />
                  <circle cx="16" cy="9.5" r="1.5" />
                  <circle cx="21" cy="12" r="1.5" />
                  <circle cx="9" cy="17.5" r="1.5" />
                  <circle cx="14" cy="16" r="1.5" />
                  <circle cx="19" cy="17" r="1.5" />
                  <circle cx="23" cy="17.5" r="1.5" />
                  <circle cx="12" cy="22" r="1.5" />
                  <circle cx="17.5" cy="22.5" r="1.5" />
                </g>
              </svg>
              GOLF
            </a>
            <nav className="links" aria-label="Primary">
              <a href="#news">News</a>
              <a href="#instruction">Instruction</a>
              <a href="#gear">Gear</a>
              <a href="#travel">Travel</a>
              <a href="#lifestyle">Lifestyle</a>
              <a href="#shop">Shop</a>
            </nav>
            <div className="tools">
              <button
                type="button"
                className="ibtn"
                aria-label="Search"
                onClick={() => setSearchOpen(true)}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
              </button>
              <button type="button" className="login" onClick={openLogin}>
                Login
              </button>
              <a className="btn lime sm" href="#membership">
                Join Now
              </a>
              <button
                type="button"
                className="burger"
                aria-label="Open menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(true)}
              >
                <span />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ================= DRAWER ================= */}
      <div
        className={`scrim${menuOpen ? ' on' : ''}`}
        onClick={() => setMenuOpen(false)}
      />
      <aside
        className={`drawer${menuOpen ? ' open' : ''}`}
        aria-label="Site menu"
        aria-hidden={!menuOpen}
      >
        <div className="dhead">
          <a className="logo" href="#top" onClick={() => setMenuOpen(false)}>
            GOLF
          </a>
          <button
            type="button"
            className="dclose"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            ×
          </button>
        </div>
        <div className="dbody">
          {MENU.map((g) => {
            const i = drawerIndex++;
            return (
              <details
                key={g.t}
                className="dg d-item"
                style={{ '--i': i } as CSSProperties}
              >
                <summary>
                  {g.t}
                  <i />
                </summary>
                <div className="sub">
                  {g.i.map((item) => {
                    const targetHref =
                      g.h === '#travel' && LIFESTYLE_ITEMS.has(item) ? '#lifestyle' : g.h;
                    return (
                      <a
                        key={item}
                        href={targetHref}
                        onClick={() => {
                          if (g.h === '#instruction' && item in INST) {
                            window.dispatchEvent(
                              new CustomEvent('golf:select-tab', {
                                detail: { section: 'instruction', tab: item },
                              })
                            );
                          } else if (g.h === '#gear' && item in GEAR) {
                            window.dispatchEvent(
                              new CustomEvent('golf:select-tab', {
                                detail: { section: 'gear', tab: item },
                              })
                            );
                          }
                          setMenuOpen(false);
                        }}
                      >
                        {item}
                      </a>
                    );
                  })}
                </div>
              </details>
            );
          })}
          {SINGLES.map(([title, href]) => {
            const i = drawerIndex++;
            return (
              <a
                key={title}
                className="dsingle d-item"
                style={{ '--i': i } as CSSProperties}
                href={href}
                onClick={() => setMenuOpen(false)}
              >
                {title}
                <span>→</span>
              </a>
            );
          })}
        </div>
        <div className="dfoot">
          <a
            className="btn lime sm"
            href="#membership"
            onClick={() => setMenuOpen(false)}
          >
            Join InsideGOLF
          </a>
          <button
            type="button"
            className="btn ghost sm"
            onClick={() => {
              setMenuOpen(false);
              openLogin();
            }}
          >
            Login
          </button>
        </div>
      </aside>

      {/* ================= SEARCH ================= */}
      <div
        className={`search${searchOpen ? ' on' : ''}`}
        role="dialog"
        aria-label="Search"
        aria-hidden={!searchOpen}
      >
        <button
          type="button"
          className="ibtn sclose"
          aria-label="Close search"
          style={{ color: '#fff' }}
          onClick={() => setSearchOpen(false)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M5 5l14 14M19 5 5 19" />
          </svg>
        </button>
        <input
          ref={searchInputRef}
          type="search"
          placeholder="Search golf…"
          autoComplete="off"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery.trim() ? (
          <div className="search-results">
            {searchMatches.length ? (
              searchMatches.map((m, idx) =>
                m.video ? (
                  <button
                    key={`${m.tag}-${m.title}-${idx}`}
                    type="button"
                    className="search-result-item"
                    onClick={() => {
                      setSearchOpen(false);
                      onSelectVideo(m.video!);
                    }}
                  >
                    <img src={m.img} alt={m.title} />
                    <div>
                      <span>{m.tag}</span>
                      <b>{m.title}</b>
                    </div>
                  </button>
                ) : (
                  <a
                    key={`${m.tag}-${m.title}-${idx}`}
                    href={m.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="search-result-item"
                    onClick={() => setSearchOpen(false)}
                  >
                    <img src={m.img} alt={m.title} />
                    <div>
                      <span>{m.tag}</span>
                      <b>{m.title}</b>
                    </div>
                  </a>
                )
              )
            ) : (
              <p style={{ opacity: 0.7 }}>No matching stories or videos found.</p>
            )}
          </div>
        ) : (
          <div className="chips">
            <a
              className="chip"
              href="#instruction"
              onClick={() => setSearchOpen(false)}
            >
              Putting tips
            </a>
            <a
              className="chip"
              href="#gear"
              onClick={() => setSearchOpen(false)}
            >
              Best drivers
            </a>
            <a
              className="chip"
              href="#travel"
              onClick={() => setSearchOpen(false)}
            >
              Top 100 Courses
            </a>
            <a
              className="chip"
              href="#videos"
              onClick={() => setSearchOpen(false)}
            >
              Videos
            </a>
            <a
              className="chip"
              href="#shop"
              onClick={() => setSearchOpen(false)}
            >
              Shop
            </a>
          </div>
        )}
        <small>Press Esc to close</small>
      </div>

      {/* ================= LOGIN MODAL ================= */}
      <dialog
        ref={loginDialogRef}
        className="golf-dialog"
        onClick={(e) => {
          if (e.target === loginDialogRef.current) {
            closeLogin();
          }
        }}
      >
        <button
          type="button"
          className="dialog-close"
          aria-label="Close sign in dialog"
          onClick={closeLogin}
        >
          ×
        </button>
        <h3>Welcome back</h3>
        <p>Sign in to your InsideGOLF account.</p>
        <form onSubmit={handleLoginSubmit}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn dark" type="submit">
            Sign in
          </button>
        </form>
        {loginStatus && (
          <p
            style={{
              margin: '12px 0 0',
              textAlign: 'center',
              fontSize: '14px',
              color: 'var(--fair)',
              fontWeight: 700,
            }}
          >
            {loginStatus}
          </p>
        )}
        <p style={{ margin: '16px 0 0', textAlign: 'center', fontSize: '14px' }}>
          New here?{' '}
          <a
            href="#membership"
            onClick={closeLogin}
            style={{ color: 'var(--fair)', fontWeight: 700 }}
          >
            Join now
          </a>
        </p>
      </dialog>
    </>
  );
}
