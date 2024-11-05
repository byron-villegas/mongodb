db.pets.find({ owners: { $elemMatch: { id: 1 } } , createdDate: { $gte: ISODate("2024-11-01"), $lt: ISODate("2024-11-05") } }).count();
