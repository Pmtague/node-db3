const db = require('../data/db-config.js');

module.exports = {
	find,
	findById,
	findSteps,
	add,
	update,
	remove
};

function find() {
	return db('schemes');
};

function findById(id) {
	return db('schemes')
			.where({ id })
			.first();
};

function findSteps(id) {
	return db('schemes')
			.join('steps', 'steps.scheme_id', '=', 'schemes.id')
			.where({ scheme_id: id })
			.select('schemes.scheme_name', 'steps.step_number', 'steps.instructions')
			.orderBy('steps.step_number')
			// .then(steps => {
			// 	return steps;
			// });
};

function add(scheme) {
	return db('schemes')
			.insert(scheme)
}

function update(changes, id) {
	return db('schemes')
			.where({id})
			.update(changes)
			// .then(scheme => {
			// 	return scheme;
			// });
};

function remove(id) {
	return db('schemes')
		.where({ id })
		.del()
}