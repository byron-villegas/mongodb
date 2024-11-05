db['whitelist-ips'].updateOne({ Name: "Example" }, {
  $push: {
    Ips: {
      Ip: "192.168.1.1",
      Mask: "32",
      Description: "Example IP"
    }
  }
});
