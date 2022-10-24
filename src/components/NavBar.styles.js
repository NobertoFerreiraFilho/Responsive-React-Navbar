import styled from "styled-components";

export const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  background: linear-gradient(45deg, rgb(10, 10, 10), rgb(20, 20, 100));
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  max-width: 1660px;
`;

export const Logo = styled.img`
  height: 80%;
  margin: 2rem;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;

  a{
    text-decoration: none;
    width: 100%;
  }
  
  .list {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
    padding: 0rem;
  }

  .items {
    margin: 0 0.5rem;
    font-size: 0.95rem;
    font-weight: bold;
    text-transform: uppercase;
    color: #f1f1f1;
    cursor: pointer;

    :hover{
        scale: 0.95;
        color: rgba(220,220,220,0.7);
    }
  }

  @media screen and (max-width: 500px) {
    .list {
      flex-direction: column;
      height: auto;
      background: linear-gradient(90deg, rgb(10, 10, 10), rgb(20, 20, 100));
      position: absolute;
      left: 0rem;
      top: 30px;

    }

    a:nth-child(1) {
      margin-top: 1rem;
    }
    .items {
      width: 100%;
      border-top: 1px solid rgba(255, 255, 255, 0.555);
      text-align: center;
      padding: 15px 0;
    }
  }
`;

export const BtnMenu = styled.button`
  display: none;
  position: absolute;
  right: 5px;
  padding: 5px;
  margin: 1rem;
  color: #000;
  background-color: rgba(20, 20, 100, 0.2);
  border: none;

  @media screen and (max-width: 500px) {
    display: block;
  }
`;