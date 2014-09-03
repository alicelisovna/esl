/** @jsx React.DOM */

var React = require('react'),
    Sidebar = require('./sidebar.jsx'),
    Content = require('./content.jsx');

module.exports = React.createClass({
    render: function() {
        return (
            <div id="layout" className="pure-g">
                <Sidebar />
                <Content />
            </div>
        );
    }
});