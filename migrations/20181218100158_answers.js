
exports.up = function(knex, Promise) {
	return knex.schema.createTable('answers', (answer) => {
		answer.increments('id');
		answer.string('answer');
		answer.integer('upvotes');
		answer.integer('downvotes');
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('answers')
};
