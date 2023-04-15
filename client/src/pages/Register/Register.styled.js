import styled from "styled-components";

export const AuthPageWrapper = styled.div`
  border: 1px solid red;

  display: flex;
  flex-direction: row;

  height: calc(100vh - 80px);

  .left-content {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 150px;
  }
  .right-content {
    display: flex;
    width: 50%;

    background: url("https://images.unsplash.com/photo-1604076913837-52ab5629fba9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80")
      no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
`;
