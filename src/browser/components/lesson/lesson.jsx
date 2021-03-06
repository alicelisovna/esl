/** @jsx React.DOM */

var React = require('react'),
    bean = require('bean'),
    _ = require('lodash'),
    Lesson,
    CourseStore = require('../../stores/course.js'),
    LessonItem = require('./lesson_item.jsx');

Lesson = React.createClass({
    // getInitialState: function() {
    //     return {
    //         lesson: LessonStore.getLesson() || null,
    //         lessonContents: LessonStore.getLessonContents() || null,
    //         activeLessonContent: LessonStore.getActiveLessonContent() || null
    //     };
    // },
    //
    // componentDidMount: function() {
    //     bean.on(LessonStore, 'changed', this.handleChange);
    // },
    //
    // componentWillUnmount: function() {
    //     bean.off(LessonStore, 'changed', this.handleChange);
    // },
    //
    // handleChange: function() {
    //     this.setState({
    //         lesson: LessonStore.getLesson(),
    //         lessonContents: LessonStore.getLessonContents(),
    //         activeLessonContent: LessonStore.getActiveLessonContent()
    //     });
    // },

    render: function() {
        var lessonIndex = this.props.lessonIndex,
            lesson = CourseStore.getData()[lessonIndex];

        // var lesson = this.state.lesson,
        //     lessonContents = this.state.lessonContents,
        //     activeId = this.state.activeLessonContent.id,
        //     lessonItemComponents;
        //
        if(_.isEmpty(lesson)) {
            return null;
        }

        lessonItemComponents = lesson.items.map(function(item) {
            // var active = (activeId === item.id) ? true : false;
            return <LessonItem key={item.uniqId} item={item} active={false}/>
        });

        return (
            <div className="lesson">
                <h2 className="lesson-name">{lesson.name}</h2>
                {lessonItemComponents}
            </div>
        );
    }
});

module.exports = Lesson;
