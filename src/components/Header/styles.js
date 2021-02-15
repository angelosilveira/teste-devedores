import styled from 'styled-components';
import { device } from '~/styles/device';

export const Container = styled.header`
  position: fixed;
  width: 100%;
  height: 80px;
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.04), 0 1px 6px rgba(0, 0, 0, 0.04);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #fff;
  z-index: 100;

  .header-part-right {
    display: flex;
    align-items: center;
  }

  .logo {
    padding: 20px 10px;
    font-weight: bold;
    font-size: 24px;
    letter-spacing: 2px;
  }

  .notifications {
    position: relative;
    border-radius: 8px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;

    &:hover {
      background: #f8f9fa;
    }

    &:first-child {
    }

    svg {
      font-size: 24px;
      cursor: pointer;
      display: inline-block;
      text-align: center;

      margin: 0 2px;
    }

    span {
      position: absolute;
      top: 2px;
      right: 4px;
      border-radius: 10px;
      font-weight: 600;
      color: #fff;
      background-color: #06aed5;
      display: inline-block;
      padding: 0.25em 0.4em;
      font-size: 10px;
      line-height: 1;
      text-align: center;
      white-space: nowrap;
      vertical-align: baseline;
      border-radius: 50%;
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
  }

  .avatar {
    background-color: #ff4d80 !important;
    margin-right: 10px;
  }

  .menu-toggle {
    display: none;
  }

  @media ${device.maxLG} {
    .menu-toggle {
      font-size: 22px;
      display: block;
    }
  }
`;
