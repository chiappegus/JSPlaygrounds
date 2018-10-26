

const number = 15 
var pepe = number * 3
pepe = pepe + number * 3
pepe= pepe +1
pepe
var pepes=[['pepe'],['joojo','opop'],'gus','opop','joojo','opop','joojo','opop','joojo']
 _.chunk(['a', 'b', 'c', 'd'], 2);

 var peper =_.chunk(pepes, 3);
peper[0]

var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 34 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 36 }
];
 
// Sort by `user` in ascending order and by `age` in descending order.
_.sortBy(pepes, function(row){
          return row[0] });




// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
