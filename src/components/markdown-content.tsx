import { Children, isValidElement } from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

type MediaProps = {
  src?: string;
  alt?: string;
};

const AUDIO = /\.(mp3|ogg|wav|m4a|aac)(\?|#|$)/i;
const VIDEO = /\.(mp4|webm|ogv|mov)(\?|#|$)/i;

function youtubeId(src: string): string | null {
  try {
    const url = new URL(src);
    if (url.hostname === "youtu.be" || url.hostname === "www.youtu.be") {
      return url.pathname.slice(1) || null;
    }
    if (
      url.hostname === "youtube.com" ||
      url.hostname === "www.youtube.com" ||
      url.hostname === "m.youtube.com"
    ) {
      if (url.pathname.startsWith("/embed/")) {
        return url.pathname.split("/")[2] || null;
      }
      if (url.pathname.startsWith("/shorts/")) {
        return url.pathname.split("/")[2] || null;
      }
      return url.searchParams.get("v");
    }
  } catch {
    return null;
  }
  return null;
}

function vimeoId(src: string): string | null {
  try {
    const url = new URL(src);
    if (url.hostname === "vimeo.com" || url.hostname === "www.vimeo.com") {
      const id = url.pathname.split("/").filter(Boolean)[0];
      return id && /^\d+$/.test(id) ? id : null;
    }
  } catch {
    return null;
  }
  return null;
}

function Caption({ text }: { text?: string }) {
  if (!text) {
    return null;
  }

  return (
    <figcaption className="mt-2 text-center text-sm text-ink/60">
      {text}
    </figcaption>
  );
}

function Media({ src, alt }: MediaProps) {
  if (!src) {
    return null;
  }

  const yt = youtubeId(src);
  if (yt) {
    return (
      <figure>
        <div className="aspect-video overflow-hidden rounded-xl bg-ink/10">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${yt}`}
            title={alt || "YouTube"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
        <Caption text={alt} />
      </figure>
    );
  }

  const vimeo = vimeoId(src);
  if (vimeo) {
    return (
      <figure>
        <div className="aspect-video overflow-hidden rounded-xl bg-ink/10">
          <iframe
            src={`https://player.vimeo.com/video/${vimeo}`}
            title={alt || "Vimeo"}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
        <Caption text={alt} />
      </figure>
    );
  }

  if (AUDIO.test(src)) {
    return (
      <figure>
        <audio controls preload="metadata" src={src} className="w-full">
          Tu navegador no reproduce audio.
        </audio>
        <Caption text={alt} />
      </figure>
    );
  }

  if (VIDEO.test(src)) {
    return (
      <figure>
        <video
          controls
          preload="metadata"
          src={src}
          className="w-full rounded-xl"
        >
          Tu navegador no reproduce video.
        </video>
        <Caption text={alt} />
      </figure>
    );
  }

  return (
    <figure>
      <img src={src} alt={alt || ""} className="rounded-xl" />
      <Caption text={alt} />
    </figure>
  );
}

export function MarkdownContent({ content }: { content: string }) {
  return (
    <div className="prose prose-lg mt-8 max-w-none text-ink prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-ink prose-a:text-sea prose-a:no-underline hover:prose-a:text-sage prose-strong:text-ink prose-blockquote:border-sage prose-blockquote:text-ink/80 prose-hr:border-mist prose-li:marker:text-sage">
      <Markdown
        rehypePlugins={[rehypeRaw]}
        components={{
          p: ({ children }) => {
            const items = Children.toArray(children);
            if (
              items.length === 1 &&
              isValidElement(items[0]) &&
              items[0].type === Media
            ) {
              return items[0];
            }
            return <p>{children}</p>;
          },
          img: ({ src, alt }) => (
            <Media
              src={typeof src === "string" ? src : undefined}
              alt={alt}
            />
          ),
          audio: ({ src, children }) => (
            <audio
              controls
              preload="metadata"
              src={typeof src === "string" ? src : undefined}
              className="w-full"
            >
              {children}
            </audio>
          ),
          video: ({ src, children }) => (
            <video
              controls
              preload="metadata"
              src={typeof src === "string" ? src : undefined}
              className="w-full rounded-xl"
            >
              {children}
            </video>
          ),
        }}
      >
        {content}
      </Markdown>
    </div>
  );
}
