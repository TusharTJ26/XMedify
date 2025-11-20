import "./BlogCard.css";

export default function BlogCard() {
  return (
    <div className="blog-card">
      <div className="blog-image">
        <img
          src="./images/Blog/blog-card-image.jpg"
          alt="blog-image"
          width="363.33px"
          height="294.59px"
          style={{ borderRadius: "8px" }}
        />
      </div>

      <div className="blog-sub-heading">
        <p>Medical</p>
        <span>|</span>
        <p>March 31, 2022</p>
      </div>
      <p className="blog-card-heading">
        6 Tips To Protect Your Mental Health When You’re Sick
      </p>
      <div className="blog-card-doctor">
        <img
          className="blog-doctor-image"
          src="./images/Blog/blog-card-doc.jpg"
          alt="blog-doctor"
        />
        <p className="blog-doctor-name">Rebecca Lee</p>
      </div>
    </div>
  );
}
