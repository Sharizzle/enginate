import styled from "styled-components";

export const Nav = styled.nav`
  height: 85px;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  transition: 0.1s ease-out;
  box-sizing: border-box;
`;
export const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  padding: 0px 25px;
  align-self: center;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  background-color: ${({ prop }) => (prop ? "#2d2e2e" : "transparent")};
  box-shadow: ${({ prop }) =>
    prop ? "0px 0px 59px 26px rgba(0,0,0,0.2)" : null};
  border-radius: 0px 0px 10px 10px;
  transition: 0.2s linear;
  @media (max-width: 900px) {
    justify-content: flex-start;
    width: 100%;
    border-radius: 0px;
  }
`;
export const LinkWrap = styled.ul`
  align-self: center;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 350px;
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const NavLink = styled.li`
  box-sizing: border-box;
  align-self: center;
  min-width: 20px;
  text-align: center;
  font-family: "Raleway", sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({ prop }) => (prop ? "white" : "black")};
  padding-bottom: 5px;
  transition: 0.2s ease;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  :hover {
    border-bottom: ${({ prop }) =>
      prop ? "2px solid white" : "2px solid black"};
  }
`;

export const Hamburger = styled.div`
  visibility: hidden;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  align-self: center;
  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    background-color: ${({ prop }) => (prop ? "white" : "black")};

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
    @media (max-width: 900px) {
      visibility: visible;
    }
  }
`;

export const SideNav = styled.nav`
  visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${({ open }) => (open ? "#333333" : "transparent")};
  text-align: left;
  padding: 20px 20px 0px 20px;
  position: fixed;
  top: 150px;
  left: 0;
  min-width: 40%;
  transition: 0.2s ease-in-out;
  box-shadow: ${({ open }) =>
    open ? "0px 0px 20px -2px rgba(0, 0, 0, 0.2)" : null};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-110%)")};
  border-radius: 0 15px 15px 0px;
  @media (max-width: 900px) {
    visibility: visible;
  }
  @media (max-width: 500px) {
    padding: 20px 20px 0 20px;
    width: 80%;
  }
`;

// export const SideNavItem = styled.div`
//   box-sizing: border-box;
//   font-size: 1.4rem;
//   color: white;
//   text-decoration: none;
//   font-family: "Raleway", sans-serif;
//   padding: 7px;
//   background-color: #616161;
//   border-radius: 5px;
//   margin-bottom: 20px;
//   @media (max-width: 500px) {
//     padding: 1rem;
//     font-size: 1.2rem;
//     padding: 10px;
//   }
// `;

export const SideNavItem = styled.div`
  box-sizing: border-box;
  font-size: 1.4rem;
  color: white;
  text-decoration: none;
  font-family: "Raleway", sans-serif;
  padding: 0px 10px;
  border-left: 2px solid white;
  margin-bottom: 20px;
  @media (max-width: 500px) {
    padding: 1rem;
    font-size: 1.2rem;
    padding: 10px;
  }
`;