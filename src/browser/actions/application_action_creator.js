var _ = require('lodash'),
    ApplicationConstants = require('../constants/application_constants.js'),
    Dispatcher = require('../dispatcher/dispatcher.js');

module.exports = {
    changePage: function(activePage) {
        Dispatcher.handleViewAction({
            actionType: ApplicationConstants.CHANGE_PAGE,
            activePage: activePage
        });
    }
};

