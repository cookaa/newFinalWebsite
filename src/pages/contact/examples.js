import React from 'react'
import Link from 'gatsby-link'
import Layout from '../../components/Layout'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
      <section className="section">
      <div className="container">
      <div className="content">
      <h1>Cart</h1>
      <p>
      Add something to your cart and it will pop up automatically!
      </p>
      </div>
      </div>
      </section>
      </Layout>
    )
  }
}
