export const errors = {
    invalidAreaError: {
      type: 'invalidAreaError',
      message: 'Alguma das paredes possui uma área inválida. As paredes devem ter entre 1m² e 50m².'
    },
    invalidDoorWindowAreaError: {
      type: 'invalidDoorWindowAreaError',
      message: 'O total da área das portas e janelas excede 50% da área da parede. Por favor, verifique e ajuste as dimensões das portas e janelas, se necessário.'
    },
    invalidWallHeightError: {
      type: 'invalidWallHeightError',
      message: 'A altura das paredes com portas deve ser pelo menos 30cm maior do que a altura da porta.'
    }
  };