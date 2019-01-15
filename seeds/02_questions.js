exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('questions').del()
        .then(function () {
            // Inserts seed entries
            return knex('questions').insert([
                {
                    question: 'What are your weaknesses?',
                    tag: 'cultural',
                    company: 'Inquizlit Inc.',
                    interviewer: 'Kathy',
                    upvotes: 2,
                    downvotes: 1,
                    user_id: 1
                },
                {
                    question: 'Do you work best alone or on a team?',
                    tag: 'cultural',
                    company: 'Inquizlit Inc.',
                    interviewer: 'Bryant',
                    upvotes: 5,
                    downvotes: 2,
                    user_id: 2
                },
                {
                    question: 'What is MVC?',
                    tag: 'computer science',
                    company: 'Inquizlit Inc.',
                    interviewer: 'Gerald',
                    upvotes: 22,
                    downvotes: 7,
                    user_id: 2
                },
                {
                    question: 'What is polymorphism?',
                    tag: 'computer science',
                    company: 'Inquizlit Inc.',
                    interviewer: 'Jonathan',
                    upvotes: 13,
                    downvotes: 3,
                    user_id: 3
                },
                {
                    question: 'Write a function that will loop through a list of integers and print the index of each element after a 3 second delay.',
                    tag: 'algorithms',
                    company: 'Inquizlit Inc.',
                    interviewer: 'Jenny',
                    upvotes: 5,
                    downvotes: 2,
                    user_id: 3
                },
                {
                    question: 'Write a simple function that returns a boolean indicating whether or not a string is a palindrome.',
                    tag: 'algorithms',
                    company: 'Inquizlit Inc.',
                    interviewer: 'Julie',
                    upvotes: 12,
                    downvotes: 1,
                    user_id: 4
                },
                {
                    question: 'You have a goat, a horse, a tortoise, and a hare, which one does math the best and why?',
                    tag: 'riddles',
                    company: 'Inquizlit Inc.',
                    interviewer: 'Martin',
                    upvotes: 28,
                    downvotes: 7,
                    user_id: 3
                },
                {
                    question: 'If you take purple and mix it with yellow, what color do you get?',
                    tag: 'riddles',
                    company: 'Inquizlit Inc.',
                    interviewer: 'Madison',
                    upvotes: 13,
                    downvotes: 2,
                    user_id: 4
                }
            ]);
        });
};
