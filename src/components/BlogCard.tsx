import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import type { CollectionEntry } from 'astro:content';

interface Props {
  post: CollectionEntry<'blog'>;
  index: number;
}

const accentVars = [
  { card: 'dt-card-accent', eyebrow: 'dt-eyebrow',        color: 'var(--dt-accent)' },
  { card: 'dt-card-red',    eyebrow: 'dt-eyebrow-red',    color: 'var(--dt-red)'    },
  { card: 'dt-card-green',  eyebrow: 'dt-eyebrow-green',  color: 'var(--dt-green)'  },
  { card: 'dt-card-orange', eyebrow: 'dt-eyebrow-orange', color: 'var(--dt-orange)' },
];

const BlogCard = ({ post, index }: Props) => {
  const { title, description, date, tags, thumbnail, readTime } = post.data;
  const postUrl = `/blog/${post.slug}/`;
  const accent = accentVars[index % accentVars.length];

  const formatDate = (dateValue: Date) => {
    return new Date(dateValue).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      timeZone: 'UTC',
    });
  };

  return (
    <motion.article
      className={`dt-card ${accent.card} flex flex-col h-full overflow-hidden`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Thumbnail */}
      <a
        href={postUrl}
        className="relative block overflow-hidden border-b"
        style={{ aspectRatio: '16/9', borderColor: 'var(--dt-border)', background: 'var(--dt-bg)' }}
      >
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover block transition-transform duration-500 hover:scale-[1.03]"
            style={{ filter: 'brightness(0.85)' }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="dt-eyebrow-muted" style={{ opacity: 0.2 }}>No Image</span>
          </div>
        )}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(10,10,15,0.4), transparent)' }}
        />
      </a>

      {/* Content */}
      <div className="p-6 flex flex-col grow">

        {/* Date */}
        <time className="dt-mono mb-3 block">{formatDate(date)}</time>

        {/* Title */}
        <h2 className="dt-display mb-2" style={{ fontSize: '20px', lineHeight: 1.3 }}>
          <a href={postUrl} style={{ textDecoration: 'none', color: 'inherit' }}>
            {title}
          </a>
        </h2>

        {/* Description */}
        <p className="dt-body mb-4" style={{ fontSize: '13px' }}>
          {description}
        </p>

        <div className="grow" />

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {tags.map((tag: string) => (
              <span key={tag} className="dt-tag">{tag}</span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div
          className="flex items-center justify-between pt-4"
          style={{ borderTop: '1px solid var(--dt-border)' }}
        >
          <span className="dt-mono flex items-center gap-1.5">
            <Clock size={12} />
            {readTime || '5 min read'}
          </span>

          <a
            href={postUrl}
            className="dt-read-more"
            style={{ opacity: 0.8, color: accent.color }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.8'; }}
          >
            Read post <ArrowRight size={12} />
          </a>
        </div>

      </div>
    </motion.article>
  );
};

export default BlogCard;