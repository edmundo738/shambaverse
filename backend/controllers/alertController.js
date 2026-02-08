exports.listAlerts = async (req, res) => {
  res.json({ alerts: [], message: 'Alertas em construção' });
};

exports.createAlert = async (req, res) => {
  res.status(201).json({ message: 'Alerta criado (stub)' });
};
