function getArray()
{
	var toDoList = new Array;                                   //create An Array
	var taskstr = localStorage.getItem(toDoList);              //Get the Task from Input using LocalStorage
	  if(taskstr !==null)                                               //if the value is Not empty --Null--
		 {
		    toDolist = JSON.parse(taskStr);
		 }
	return toDolist;
}
function addTask()
{
	var task = document.getElementById("taskName").value;                //create a variable to hold value of Input
	var array = getArray();                                              //create a variable to hold out Array
	array.push(task);                                                   //pushing the task into the Array
	 localStorage.setItem(array, JSON.stringify(task));                 //store the task localStorage saving to the Array
	 show();
	 return false;
}
function show()
{
	var array = getArray();                                             //create a variable to hold value of Input
	var htmlFormat = "<ul>"                                            //add unordered list
	for (var i=0; i < array.length;i++)                               //A for Loop to display the Array
		{
		    htmlFormat += "<li>" + array[i] + "</li>";
		}
	htmlFormat += "</ul>";
	document.getElementById(array).innerHTML = htmlFormat;                                                                   //Show the document
}


document.getElementById('add').addEvantListener('click',addTask);
show();