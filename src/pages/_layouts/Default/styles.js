import styled from 'styled-components';
import { device } from '~/styles/device';

export const Content = styled.main`
  width: calc(100% - 120px);
  min-height: 100vh;
  float: right;
  margin-top: 80px;
  transition: all 0.24s ease-in-out;
  padding: 2rem 2rem 0;
  position: relative;
  background: #fff;

  @media ${device.maxLG} {
    width: 100%;
  }
`;
