import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

const Started = () => (
  <div>
    <Head title="Getting Started" />
    <Nav />

    <div className="hero">
      <h1 className="title">Get Started</h1>
      <h2 className="description">
        Here are some things to help get you started:
      </h2>
      <p className="description">
        This app was built on top of&nbsp;
        <Link href="https://nextjs.org">
          <a target="_blank">Next.js</a>
        </Link>
      </p>
    </div>

    <style jsx>{`
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

export default Started
