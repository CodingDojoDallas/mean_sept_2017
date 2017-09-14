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

 for (key in users){
   var keyArrayCount = 0;
   console.log(key);
   for (keyArrays of users[key]){
     keyArrayCount++;
     nameLength = `${keyArrays.first_name} ${keyArrays.last_name}`.length;
     console.log(`${keyArrayCount} - ${keyArrays.last_name}, ${keyArrays.first_name} - ${nameLength}`);
   }
 }
