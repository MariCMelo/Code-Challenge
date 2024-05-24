import { useState } from "react";
import styled from "styled-components";
import StyledButton from "./StyledButton";
import { calculate } from "../utils/calculate";
import WallForm from "./WallForm";

const CalculatorForm = () => {
  const [formData, setFormData] = useState({
    A: { height: 0, length: 0, window: 0, door: 0 },
    B: { height: 0, length: 0, window: 0, door: 0 },
    C: { height: 0, length: 0, window: 0, door: 0 },
    D: { height: 0, length: 0, window: 0, door: 0 },
  });

  const handleChange = (e, wall) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [wall]: {
        ...formData[wall],
        [name]: value,
      },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = calculate(formData);
    renderResult(result);
  };

  const renderResult = (result) => {
    const resultElement = document.getElementById("result");
    resultElement.textContent = result;
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FlexContainer>
          <WallForm wall="A" formData={formData} onChange={handleChange} />
          <WallForm wall="B" formData={formData} onChange={handleChange} />
          <WallForm wall="C" formData={formData} onChange={handleChange} />
          <WallForm wall="D" formData={formData} onChange={handleChange} />
        </FlexContainer>
        <h3 id="result" />
        <StyledButton type="submit">Calcular</StyledButton>
      </Form>
    </FormContainer>
  );
};

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FormContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  justify-content: left;
`;

const Form = styled.form`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default CalculatorForm;
