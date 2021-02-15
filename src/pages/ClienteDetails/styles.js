import styled from 'styled-components';

export const DividatList = styled.div`
  .btn-edit,
  .btn-delete {
    font-size: 18px;
  }

  .btn-edit {
    text-decoration: none;
    color: #4caf50;
    margin-right: 5px;
  }

  .btn-delete {
    color: #f44336;
  }
`;

export const Profile = styled.div`
  .avatar {
    text-align: center;

    .sb-avatar {
      background-color: #ff4d80 !important;
      color: #fff;
    }
    .sb-avatar__text {
      background-color: #ff4d80 !important;
      color: #fff;
    }

    h4 {
      font-weight: 300;
      font-size: 1.2rem;
      border-bottom: 1px solid #e9e9e9;
      margin-bottom: 5px;
      margin-top: 10px;
      padding-bottom: 5px;
    }
  }

  ul {
    li {
      padding: 5px;
      display: block;

      .label {
        font-weight: bold;
      }
    }
  }
`;
