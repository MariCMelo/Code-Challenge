import { useState } from "react";
import StyledButton from "./StyledButton";
import styled from "styled-components";
import { calculate } from "../utils/calculate";


const CalculatorForm = () => {
    const [formData, setFormData] = useState({
      A: { height: 0, length: 0, window: 0, door: 0 },
      B: { height: 0, length: 0, window: 0, door: 0 },
      C: { height: 0, length: 0, window: 0, door: 0 },
      D: { height: 0, length: 0, window: 0, door: 0 }
    });
  
    const handleChange = (e, wall) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [wall]: {
          ...formData[wall],
          [name]: value
        }
      });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("Dados do formulário:", formData);
      const result = calculate(formData);
    renderResult(result);
      // Adicione aqui a lógica para processar o envio do formulário
    };
    const renderResult = (result) => {
        const resultElement = document.getElementById('result');
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
            <StyledButton type="submit">Enviar</StyledButton>
          </Form>
        </FormContainer>
      );
    };
  
    const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

  const WallForm = ({ wall, formData, onChange }) => {
    return (
      <div>
        <h2>Parede {wall}</h2>
        <label>
          Altura:
          <Input
            type="number"
            name="height"
            value={formData[wall].height}
            onChange={(e) => onChange(e, wall)}
          />
          Largura:
          <Input
            type="number"
            name="length"
            value={formData[wall].length}
            onChange={(e) => onChange(e, wall)}
          />
          Número de Janelas:
          <Input
            type="number"
            name="window"
            value={formData[wall].window}
            onChange={(e) => onChange(e, wall)}
          />
          Número de Portas:
          <Input
            type="number"
            name="door"
            value={formData[wall].door}
            onChange={(e) => onChange(e, wall)}
          />
        </label>
      </div>
    );
  };
  
const FormContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  justify-content: left;
`;

const Form = styled.form`
  background-color: #f9f9f9;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const Input = styled.input`
  width: 70%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  text-align: left;
`;

export default CalculatorForm;
