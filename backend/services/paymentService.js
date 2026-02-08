const processPayment = async (payload) => {
  return { status: 'pending', provider: payload.provider };
};

module.exports = { processPayment };
