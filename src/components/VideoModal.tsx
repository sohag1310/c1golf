import Hls from 'hls.js';
import { useEffect, useRef, useState } from 'react';
import type { VideoItem } from '../data/golfData';

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
}

export function VideoModal({ video, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [streamError, setStreamError] = useState(false);

  useEffect(() => {
    if (!video) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [video, onClose]);

  useEffect(() => {
    const el = videoRef.current;
    setStreamError(false);
    if (!video || !el) return;

    let hls: Hls | null = null;
    if (Hls.isSupported()) {
      hls = new Hls({ enableWorker: true });
      hls.loadSource(video.streamUrl);
      hls.attachMedia(el);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        el.play().catch(() => {});
      });
      hls.on(Hls.Events.ERROR, (_event, data) => {
        if (data.fatal) {
          if (data.type === Hls.ErrorTypes.MEDIA_ERROR) {
            hls?.recoverMediaError();
          } else {
            setStreamError(true);
            hls?.destroy();
          }
        }
      });
    } else if (el.canPlayType('application/vnd.apple.mpegurl')) {
      el.src = video.streamUrl;
      el.play().catch(() => {});
    } else {
      setStreamError(true);
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
      el.pause();
      el.removeAttribute('src');
      el.load();
    };
  }, [video]);

  if (!video) return null;

  return (
    <div
      className="vmodal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="vmodal-box">
        <div className="vmodal-head">
          <div>
            <span className="tag" style={{ color: 'var(--lime)' }}>
              GOLF Video · {video.duration}
            </span>
            <h3>{video.title}</h3>
          </div>
          <button
            type="button"
            className="dclose"
            aria-label="Close video player"
            onClick={onClose}
          >
            ×
          </button>
        </div>
        {streamError ? (
          <div className="vmodal-fallback">
            <p>This video stream couldn&apos;t load in your current browser or network.</p>
            <a
              className="btn lime sm"
              href="https://golf.com/video/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch on GOLF.com →
            </a>
          </div>
        ) : (
          <div className="vmodal-player">
            <video
              ref={videoRef}
              controls
              playsInline
              poster={video.img}
              preload="metadata"
              onError={() => setStreamError(true)}
            />
          </div>
        )}
        {video.description ? <p className="vmodal-desc">{video.description}</p> : null}
      </div>
    </div>
  );
}
