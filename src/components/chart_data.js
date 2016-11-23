import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default function({ data, color = 'red' }) {
  return (
    <Sparklines height={120} width={180} data={data}>
      <SparklinesLine color={color} />
    </Sparklines>
  );
}