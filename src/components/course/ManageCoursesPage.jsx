import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from "./CourseForm";
import {withRouter} from 'react-router-dom';

class ManageCoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: Object.assign({}, props.course),
            errors: {}
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.course.id != nextProps.course.id) {
            this.setState({course: Object.assign({}, nextProps.course)});
        }
    }

    updateCourseState(event) {
        const field = event.target.name;
        let course = this.state.course;
        course[field] = event.target.value;
        return this.setState({
            course: course
        });
    }

    saveCourse(event) {
        event.preventDefault();
        this.props.actions.saveCourse(this.state.course);
        this.props.history.push('/courses');
    }

    render() {
        return (
            <CourseForm
                course={this.state.course}
                errors={this.state.errors}
                allAuthors={this.props.authors}
                onChange={this.updateCourseState}
                onSave={this.saveCourse}
            />
        );
    }
}

ManageCoursesPage.propTypes = {
    course: PropTypes.object.isRequired,
    errors: PropTypes.object,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func
    })
};

const getCourseById = (courses, id) => {
    const course = courses.filter(c => c.id === id);
    if (course) return course[0];
    return null;
};

const mapStateToProps = (state, ownProps) => {

    const courseId = ownProps.match.params.id;

    let course = {id: "", title: "", watchHref: "", authorId: "", length: "", category: ""};

    if (courseId && state.courses.length > 0) {
        course = getCourseById(state.courses, courseId);
    }

    const authorsFormattedForDropdown = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        };
    });

    return {
        course: course,
        authors: authorsFormattedForDropdown
    };
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(courseActions, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ManageCoursesPage));