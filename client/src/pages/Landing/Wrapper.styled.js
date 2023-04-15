import styled from "styled-components";

const Wrapper = styled.main`
  .page {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 10px;
    padding: 10px;
  }

  .page > div {
    text-align: center;
    padding: 20px 0;
    /* font-size: 30px; */
  }

  .main-img img,
  .main-img svg {
    width: 100%;
  }
`;

export default Wrapper;
