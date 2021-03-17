import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';


const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    }

    componentWillMount() {
      this.regInterceptor = axios.interceptors.request.use(req => {
        // does stuff to the request before being sent
        this.setState({error: null});
        // must return req object or it will get stuck
        return req;
      })
      this.resInterceptor = axios.interceptors.response.use(res => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return res;
      }, error => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        this.setState({error: error});
      })
    }
    
    componentWillUnmount(){
      console.log('will unmount', this.regInterceptor, this.resInterceptor)
      axios.interceptors.request.eject(this.regInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    errorConfirmedError = () => {
      this.setState({error: null});
    }

    render() {
      const { props, state } = this;
      return (
        <Aux>
          <Modal 
            show={state.error}
            modalClosed={this.errorConfirmedError}
            >
            {state.error ? state.error.message : null}
          </Modal>
          <WrappedComponent {...props} />
        </Aux>
      )
    }
  }
}

export default withErrorHandler;