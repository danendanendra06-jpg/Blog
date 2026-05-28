import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TechEthics | Professional Tech Blog',
  description: 'A professional tech blog exploring ethics in technology and self-development.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} d-flex flex-column min-vh-100 bg-light`}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
          <div className="container">
            <a className="navbar-brand fw-bold" href="/">TechEthics.</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#articles">Articles</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#about">About</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main className="flex-grow-1">
          {children}
        </main>

        <footer className="bg-dark text-white text-center py-4 mt-auto">
          <div className="container">
            <h5 className="fw-bold mb-3">TechEthics.</h5>
            <div className="mb-3">
              <a href="#" className="text-white me-3 fs-5"><i className="fab fa-github"></i></a>
              <a href="#" className="text-white me-3 fs-5"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white fs-5"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <p className="mb-0 text-muted small">&copy; 2026 TechEthics Blog. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
