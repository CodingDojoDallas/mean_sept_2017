let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
]

for(let student in students){
	console.log(`name: ${students[student].name}, cohort: ${students[student].cohort}`)
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
 }

for(let key in users){
	console.log(key.toUpperCase());
	for(let i = 0; i<users[key].length; i++){
	    let num = i + 1
	    let fname = users[key][i].first_name
	    let lname = users[key][i].last_name
	    let length = fname.length + lname.length
	    console.log(`${num} - ${lname}, ${fname} - ${length}`)
	}
}  

