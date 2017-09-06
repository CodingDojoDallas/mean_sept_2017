let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
    
for (let studentObjectIndex in students) {
    console.log("Name: " + students[studentObjectIndex].name + ", Cohort: " +students[studentObjectIndex].cohort)
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

for (var key in users) {
    var count = 0;
    for (var personIndex in users[key]){
        count++;
        console.log(count + " - " + users[key][personIndex].last_name.toUpperCase() + ", " + users[key][personIndex].first_name.toUpperCase() + " - " + (users[key][personIndex].first_name.length + users[key][personIndex].last_name.length) )
    }
}
