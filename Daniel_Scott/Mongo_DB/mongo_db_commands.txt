// 1. Create a database called 'my_first_db'.
	use my_first_db
// 2.Create students collection.
	db.createCollection("students")
// 3. Each document you insert into this collection should have the following format: {name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}}
// 4. Create 5 students with the appropriate info.
	db.students.insert({name: "Kobe", home_state:"Pennsylvania", lucky_number:8, birthday: {month:8, day:23, year:1978}})
	db.students.insert({name: "Eminem", home_state:"Michigan", lucky_number:3, birthday: {month:10, day:17, year:1973}})
	db.students.insert({name: "Michael", home_state:"New York", lucky_number:23, birthday: {month:2, day:17, year:1963}})
	db.students.insert({name: "Kurt", home_state:"Washington", lucky_number:7, birthday: {month:2, day:20, year:1967}})
	db.students.insert({name: "Russell", home_state:"California", lucky_number:0, birthday: {month:11, day:12, year:1988}})
// 5. Get all students.
	db.students.find()
// 6. Retrieve all students who are from California (San Jose Dojo) or Washington (Seattle Dojo).
	db.students.find({$or: [{home_state:"California"}, {home_state:"Washington"}]})
// 7. Get all students whose lucky number is:
// 7.1 Greater than 3
	db.students.find({lucky_number:{$gt:3}})
// 7.2 Less than or equal to 10
	db.students.find({lucky_number:{$lte:10}})
// 7.3 Between 1 and 9, inclusive
	db.students.find({$and:[{lucky_number:{$lte:9}}, {lucky_number:{$gte:1}}]})
// 8. Add a field in each student collection called 'interests' that is an ARRAY.  It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation.
	db.students.update({},{$set: {"interests":['coding', 'brunch', 'MongoDB']}},{multi:true})
// 9. Add some unique interests for each particular students into each of their interest arrays.
	db.students.update({name: "Eminem"},{$push: {interests:{$each:['rapping', 'Haillie']}}})
	db.students.update({name: "Michael"},{$push: {interests:{$each:['basketball', 'being the GOAT']}}})
	db.students.update({name: "Kurt"},{$push: {interests:{$each:['Nirvana', 'playing guitar']}}})
	db.students.update({name: "Russell"},{$push: {interests:{$each:['basketball', 'slam dunks']}}})
// 10. Add the interest 'taxes' into someone's interest array.
	db.students.update({name: "Kobe"},{$push: {interests: "taxes"}})
// 11. Remove the 'taxes' interest you just added.
	db.students.update({name: "Kobe"},{$pull: {interests: "taxes"}})
// 12. Remove all students who are from California (or Washington).
	db.students.remove({$or: [{home_state:"California"}, {home_state:"Washington"}]})
// 13. Remove a user by name. 
	db.students.remove({name:"Eminem"})
// 14. Remove a student whose lucky number is greater than 5 (JUST ONE)
	db.students.remove({lucky_number: {$gt:5}}, {justOne:true})
// 15. Add a field in each student collection called 'number_of_belts' and set it to 0.
	db.students.update({},{$set: {"number_of_belts":0}},{multi:true})
// 16. Increment this field by 1 for all students in Washington (Seattle Dojo).
	db.students.update({home_state: "Washington"},{$inc: {number_of_belts: 1}},{multi:true})
// 17. Rename the 'number_of_belts' field to 'belts_earned'
	db.students.update({}, {$rename: {"number_of_belts":"belts_earned"}})
// 18. Remove the 'lucky_number' field.
	db.students.update({}, {$unset:{lucky_number:""}},{multi:true})
// 19. Add a 'updated_on' field, and set the value as the current date.
	db.students.update({}, {$currentDate:{updated_on:true}},{multi:true})