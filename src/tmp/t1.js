/**
 * Created by hs on 2018/1/12.
 */
import DrawLayer from './modules/layer/drawLayer';
import Shape from './modules/shape';

class DrawSample {
  constructor() {
    this.layer = new DrawLayer();
    this.shape = new Shape();
  }

  update() {
    console.log('DrawSample update');
    this.layer.update();
  }

  render() {
    console.log('DrawSample render');
    this.layer.render();
  }
}

export default DrawSample;