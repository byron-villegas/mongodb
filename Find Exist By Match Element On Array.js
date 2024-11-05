db['whitelist-ips'].find({ Name: "Example", Ips: { $elemMatch: { Ip: "192.168.1.1" } } });
