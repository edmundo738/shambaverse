exports.listChats = async (req, res) => {
  res.json({ chats: [], message: 'Chats em construção' });
};

exports.sendMessage = async (req, res) => {
  res.status(201).json({ message: 'Mensagem enviada (stub)' });
};
