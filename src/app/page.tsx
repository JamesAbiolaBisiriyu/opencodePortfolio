import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import portrait from "@/content/myPicture.jpeg";

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-copy">
            <p className="hero-eyebrow">
              {site.location} <span aria-hidden="true">·</span> {site.availability}
            </p>
            <h1 className="hero-title">James Abiola Bisiriyu</h1>
            <p className="hero-role">Full-stack developer based in Lagos</p>
            <p className="hero-tagline">
              I build modern web products that help small businesses and startups move forward.
            </p>
            <div className="hero-actions">
              <Link className="hero-button hero-button-primary" href="/projects">
                View my work
              </Link>
              <Link className="hero-button hero-button-secondary" href="/contact">
                Contact me
              </Link>
            </div>
          </div>

          <div className="hero-portrait-wrap">
            <div className="hero-portrait-frame">
              <Image
                className="hero-portrait"
                src={portrait}
                alt="Portrait of James Abiola Bisiriyu"
                width={1086}
                height={1450}
                priority
                sizes="(max-width: 767px) calc(100vw - 3rem), (max-width: 1152px) 42vw, 480px"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
