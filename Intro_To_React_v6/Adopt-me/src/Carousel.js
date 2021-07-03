import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleClickindex = ({ target }) => {
    const { idx } = target.dataset;

    this.setState({ active: Number(idx) });
  };

  render() {
    console.log(this.props);

    const { active } = this.state;
    const images = this.props.children;

    return (
      <div>
        <div className="carousel">
          <img src={images[active]} alt="animal" />
          <div className="carousel-smaller">
            {images.map((img, i) => (
              // eslint-disable-next-line
              <img
                key={img}
                src={img}
                onClick={this.handleClickindex}
                data-idx={i}
                className={i === active ? "active" : ""}
                alt="animal thumbnail"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
