import React from 'react';
import {NavLink} from 'react-router-dom';
import LoadingDots from "./LoadingDots";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: this.props.loading
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({loading: nextProps.loading});
    }

    render() {
        return (
            <div>
                <nav>
                    <NavLink to="/" exact>Home</NavLink>{" | "}
                    <NavLink to="/courses">Courses</NavLink>{" | "}
                    <NavLink to="/about">About</NavLink>
                </nav>
                {this.state.loading && <LoadingDots interval={200} dots={20}/>}
            </div>
        );
    }

}

Header.defaultProps = {
    loading: false
};

Header.propTypes = {
    loading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({loading: state.ajaxStatus > 0});

export default withRouter(connect(mapStateToProps)(Header));