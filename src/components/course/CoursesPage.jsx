import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import * as courseActions from "../../actions/courseActions";
import {bindActionCreators} from "redux";
import CourseList from "./CourseList";
import {withRouter} from 'react-router-dom';

class CoursesPage extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    redirectToAddCoursePage() {
        this.props.history.push('/courses/new');
    }

    render() {
        const {courses} = this.props;

        return (
            <div>
                <h1>Courses</h1>
                <input
                    type="submit"
                    value="Add course"
                    className="btn btn-primary"
                    onClick={this.redirectToAddCoursePage}/>
                <CourseList courses={courses}/>
            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func
    })
};

function mapStateToProps(state) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CoursesPage));