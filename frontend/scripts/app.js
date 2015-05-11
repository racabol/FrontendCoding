/**
 * Created by Racabol.Razvan on 11.05.2015.
 */
var employeesList = [
    {         firstName: 'John', lastName: 'King', phone: '0123456789', salary: 4500     },
    {         firstName: 'Steven', lastName: 'Gerard', phone: '0123456789', salary: 4500      },
    {         firstName: 'Diana', lastName: 'Ross', phone: '0123456789', salary: 4500      },
    {         firstName: 'Mike', lastName: 'Bob', phone: '0123456789', salary: 4500      },
    {         firstName: 'Emily', lastName: 'Hudson', phone: '0123456789', salary: 4500      }
];
function showList() {
    var myTable = '<table class="table table-hover" border="1"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th><th>View</th><th>Delete</th></tr>';
    for (var i in employeesList) {

        myTable += '<tr>' +
            '<td>' + employeesList[i].firstName + '</td>' +
            '<td>' + employeesList[i].lastName + '</td>' +
            '<td>' + employeesList[i].phone + '</td>' +
            '<td>' + employeesList[i].salary + '</td>' +
            '<td><button onclick="View(' + i + ')">View</button></td>' +
            '<td><button onclick="Delete(' + i + ')">Delete</button>  </td>' +
            '</tr>';
    }
    myTable+='<tr>' +
        '<td>'  +  '</td>' +
        '<td>'  + '</td>' +
        '<td>' + '</td>' +
        '<td>'+ averageSalary()+ '</td>' +
        +'</tr>'


    myTable += '</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}

var Employee = function (firstName, lastName, phone, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
}
function addEmployee() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;
    employeesList.push(new Employee(firstName, lastName, phone, salary));

    clear("firstName");
    clear("lastName");
    clear("phone");
    clear("salary");

    showList();
}

function clear(id){
    document.getElementById(id).value=null;
}

function calcul(){
    var total = 0;
    for(var i in employeesList){
        total+= parseFloat(employeesList[i].salary);
    }
    var container = document.getElementById('Ttotalsalary');
    container.value=total;

}

function DeleteLastEmployee() {
    employeesList.pop();
    showList();
}

function Delete(index) {
    console.log(index);
    for (var i=index+1; i < employeesList.length; i++) {
        employeesList[i-1].firstName = employeesList[i].firstName;
        employeesList[i-1].lastName = employeesList[i].lastName;
        employeesList[i-1].phone = employeesList[i].phone;
        employeesList[i-1].salary = employeesList[i].salary;
    }
    employeesList.pop();
    console.log(employeesList);
    showList();
}

function View(index) {

    alert(employeesList[index].firstName+','+employeesList[index].lastName+','+employeesList[index].phone+','+employeesList[index].salary);

}

function averageSalary() {
    var total = 0;
    for(var i in employeesList){
        total+= parseFloat(employeesList[i].salary);
    }
    return total/employeesList.length;
}