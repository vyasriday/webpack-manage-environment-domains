module.exports.setConfiguration = (env) => {
  switch (env) {
    case "dev":
      return {
        domain: "https://dev.domain.com",
      };

    case "prod":
      return {
        domain: "https://prod.domain.com",
      };
  }
};
