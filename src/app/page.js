"use client";

import { articles } from '../lib/data';
import Link from 'next/link';

export default function Home() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="py-5 bg-white border-bottom">
        <div className="container py-5 text-center">
          <h1 className="display-4 fw-bold text-dark mb-4">
            Mastering Code & <span className="text-primary">Mindset</span>
          </h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
            Exploring the vital intersection between ethics in technology, modern industry perspectives, and continuous self-improvement.
          </p>
          <div className="mt-5">
            <a href="#articles" className="btn btn-primary btn-lg px-4 me-3">Read Articles</a>
            <a href="#about" className="btn btn-outline-secondary btn-lg px-4">Learn More</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 bg-light">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              {/* Replace placeholder with an abstract shape or simple professional div */}
              <div className="bg-white rounded shadow-sm p-5 text-center h-100 d-flex flex-column justify-content-center border">
                <i className="fa-solid fa-code text-primary mb-3" style={{ fontSize: '4rem' }}></i>
                <h3 className="fw-bold">Building with Conscience</h3>
              </div>
            </div>
            <div className="col-lg-6 px-lg-5">
              <h2 className="fw-bold mb-4">The Vision Behind <span className="text-primary">TechEthics</span></h2>
              <p className="text-muted fs-5">
                In a world driven by rapid technological advancements, the lines between what we can build and what we should build often blur. This blog serves as a beacon for modern developers aiming to build a solid foundation.
              </p>
              <p className="text-muted fs-5">
                From understanding deep industry shifts to focusing on personal growth and the continuous honing of skills, we delve into topics that matter. It's not just about writing code; it's about evolving as a professional and a human being.
              </p>
              <a href="#contact" className="btn btn-outline-primary mt-3">Get in Touch</a>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="py-5 bg-white border-top border-bottom">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Latest <span className="text-primary">Articles</span></h2>
            <div className="mx-auto bg-primary" style={{ height: '4px', width: '60px', borderRadius: '2px' }}></div>
          </div>
          
          <div className="row g-4">
            {articles.map((article) => (
              <div className="col-md-4" key={article.id}>
                <div className="card h-100 border-0 shadow-sm blog-card">
                  <div className="card-body d-flex flex-column p-4">
                    <span className="badge bg-primary bg-opacity-10 text-primary mb-3 align-self-start px-3 py-2 rounded-pill">
                      {article.tag}
                    </span>
                    <Link href={`/articles/${article.slug}`} className="text-decoration-none">
                      <h4 className="card-title fw-bold text-dark mb-3 hover-primary">{article.title}</h4>
                    </Link>
                    <p className="card-text text-muted mb-4 flex-grow-1">
                      {article.description}
                    </p>
                    <Link href={`/articles/${article.slug}`} className="text-primary fw-semibold text-decoration-none mt-auto">
                      Read Article <i className="fa-solid fa-arrow-right ms-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-light">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="text-center mb-5">
                <h2 className="fw-bold">Reach <span className="text-primary">Out</span></h2>
                <p className="text-muted">Have a question or want to collaborate? Send a message.</p>
              </div>
              <div className="card border-0 shadow-sm p-4 p-md-5">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-semibold">Your Name</label>
                    <input type="text" className="form-control form-control-lg bg-light" id="name" placeholder="John Doe" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-semibold">Your Email</label>
                    <input type="email" className="form-control form-control-lg bg-light" id="email" placeholder="john@example.com" required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="form-label fw-semibold">Your Message</label>
                    <textarea className="form-control form-control-lg bg-light" id="message" rows="4" placeholder="How can we help you?" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg w-100 fw-bold">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
