import { useCallback, useState } from 'react';
import {
  Facebook,
  Linkedin,
  Link45deg,
  TwitterX,
  Whatsapp,
} from 'react-bootstrap-icons';

function buildShareUrls(url, title, description) {
  const enc = encodeURIComponent;
  const waText = description ? `${title} — ${description} ${url}` : `${title} ${url}`;
  return {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${enc(url)}&text=${enc(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`,
    whatsapp: `https://wa.me/?text=${enc(waText)}`,
  };
}

/**
 * Accessible share buttons with correct share URLs and optional native Web Share.
 */
export function SocialShareBar({
  url,
  title,
  description = '',
  className = '',
  variant = 'light',
}) {
  const [copied, setCopied] = useState(false);
  const share = buildShareUrls(url, title, description);

  const onCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = url;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  }, [url]);

  const onNativeShare = useCallback(async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, text: description || title, url });
      } catch {
        /* user cancelled */
      }
    }
  }, [title, description, url]);

  const mod = variant === 'dark' ? ' social-share--dark' : '';
  const canNativeShare =
    typeof navigator !== 'undefined' && typeof navigator.share === 'function';

  return (
    <div className={`social-share${mod} ${className}`.trim()} role="group" aria-label="Share this page">
      <span className="social-share__label">Share</span>
      <div className="social-share__btns">
        {canNativeShare ? (
          <button
            type="button"
            className="social-share__btn social-share__btn--native"
            onClick={onNativeShare}
            aria-label="Share using device"
          >
            Share
          </button>
        ) : null}
        <a
          href={share.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="social-share__btn"
          aria-label="Share on Facebook"
        >
          <Facebook aria-hidden />
        </a>
        <a
          href={share.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="social-share__btn"
          aria-label="Share on X (Twitter)"
        >
          <TwitterX aria-hidden />
        </a>
        <a
          href={share.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="social-share__btn"
          aria-label="Share on LinkedIn"
        >
          <Linkedin aria-hidden />
        </a>
        <a
          href={share.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="social-share__btn"
          aria-label="Share on WhatsApp"
        >
          <Whatsapp aria-hidden />
        </a>
        <button
          type="button"
          className="social-share__btn"
          onClick={onCopy}
          aria-label="Copy link"
        >
          <Link45deg aria-hidden />
        </button>
      </div>
      {copied ? (
        <span className="social-share__toast" role="status">
          Link copied
        </span>
      ) : null}
    </div>
  );
}

export default SocialShareBar;
