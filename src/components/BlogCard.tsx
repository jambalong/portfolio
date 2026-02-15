import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import type { CollectionEntry } from 'astro:content';

interface Props {
  post: CollectionEntry<'blog'>;
  index: number;
}

const BlogCard = ({ post, index }: Props) => {
  const { title, description, date, tags, thumbnail, readTime } = post.data;
  const postUrl = `/blog/${post.slug}/`;
  
  const formatDate = (dateValue: Date) => {
    const d = new Date(dateValue);
    return d.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      timeZone: 'UTC'
    });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden"
    >
      {/* Thumbnail Container */}
      <a href={postUrl} className="relative aspect-video overflow-hidden border-b border-border/50 bg-muted block">
        {thumbnail ? (
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          /* Placeholder for posts without images to keep layout consistent */
          <div className="w-full h-full flex items-center justify-center bg-muted/30">
             <span className="text-text-muted/20 font-bold italic tracking-tighter text-2xl">No Available Image</span>
          </div>
        )}
        {/* Subtle overlay gradient to image */}
        <div className="absolute inset-0 bg-linear-to-t from-card/40 to-transparent pointer-events-none" />
      </a>

      {/* Card Content (now wrapped in padding) */}
      <div className="p-6 flex flex-col grow">
        <time className="text-sm text-text-muted">
          {formatDate(date)}
        </time>
        
        <h2 className="text-xl font-semibold text-primary mt-2 mb-3 group-hover:text-primary transition-colors">
          <a href={postUrl}>{title}</a>
        </h2>
        
        <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="grow" />
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag: string) => (
            <span 
              key={tag}
              className="text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-secondary/10 text-secondary border border-secondary/20"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <span className="flex items-center gap-1.5 text-xs text-text-muted font-medium">
            <Clock size={14} />
            {readTime || '5 min read'}
          </span>
          <a 
            href={postUrl}
            className="flex items-center gap-1 text-sm font-medium text-secondary hover:text-secondary transition-colors group/link"
          >
            Read More 
            <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;