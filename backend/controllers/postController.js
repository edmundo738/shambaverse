exports.listPosts = async (req, res) => {
  res.json({ posts: [], message: 'Posts em construção' });
};

exports.createPost = async (req, res) => {
  res.status(201).json({ message: 'Post criado (stub)' });
};
