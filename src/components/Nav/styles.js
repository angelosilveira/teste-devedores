import styled, { css } from 'styled-components';
import { device } from '~/styles/device';

export const Container = styled.nav`
  position: fixed;
  top: 80px;
  height: calc(100vh - 80px);
  background: #fff;
  box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.08);
  transition: all 0.24s ease-in-out;
  z-index: 90;
  left: 0;
  overflow: hidden;

  @media ${device.maxLG} {
    ${(props) =>
      props.active
        ? css`
            left: 0;
          `
        : css`
            left: -140px;
          `}
  }

  ul {
    list-style: none;
    text-align: center;
    width: 120px;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  ul li {
    position: relative;
    display: block;
    width: 100%;
    color: #332e38;
    cursor: pointer;
    border-bottom: 1px solid #dee2e6;

    &:hover {
      div {
        color: #06aed5;
      }
    }

    div {
      display: block;
      width: 100%;
      padding: 26px 0;
      color: #47404f;
    }

    svg {
      font-size: 32px;
      height: 32px;
      width: 32px;
      display: block;
      margin: 0 auto 6px;
    }

    span {
      font-size: 13px;
      display: block;
      font-weight: 400;
    }
  }
`;
