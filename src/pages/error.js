import React from 'react'
import Link from '../../src/router/link'
import Footer from '../components/footer'
import Header from '../components/header'
import './error.css'

export default class AppError extends React.Component {
  render() {
    return (
      <section className="error-page">
        <Header isSmall={true} />
        <div className="site-content">
          <div className="texts">
            <p className="texts-large p-no-margin-bottom">There's <span className="four-zero-four">404</span> reasons on why you shouldn't be here</p>
            <p className="texts-large p-no-margin-top p-no-margin-bottom">But I'll let it pass for now.</p>
            <p className="texts-large p-no-margin-top">In the meantime, you should head to the <Link to="/">main website</Link>.</p>
          </div>
        </div>
        <Footer />
      </section>
    )
  }
}