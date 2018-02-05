import * as React from 'react';

interface ReadoutProps {
  title: string;
  elapsed: number;
  duration: number;
}

export default ({title, elapsed, duration}: ReadoutProps) => (
  <div>
    <h4>{title}</h4>
    <time>{elapsed}/{duration}</time>
  </div>
);
