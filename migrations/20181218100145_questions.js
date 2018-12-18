
exports.up = function(knex, Promise) {
	return knex.shema.createTable('questions', (question) => {
		question.increments('id');
		question.string('question');
		question.string('tag');
		question.string('company');
		question.string('interviewer');
		question.integer('upvotes');
		question.integer('downvotes');
	})

};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('questions')
};
