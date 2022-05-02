use namesDB_React;
db.dropDatabase();

db.name_Item.insertMany([
  {
    f_name: "Bob",
    l_name: "Smith"
  },
  {
    f_name: "Anne",
    l_name: "Jones"
  },
  {
    f_name: "Bobby",
    l_name: "Dazzler"
  },
  {
    f_name: "James",
    l_name: "Brown"
  },
]);
