let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'},
];
for(let kid in students){
    console.log('Name: ' + students[kid].name + ', Cohort: ' + students[kid].cohort)
}


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
//  console.log('EMPLOYEES')

for(key in users){
    console.log(key)
    let keyPlus = 0
    for(let user of users[key]){
        keyPlus++
        var nameLength = user.last_name.length + user.first_name.length
        var nameString = `${keyPlus} - ${user.last_name}, ${user.first_name} - ${nameLength}`
        console.log(nameString)
            
    }
}
// console.log('MANAGERS')

