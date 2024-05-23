export const errors = {
    invalidAreaError: {
      type: 'invalidAreaError',
      message: 'Alguma das paredes tem área inválida. As paredes devem ter entre 1 e 50 metros quadrados.'
    },
    invalidDoorWindowAreaError: {
      type: 'invalidDoorWindowAreaError',
      message: 'O total da área das portas e janelas excede 50% da área da parede. Por favor, verifique e ajuste as dimensões das portas e janelas.'
    },
    invalidWallHeightError: {
      type: 'invalidWallHeightError',
      message: 'A altura das paredes com portas deve ser pelo menos 30 centímetros maior do que a altura da porta.'
    }
  };