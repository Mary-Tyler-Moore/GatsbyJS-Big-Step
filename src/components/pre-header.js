import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  background-color: #205d86;
  margin: 100 auto;
  height: 55px;
  padding-top: 0.8rem;
  font-size: 1.5rem;
  text-align: center;
  font-family: "Roboto", sans-serif;
  letter-spacing: 2px;
  a {
    text-decoration: none;
    color: #fff;
    &:hover {
      color: rgb(243, 235, 222);
    }
  }
  p {
    color: #fff;
  }
`

const PreHeader = () => (
  <Wrapper>
    <p>
      GET HELP <a href="">(912) 226-9094</a>
    </p>
  </Wrapper>
)

export default PreHeader
