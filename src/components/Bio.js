import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src='https://avatars0.githubusercontent.com/u/1709317?s=460&v=4'
          alt={`Pruthvi P`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          <div>Written by <strong>Pruthvi P</strong> </div>
          <div>Writing code for some time now</div>
        </p>
      </div>
    )
  }
}

export default Bio
