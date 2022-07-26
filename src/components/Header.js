import React, { useState } from "react"
import BurgerNavSidebar from "./BurgerNavSidebar"
import { Menu } from "@mui/icons-material"
import { selectCars } from "../features/car/carSlice"
import styled from "styled-components"
import { useSelector } from "react-redux"
import { Link } from "react-scroll"

const Header = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false)
  const sideToggleHandler = () => {
    setSidebarToggle((prevState) => !prevState)
  }

  const carsArray = useSelector(selectCars)
  const carsMenuList =
    carsArray &&
    carsArray.map((car, index) => (
      <li key={index}>
        <Link
          to={`${index}-carSection`}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          {car}
        </Link>
      </li>
    ))

  return (
    <Container>
      <Link to="/" style={{ cursor: "pointer" }}>
        <img src="images/logo.svg" alt="logo" />
      </Link>
      <CenterMenu>{carsMenuList}</CenterMenu>
      <RightMenu>
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          <Link to="/">Tesla Account</Link>
        </li>
        <li>
          <CustomMenu onClick={sideToggleHandler} />
        </li>
      </RightMenu>

      <BurgerNavSidebar
        isSidebarShown={sidebarToggle}
        onSidebarToggle={sideToggleHandler}
      />
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  // width: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
`

const CenterMenu = styled.ul`
  display: flex;
  justify-content: center;
  font-weight: 600;
  flex: 1;
  li {
    list-style: none;
    padding: 0 20px;
  }
  li > a {
    text-transform: uppercase;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const RightMenu = styled(CenterMenu)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: unset;
  li {
    padding: 0 5px;
  }
  li > a {
    @media (max-width: 768px) {
      padding: 0 5px;
      font-size: 12px;
    }
  }
`

const CustomMenu = styled(Menu)`
  position: relative;
  top: 2px;
  cursor: pointer;
`
