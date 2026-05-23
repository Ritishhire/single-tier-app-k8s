const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("🔥 Single Tier App Running in Kubernetes learing devops this one k8s 🚀");
});

app.listen(4000, () => {
  console.log("Server running on port 3000");
});
