import { createStitches } from '@stitches/react';
import { colors } from './foundations';

export const { styled } = createStitches({
  theme: {
    colors,
  },
  media: {
    bp1: '(min-width: 480px)',
  },
  utils: {
    marginX: (value: string) => ({ marginLeft: value, marginRight: value }),
  },
});
