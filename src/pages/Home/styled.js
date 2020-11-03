import styled from 'styled-components'

import { colors } from '~/themes'

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.h1`
  font-size: 24px;
  color: ${colors.GREY_ONE};
  font-family: Arial, Helvetica, sans-serif;
`
