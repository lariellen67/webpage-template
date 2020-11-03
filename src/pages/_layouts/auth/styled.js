import { darken } from 'polished'
import styled from 'styled-components'

import { colors } from '~/themes'

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, ${colors.PRIMARY}, ${colors.SECONDARY} );
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: ${colors.GREY_ONE};
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7)
      }
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: ${colors.INFO};
      font-weight: bold;
      color: ${colors.GREY_ONE};
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, colors.INFO)}
      }
    }

    a {
      color: ${colors.GREY_ONE};
      margin-top: 30px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`
