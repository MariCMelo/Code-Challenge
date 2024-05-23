import styled from "styled-components";

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

  const Input = styled.input`
  width: 70%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  text-align: left;
`;


export default WallForm;