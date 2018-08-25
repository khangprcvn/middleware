import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
export default function(ComposedComponent) {
  class Authentication extends Component {
    static propTypes = {
      match: PropTypes.object.isRequired,
      location: PropTypes.object.isRequired,
      history: PropTypes.object.isRequired
    }
    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.history.push('/');
      }
    }
    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.props.history.push('/');
      }
    }
    render() {
      console.log(this.props);
      return <ComposedComponent {...this.props} />
    }
  }
  const mapStateToProps = (state) => ({
    authenticated: state.authenticated
  });

  return connect(mapStateToProps)(withRouter(Authentication));
}

