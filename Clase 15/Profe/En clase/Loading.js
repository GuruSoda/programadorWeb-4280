// @flow

import React from 'react'
import { PropTypes as ptypes } from 'prop-types'

import spinner from './spinner_2x.png'
import errorSpinner from './spinner_2x.png'

const styles = (size: ?number) => ({
  img: {
    width: '100%',
    height: '100%'
  },
  width: size,
  height: size,
  margin: '40px auto'
})

function Loading ({ size = 50, error }: { size?: number, error?: boolean }) {
  return (
    <div
      style={styles(size)}
      className={error ? 'loadingSpinnerError' : 'loadingSpinner'}
    >
      <img
        style={styles().img}
        src={error ? errorSpinner : spinner}
        alt={'spinner'}
      />
    </div>
  )
}

Loading.propTypes = {
  size: ptypes.number,
  error: ptypes.bool
}

export default Loading
