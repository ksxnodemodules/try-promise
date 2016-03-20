
((module) => {
	'use strict';

	var handlePromise = (fn, args) => (resolve, reject) => {
		try {
			resolve(fn(...args));
		} catch (error) {
			reject(error);
		}
	};

	class Try extends Promise {

		constructor(...args) {
			super(handlePromise(...args));
		}

		static try(...args) {
			return new Try(...args);
		}

	}

	module.exports = class extends Try {};

})(module);
