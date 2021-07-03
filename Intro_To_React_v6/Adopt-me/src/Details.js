import { Component } from "react";
import { withRouter } from "react-router";

import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

class Details extends Component {
  state = { loading: true, showModal: false };

  async componentDidMount() {
    try {
      const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`);

      if (!res.ok) {
        throw new Error("Id not found");
      }

      const { pets } = await res.json();

      this.setState({
        loading: false,
        ...pets[0],
      });
    } catch (error) {
      console.warn(error);
    }
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  adoptHandle = () => (window.location = "http://bit.ly/pet-adopt");

  render() {
    if (this.state.loading) {
      return <h2>Loading...</h2>;
    }

    const { name, description, animal, breed, city, state, images, showModal } = this.state;

    return (
      <div className="details">
        <Carousel>{images}</Carousel>
        <div>
          <h2>Hi</h2>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {`${city}, ${state}`}
          </h2>

          <ThemeContext.Consumer>
            {([theme]) => {
              return (
                <button onClick={this.toggleModal} style={{ backgroundColor: theme }}>
                  Adopt {name}
                </button>
              );
            }}
          </ThemeContext.Consumer>

          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Whould you like to adopt {name}?</h1>
                <div className="buttons">
                  <button onClick={this.adoptHandle}>YES</button>
                  <button onClick={this.toggleModal}>NO</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

const DetailsWithRouter = withRouter(Details);

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <DetailsWithRouter {...props} />
    </ErrorBoundary>
  );
}
