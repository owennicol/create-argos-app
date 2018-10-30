import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

import './index.scss'

const Started = () => (
  <div>
    <Head title="Getting Started" />
    <Nav />

    <div className="hero">
      <h1 className="h1">Get Started</h1>
      <h2 className="h2 description">
        Here are some things to help get you started:
      </h2>
      <p className="description">
        This app was built on top of&nbsp;
        <Link href="https://nextjs.org">
          <a target="_blank">Next.js</a>
        </Link>
      </p>
    </div>
  </div>
)

export default Started
