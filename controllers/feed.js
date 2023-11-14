exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: '1',
        title: 'First Post',
        content: 'This is the first post!',
        imageUrl: 'images/car.jpg',
        creator: {
          name: 'Radu',
        },
        createdAt: new Date(),
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  //create in DB
  res.status(201).json({
    message: 'Post created successfully!',
    post: {
      _id: Math.floor(Math.random() * 1000),
      title,
      content,
      creator: { name: 'Radu' },
      createdAt: new Date(),
    },
  });
};
