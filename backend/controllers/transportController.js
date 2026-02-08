exports.listTransport = async (req, res) => {
  res.json({ services: [], message: 'Transportes em construção' });
};

exports.createTransport = async (req, res) => {
  res.status(201).json({ message: 'Transporte criado (stub)' });
};
