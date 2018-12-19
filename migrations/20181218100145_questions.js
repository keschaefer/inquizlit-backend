
exports.up = function (knex, Promise) {
	return knex.schema.createTable('questions', (question) => {
		question.increments('id');
		question.string('question');
		question.string('tag');
		question.string('company');
		question.string('interviewer');
		question.integer('upvotes');
		question.integer('downvotes');
		question.integer('user_id').references('id').inTable('users').onDelete('cascade');
	})

};

exports.down = function (knex, Promise) {
	return knex.schema.dropTableIfExists('questions');
};
