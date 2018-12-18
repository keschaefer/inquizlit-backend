
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {
          question: 'What sparked your interest in web development?',
          tag: 'cultural',
          company: 'ABC Corp',
          interviewer: 'Kathy',
          upvotes: 2,
          downvotes: 1,
          user_id: 1
        },
        {
          question: 'What is W3C and why is it important?',
          tag: 'cultural',
          company: 'DEF Inc.',
          interviewer: 'Bryant',
          upvotes: 5,
          downvotes: 2,
          user_id: 2
        },
        {
          question: 'Explain how you optimize and reduce web application load time.',
          tag: 'cultural',
          company: 'GHI Company',
          interviewer: 'Gerald',
          upvotes: 22,
          downvotes: 7,
          user_id: 2
        },
        {
          question: 'In what programming languages are you proficient?',
          tag: 'cultural',
          company: 'Haters Inc.',
          interviewer: 'Jenn',
          upvotes: 5,
          downvotes: 2,
          user_id: 3
        },
        {
          question: 'Describe the project you\'ve worked on that you\'re most proud of. What did you do that worked out particularly well?',
          tag: 'cultural',
          company: 'Getit Done',
          interviewer: 'Julie',
          upvotes: 12,
          downvotes: 4,
          user_id: 4
        },
        {
          question: 'Describe the project you\'ve worked on that you\'re least proud of. What would you do differently?',
          tag: 'cultural',
          company: 'Stuff Company',
          interviewer: 'Todd',
          upvotes: 5,
          downvotes: 2,
          user_id: 3
        },
        {
          question: 'What is your greatest weakness?',
          tag: 'cultural',
          company: 'Bro Inc.',
          interviewer: 'Thadd',
          upvotes: 15,
          downvotes: 6,
          user_id: 2
        }
      ]);
    });
};
