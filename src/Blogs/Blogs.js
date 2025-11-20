import BlogCard from "./Blog-Card/BlogCard";
import "./Blogs.css";

export default function Blog() {
  return (
    <div className="blog-holder">
      <div className="blog-heading">
        <p>Blog & News</p>
        <h3>Read our latest News</h3>
      </div>
      <div>
        <div className="blog-main">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </div>
  );
}
