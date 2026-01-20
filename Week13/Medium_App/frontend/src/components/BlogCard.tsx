import React from "react";
import { Link } from "react-router-dom";

interface BlogCardProps {
    id: number;
  avatarSrc: string;
  author: string;
  date: string;
  title: string;
  description: string;
  category: string;
  readTime: number;
  imageSrc: string;
}

const BlogCard: React.FC<BlogCardProps> = ({id, avatarSrc, author, date, title, description, category, readTime, imageSrc }) => {

  return (<Link to={`/blog/${id}`}>
    
    <div className="flex p-4 rounded-lg  w-full max-w-2xl border-b-1 border-slate-400 cursor-pointer">
      {/* Left Section: Blog Content */}
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <Avatar src={avatarSrc} alt={author} />
          <AuthorInfo author={author} date={date} />
        </div>
        <BlogTitle title={title} />
        <BlogDescription description={description} />
        <BlogMeta category={category} readTime={readTime} />
      </div>

      {/* Right Section: Blog Image */}
      <BlogImage imageSrc={imageSrc} />
    </div>
    </Link>
  );
};

export default BlogCard;

// Avatar Component
interface AvatarProps {
  src: string;
  alt: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} className="w-8 h-8 rounded-full" />;
};

// Author Info
interface AuthorInfoProps {
  author: string;
  date: string;
}

export const AuthorInfo: React.FC<AuthorInfoProps> = ({ author, date }) => {
 
  return (
    <div className="text-sm text-gray-600 flex items-center gap-1">
      <span className="font-semibold">{author}</span> • <span>{date}</span>
      {/* <span className="text-yellow-500">⭐ Member-only</span> */}
    </div>
  );
};

// Blog Title
interface BlogTitleProps {
  title: string;
}

export const BlogTitle: React.FC<BlogTitleProps> = ({ title }) => {
  return <h2 className="text-lg font-bold text-gray-900 mb-2">{title}</h2>;
};

// Blog Description
interface BlogDescriptionProps {
  description: string;
}

export const BlogDescription: React.FC<BlogDescriptionProps> = ({ description }) => {
  return <p className="text-gray-600 text-sm mb-3">{description}</p>;
};

// Blog Meta
interface BlogMetaProps {
  category: string;
  readTime: number;
}

export const BlogMeta: React.FC<BlogMetaProps> = ({ category, readTime }) => {
  return (
    <div className="text-sm flex gap-2 items-center">
      <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded">{category}</span>
      <span>{readTime} min read</span>
    </div>
  );
};

// Blog Image
interface BlogImageProps {
  imageSrc: string;
}

export const BlogImage: React.FC<BlogImageProps> = ({ imageSrc }) => {
  return (
    <div className="ml-4">
      <img src={imageSrc} alt="Blog" className="w-32 h-41 object-cover rounded-lg" />
    </div>
  );
};
