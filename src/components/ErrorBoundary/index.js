import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log("getDerivedStateFromError", error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("ComponentDidCatch", { error, errorInfo });
  }

  render() {
    if (this.state.hasError) <h1>Something went wrong</h1>;
    return this.props.children;
  }
}
