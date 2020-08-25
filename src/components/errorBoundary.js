import { useHistory } from 'react-router-dom';
import { ICONS } from './common/icon';
import React from 'react';
import { Alert } from '../App';

function Error({}) {
  const history = useHistory();
  return (
    <div className="error">
      <Alert
        icon={ICONS.BACK}
        onIconClick={() => history.goBack()}
        status="danger"
        title="Error."
        description="Something broke. Oh well."
      />
    </div>
  );
}

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { error, hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    //logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <Error />;
    }

    return this.props.children;
  }
}
