import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './ResearchStyles';

const data = [
  {number:2021, text: 'Mass Converted from the Energy of Motion',},
  {number:2021, text: 'Higher Multiplicative Series', },
  {number:2022, text: 'Special Series Search [Under-Work]', },
//   { text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Researches</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
