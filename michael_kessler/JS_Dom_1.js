 function appendList(array, id){
           for (let i = 0; i<array.length; i++){
                let e = document.createElement("li")
                e.innerHTML = array[i];
                document.getElementById(id).appendChild(e);
           }
        };

        // Part II
        function superAppend(array, element, id){
            for (let i = 0; i<array.length; i++){
                let e = document.createElement(element);
                e.innerHTML = array[i];
                document.getElementById(id).appendChild(e);
            }
        }
        
        let students = ["Jeff", "Jenny", "Javier", "Joslyn", "Joe", "Jane", "Django"];
        let target_id = "main";
        
        appendList(students, target_id);
        superAppend(students, "h1", "target");