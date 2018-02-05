import * as React from 'react';

interface ControlsProps {
  playing: boolean;
  togglePlayback: () => void;
}

export default ({playing, togglePlayback}: ControlsProps) => (
  <div>
    <button onClick={togglePlayback}>{playing ? 'Pause' : 'Play'}</button>
  </div>
);
