import React, { Component } from 'react';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		// Update state so the next render shows the fallback UI.
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		// You can log the error to an error reporting service here
		console.error("Error caught by ErrorBoundary:", error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			// Render any fallback UI
			return <h2>Something went wrong.</h2>;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;