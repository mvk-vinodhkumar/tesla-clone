import React, { useRef } from "react"
import Section from "./Section"
import styled from "styled-components"

const carsInfo = [
  {
    id: 0,
    title: "Model S",
    description: "Order Online for Touchless Delivery",
    image: "model-s.jpg",
  },
  {
    id: 1,
    title: "Model 3",
    description: "Order Online for Touchless Delivery",
    image: "model-3.jpg",
  },
  {
    id: 2,
    title: "Model X",
    description: "Order Online for Touchless Delivery",
    image: "model-x.jpg",
  },
  {
    id: 3,
    title: "Model Y",
    description: "Order Online for Touchless Delivery",
    image: "model-y.jpg",
  },
]

const Home = React.forwardRef(() => {
  const sectionRef = useRef()
  // const scrollToSection = () => {
  //   sectionRef.current.scrollIntoView({ behavior: "smooth" })
  // }

  const homeCarSectionList = carsInfo.map((car, index) => {
    return (
      <Section
        id={`${index}-carSection`}
        ref={sectionRef}
        key={car.id}
        title={car.title}
        description={car.description}
        image={car.image}
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
        // onSmoothScroll={scrollToSection}
      />
    )
  })

  return <Container>{homeCarSectionList}</Container>
})

export default Home

const Container = styled.div`
  height: 100vh;
`
