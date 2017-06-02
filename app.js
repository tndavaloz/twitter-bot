'use strict';

let Twitter = require('twitter');
let config = require('./config.js');

let twitter = new Twitter(config);

let params = {
	q: '#nodejs',
	count: 10
};

twitter.get('search/tweets', params, function (err, data) {
	if (!err) {
		for (let i = 0; i < 1; i++) {
			console.log(data.statuses[i]);
		}
	} else {
		console.log(err);
	}
});
