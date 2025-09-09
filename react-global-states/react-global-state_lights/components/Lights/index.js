import styled from "styled-components";
import Light from "../Light";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export default function Lights(isOn, handleToggle) {
  return (
    <StyledLights>
      <li>
        <Light name="Living Room" isOn={isOn} handleToggle={handleToggle} />
      </li>
      <li>
        <Light name="Kitchen" isOn={isOn} handleToggle={handleToggle} />
      </li>
      <li>
        <Light name="Bedroom" isOn={isOn} handleToggle={handleToggle} />
      </li>
      <li>
        <Light name="Bathroom" isOn={isOn} handleToggle={handleToggle} />
      </li>
      <li>
        <Light name="Garage" isOn={isOn} handleToggle={handleToggle} />
      </li>
      <li>
        <Light name="Porch" isOn={isOn} handleToggle={handleToggle} />
      </li>
      <li>
        <Light name="Garden" isOn={isOn} handleToggle={handleToggle} />
      </li>
      <li>
        <Light name="Office" isOn={isOn} handleToggle={handleToggle} />
      </li>
    </StyledLights>
  );
}
