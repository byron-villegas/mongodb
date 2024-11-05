db['whitelist-ips'].find({ Name: "Example", Ips: { $elementMatch: { Ip: "192.168.1.1" } } });
