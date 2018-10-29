import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />

    <div className="hero">
      <svg className="sr-only">
        <symbol
          id="argos-logo"
          xmlns="http://www.w3.org/2000/svg"
          width="180"
          height="154.3"
          viewBox="0 0 180 154.3"
        >
          <title id="argos-logo-title">Argos logo – link to home page</title>
          <path fill="red" d="M180.2 154.49V.19H-.62v154.3h180.84z" />
          <g transform="translate(291 311.5) scale(.52724)">
            <path
              fill="#fff"
              d="M-382.8-372.24c67.8 0 115.7-26.8 136.2-40.1 3.5-2.2 1.5-5.8-2.3-4.3-52.3 21.5-86.2 29.4-133.9 29.4s-81.6-7.9-133.9-29.4c-3.8-1.5-5.8 2-2.3 4.3 20.6 13.3 68.4 40.1 136.2 40.1"
            />
          </g>
          <path
            fill="#fff"
            d="M139.82 63.4c0 4.74 5.86 6.11 8.86 6.85 1.48.37 4.48 1.1 4.54 3 .1 2.06-2.27 3.17-4.64 3.17-2.48 0-4.06-1-5.43-2.8-.64-.79-1.38-1-2.32-.68-1.11.32-2.32.95-3.48 1.74-.69.47-.95 1.21-.58 2.1 1.9 4.54 6.96 5.97 11.33 5.97 6.9 0 12.92-3 14.4-9.13 1.47-6-3.43-8.22-7.86-9.49-2.9-.84-5.06-1.52-4.9-3.48.15-2.05 4.85-3.37 8.06.37.8.95 1.64 1.06 2.59.69 1-.37 2.63-1.1 3.16-1.48 1.1-.68 1.32-1.32.69-2.48-1.64-2.95-5.65-4.9-10.18-4.9-8.6.1-14.24 4.59-14.24 10.55M44.45 50.94c.15 4.8.63 15.93.63 15.93H33.8c2.53-4.75 6.96-11.6 10.28-15.98.26-.47.37.05.37.05m.52-9.12c-1.84.1-3.37.26-4.8 1.95C35.6 49.2 25.05 65.5 16.72 80.31c-.58 1.05-.16 2.06 1.11 2.06h6.12c1 0 1.68-.21 2.37-1.37.74-1.27 2.53-4.43 4.11-7.12h14.6l.22 6.85c.05 1 .63 1.64 1.95 1.64h5.38s1.74-.43 1.68-1.7a1656 1656 0 0 0-1.95-36.85c-.1-1.47-.84-2.1-2.53-2.1a46.1 46.1 0 0 0-4.8.1m74.8 34.74c5.11 0 7.33-4.22 8.65-8.7 1.26-4.48 1.79-8.7-3.38-8.7s-7.33 4.22-8.6 8.7c-1.36 4.54-1.84 8.7 3.33 8.7zm-.58 6.28c-9.18 0-13.4-6.07-11.55-14.93 1.9-8.85 8.7-14.92 17.88-14.92 9.22 0 13.44 6.07 11.54 14.92-1.84 8.86-8.64 14.93-17.87 14.93m-16.99-3.8a1324.8 1324.8 0 0 0 5.64-22.93c.32-1.42-.53-2.37-1.63-2.37-.8 0-3.11 0-3.85.05-1.27.05-2 .69-2.32 1.74-.05.26-.16.53-.32 1.16-.05.26-.16.26-.26.05-.53-1.05-2.9-3.42-7.01-3.42-7.49 0-12.66 7.22-14.82 13.91-1.37 4.22-1.48 9.07.26 11.7 1.59 2.38 4.12 3.91 8.02 3.96 3.27.06 6.11-1.05 7.54-2.84.16-.21.31-.1.26.1-1.9 6.54-5.9 8.33-9.01 8.33a7.8 7.8 0 0 1-4.27-1.32c-1.16-.68-1.53-.73-2.59-.47-1.16.32-2.53.84-3.64 1.58-1.31.9-1.05 1.8-.58 2.58 2.48 4.01 8.23 5.01 11.6 5.01 8.33 0 14.19-5.74 16.98-16.82zm-17.24-10.9c1.63-5.76 4.43-8.7 8.22-8.6 4.86.15 3.85 4.9 2.8 8.54-1.64 5.53-4.17 8.49-8.12 8.17-4.06-.37-3.8-5.06-2.9-8.12M82.1 55.05c.53-.47.22-1.27-.63-1.27-4.74 0-9.28 0-12.65 3.12-.05.05-.21.05-.16-.11l.37-1.53c.21-.79-.26-1.48-1.16-1.48-1.42 0-2.9 0-4.64.06-1.05 0-1.63.42-1.9 1.58-.52 2.37-4.16 20.3-5.22 25.68-.15.73.48 1.31 1.11 1.31h5.64c1 0 1.53-.47 1.69-1.31a683 683 0 0 0 2.43-12.03c.58-2.95 1.79-5.27 2.95-6.16 1.1-.85 2.63-1.43 5.7-1.59 1.36-.05 1.89-.47 2.63-1.52a22.02 22.02 0 0 1 3.85-4.75"
          />
        </symbol>
      </svg>
      <svg
        className="argos-header__logo"
        width="93.5"
        height="80"
        aria-labelledby="argos-logo-title"
        role="img"
      >
        <use xlinkHref="#argos-logo" width="93.5" height="80" />
      </svg>
      <h1 className="title">Congratulations!</h1>
      <h2 className="description">
        You&apos;ve just created an app with Create Argos App!
      </h2>
      <p className="description">
        To get started, edit <code>pages/index.js</code> and save to reload.
      </p>

      <div className="row">
        <Link href="/started">
          <a className="card">
            <h3>Getting Started &rarr;</h3>
            <p>Learn more about Create Argos App</p>
          </a>
        </Link>
        <Link href="/examples">
          <a className="card">
            <h3>Examples &rarr;</h3>
          </a>
        </Link>
      </div>
    </div>

    <style jsx>{`
      .argos-header__logo {
        margin: 0 auto;
        display: block;
      }
      .sr-only {
        clip: rect(1px, 1px, 1px, 1px);
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
      }
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 20px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
)

export default Home
