import * as React from 'react';
import renderRing from './renderRing';
import './Ring.css';
interface RingProps {
  width: number;
  height: number;
  progress: number;  
  devicePixelRatio: number;
}

interface RingState {
  elapsed: number;
}

export default class Ring extends React.Component<RingProps, RingState> {
  componentWillReceiveProps(nextProps: RingProps) {
    if (nextProps.progress !== this.props.progress) {
      this.drawNewProgress(nextProps.progress);
    }
  }
  drawNewProgress = (progress: number) => {
    if (!!this.context) {
      this.context.strokeStyle = '#999';
      this.context.lineWidth = 1 * this.props.devicePixelRatio;
      renderRing(this.context, this.props.devicePixelRatio, 1);

      this.context.strokeStyle = '#b24d49';
      this.context.lineWidth = 3 * this.props.devicePixelRatio;
      renderRing(this.context, this.props.devicePixelRatio, progress);
    }
  }
  bindContext = (canvas: HTMLCanvasElement) => {
    this.context = canvas.getContext('2d');
    this.drawNewProgress(this.props.progress);
  }
  render() { 
    return (
      <div className="ring" style={{ height: this.props.height }}>
        <canvas
          style={{
            transform: `scale(${1 / this.props.devicePixelRatio})`,
            transformOrigin: '50% 0'
          }}
          width={this.props.width * this.props.devicePixelRatio}
          height={this.props.height * this.props.devicePixelRatio}
          ref={this.bindContext}
        />
      </div>
    );
  } 
}
