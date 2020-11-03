import React from 'react'

import PropTypes from 'prop-types'

import { Wrapper, Content } from './styled'

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Content>
        {children}
      </Content>
    </Wrapper>
  )
}

AuthLayout.propTypes = { children: PropTypes.oneOfType([PropTypes.any]).isRequired }
