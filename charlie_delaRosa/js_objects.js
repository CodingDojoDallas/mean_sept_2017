let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

// for (key in students){
//   console.log(`Name: ${students[key].name}, Cohort: ${students[key].cohort}`);
// }

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

for (i in users){
  console.log(i);
  for (key in users[i]){
    var keyPlus = parseInt(key) + 1;
    var nameLength = users[i][key].last_name.length + users[i][key].first_name.length
    var nameString = `${keyPlus} - ${users[i][key].last_name}, ${users[i][key].first_name} - ${nameLength}`;

    console.log(nameString);
  }
}
