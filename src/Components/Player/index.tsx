import * as React from 'react';
import Ring from './Ring';
import Controls from './Controls';
import Readout from './Readout';
import './index.css';

interface PlayerProps {
  duration: number;
  title: string;
  width: number;
  height: number;
}

interface PlayerState {
  elapsed: number;
  playing: boolean;
}

export default class Player extends React.Component<PlayerProps, PlayerState> {
  state = { elapsed: 0, playing: false };
  togglePlayback = () => this.setState({ playing: !this.state.playing });
  computeProgress = (elapsed: number, duration: number): number => elapsed / duration;
  render() { 
    return (
      <div>
        <Ring 
          progress={this.computeProgress(this.state.elapsed, this.props.duration)} 
          width={this.props.width} 
          height={this.props.height}
          devicePixelRatio={window.devicePixelRatio}
        />
        <div className="player-inner">
          <Controls playing={this.state.playing} togglePlayback={() => this.togglePlayback()}/>
          <Readout title={this.props.title} duration={this.props.duration} elapsed={this.state.elapsed} />
        </div>
      </div>
    );
  }
}
