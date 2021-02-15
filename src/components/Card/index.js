import styled from 'styled-components';

export default styled.div`
  border-radius: 10px;
  box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.08);
  border: 0;
  background-color: #fff;

  .card-body {
    flex: 1 1 auto;
    padding: 1.25rem;
  }

  .card-title {
    padding: 0.75rem 1.25rem;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    color: #332e38;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    border-color: rgba(0, 0, 0, 0.03);
  }

  .card-header {
    border-color: rgba(0, 0, 0, 0.03);
    padding: 0.75rem 1.25rem;
    margin-bottom: 0;
    background-color: rgba(0, 0, 0, 0.03);
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    &:first-child {
      border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
    }
  }
`;
