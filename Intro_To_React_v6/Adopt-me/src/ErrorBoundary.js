import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught and error", error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    if (this.state.hasError) {
      return (
        <h1>
          This Listing has an error <Link to="/">Click to go Home</Link>
          or wait five second to redirect
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
