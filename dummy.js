const BlogUser = require('./models/blog_user');
const Article = require('./models/article');
const Comment = require('./models/comment');

BlogUser.findOne({
    where: {
        id: 2
    }
})
.then(author => {
    Comment.create({
        content: 'This article sucks and I hate you.',
    })
    .then(comment => {
        comment.setBlog_user(author);
        comment.setArticle(articleID);
        comment.save();
    });
});