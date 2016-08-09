import React, { PropTypes, Component } from 'react';
import { sample } from 'lodash';
import getImages from 'actions/images';
import './style.scss';

const propTypes = {
  children: PropTypes.element,
};

class BackgroundImages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slideshow: false,
      selected: null,
      images: [],
    };
  }

  componentWillMount() {
    getImages()
      .then(images => {
        const mobile = window.outerWidth < 840;
        const responsiveImages = images.map(i => {
          const url = i[mobile ? 'small' : 'large'];
          const img = document.createElement('img');
          img.src = url;

          return url;
        });

        this.setState({
          slideshow: true,
          selected: sample(responsiveImages),
          images: responsiveImages,
        });
      });
  }

  componentWillUpdate(nextProps, nextState) {
    if (!this.state.selected && nextState.selected) {
      const { selected, images } = nextState;
      this.timer = setInterval(() => {
        this.setState({ selected: this.getSampleImage(selected, images) });
      }, 30 * 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  getSampleImage(selected, images) {
    if (images.length < 2) return selected;

    const sortedImage = sample(images);
    if (sortedImage !== selected) return sortedImage;

    return this.getSampleImage(selected, images);
  }

  render() {
    if (this.state.selected === null) {
      return <div>{this.props.children}</div>;
    }

    return (
      <div
        className="background-cover"
        style={{ backgroundImage: `url('${this.state.selected}')` }}
      >
        {this.props.children}
      </div>
    );
  }
}

BackgroundImages.propTypes = propTypes;

export default BackgroundImages;
