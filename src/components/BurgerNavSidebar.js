import React from "react"
import { Close } from "@mui/icons-material/"
import { selectCars } from "../features/car/carSlice"
import { useSelector } from "react-redux"
import { Link } from "react-scroll"
import styled from "styled-components"

const BurgerNavSidebar = (props) => {
  const carsArray = useSelector(selectCars)
  const carsList =
    carsArray &&
    carsArray.map((car, index) => (
      <li key={index}>
        <Link
          to={`${index}-carSection`}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onClick={props.onSidebarToggle}
        >
          {car}
        </Link>
      </li>
    ))

  return (
    <SidebarInner sidebarStatus={props.isSidebarShown}>
      <ul>
        <CloseIconWrap onClick={props.onSidebarToggle}>
          <CloseSidebarIcon />
        </CloseIconWrap>
        {carsList}
      </ul>
    </SidebarInner>
  )
}

export default BurgerNavSidebar

const SidebarInner = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  width: 300px;
  padding: 20px;
  z-index: 10;
  transform: ${(props) =>
    props.sidebarStatus ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease-in-out;

  li {
    text-align: left;
    list-style: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    :first-child {
      padding: 0;
      border: none;
    }
    a {
      font-weight: 600;
      padding: 15px 0;
      display: block;
      cursor: pointer;
    }
  }
`

const CloseSidebarIcon = styled(Close)`
  cursor: pointer;
`

const CloseIconWrap = styled.li`
  display: flex;
  justify-content: flex-end;
`
