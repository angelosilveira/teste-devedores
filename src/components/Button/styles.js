import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { darken } from 'polished';

export const Container = styled(Button)`
  height: 33px;
  width: auto;
  display: inline-block;
  font-weight: 400;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: #06aed5;
  border: 1px solid #06aed5;
  padding: 0.375rem 0.75rem;
  font-size: 0.813rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:hover,
  &:focus {
    background-color: ${darken(0.05, '#06aed5')};
    border-color: ${darken(0.05, '#06aed5')};
    box-shadow: 0 8px 25px -8px ${darken(0.05, '#06aed5')};
  }

  &.danger {
    background-color: #f44336;
    border-color: #f44336;

    &:hover,
    &:focus {
      background-color: ${darken(0.05, '#f44336')};
      border-color: ${darken(0.05, '#f44336')};
      box-shadow: 0 8px 25px -8px ${darken(0.05, '#f44336')};
    }
  }
`;
