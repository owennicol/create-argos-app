import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'

import './index.scss'

const Examples = () => (
  <div>
    <Head title="Examples" />
    <Nav />

    <div className="hero">
      <h1 className="title">Examples</h1>
      <h2 className="description">
        Here are some examples of what&apos;s possible
      </h2>
    </div>
  </div>
)

export default Examples
