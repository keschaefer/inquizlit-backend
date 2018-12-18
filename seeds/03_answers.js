
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('answers').del()
    .then(function () {
      // Inserts seed entries
      return knex('answers').insert([
        {
          answer: 'W3C is a worldwide organization developed to create standards for the web.',
          upvotes: 3,
          downvotes: 1,
          user_id: 1,
          question_id: 2
        },
        {
          answer: 'I have always love the creative aspect of problem solving, web development is an avenue that allows me to channel that createive outlet.',
          upvotes: 4,
          downvotes: 0,
          user_id: 2,
          question_id: 1
        },
        {
          answer: 'I honestly have no idea.',
          upvotes: 42,
          downvotes: 1,
          user_id: 3,
          question_id: 3
        },
        {
          answer: 'JavaScript hero right here. Also sick with the python. Get up and Go. Java in my cup. C## later...',
          upvotes: 8,
          downvotes: 2,
          user_id: 4,
          question_id: 4
        },
        {
          answer: 'I did a group project at school where we created an app. It took a bunch of our skills and was a ton of fun working and coding with others, golly jee I had fun!',
          upvotes: 8,
          downvotes: 2,
          user_id: 3,
          question_id: 5
        },
        {
          answer: 'Honestly. I tried to make pad thai one time. Went to the store, spent 50 bucks on ingredients and everything, and i soaked the brown rice pasta, and then didn\'t boil it and put it in the pan and it butchered it.',
          upvotes: 10,
          downvotes: 3,
          user_id: 4,
          question_id: 6
        },
        {
          answer: 'Getting out of bed in the morning. Really hate life and the world and it\'s just hard to get out and face it everyday.',
          upvotes: 8,
          downvotes: 2,
          user_id: 4,
          question_id: 4
        }
      ]);
    });
};
