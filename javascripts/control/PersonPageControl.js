var createPerson = (function() {

// Option 1 - Use addEventListener to register event handler
	function PersonPageControl() {

		// link the search button to a JS variable.
		var search_elm = document.getElementById('search_person_id');

		// define a new event handler for the search button.
		search_elm.addEventListener('click', function(event){
			console.log("the search button was clicked and activated the eventHandler");

			// grabs the value that is in the text box when user clicks search.
			var student_ln = document.getElementById('ln_id').value;
			console.log(student_ln);
			console.log(test);

			// searches through the Peron list and finds all students with matching last name
			var found_list = searchStudent(student_ln);

			//Call view to show matching list of students
			var list_view = new test.view.ListView(found_list);
		});

		// link the list item to a JS variable.
		var list_elm = document.getElementById('person_list_id');
		function getEventTarget(e) {
				e = e || window.event;
				return e.target || e.srcElement;
		}
		// the onclick function handles what li item that is being clicked.
		list_elm.onclick = function(event) {
				var target = getEventTarget(event);

				// grab the name of the student that was clicked from the li.
				var student_name = target.innerHTML;

				// search the person_list to get the correct student.
				var grades_of_found_student = searchRecs(student_name)

				// send that list of grades to the TableView.
				var table_view = new test.view.TableView(grades_of_found_student);
		};
	// make sure the page is fully loaded before registering event handler
	window.addEventListener('load', function(event) {
		PersonPageControl();
	});

	//Find students with last name matching search
	function searchStudent(last_name) {

		var found_students = new Array();

		var p_obj = new test.model.Person();
		var listPerson = p_obj.getAllPerson();

		for (let person of listPerson) {
			if (person.getLastName() == last_name) {
				found_students.push(person);
				console.log(found_students);
			}
		}

		return found_students;
	}

	//Search all student records for matching name
	function searchRecs(student_full_name) {
		var found_students = new Array();
		var p_obj = new test.model.Person();
		var listPerson = p_obj.getAllPerson();

		//List report card for matching student
		for (let person of listPerson) {
			if (person.getString() == student_full_name) {
				return person.getReportCard();
			}
		}
	}

	return createPerson;

})();
