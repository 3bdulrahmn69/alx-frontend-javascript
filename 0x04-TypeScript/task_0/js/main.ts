interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Abdulrahman',
  lastName: 'Moussa',
  age: 21,
  location: 'Cairo',
};

const student2: Student = {
  firstName: 'Ahmed',
  lastName: 'Ali',
  age: 22,
  location: 'Giza',
};

const studentsList: Array<Student> = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
const tbody: HTMLTableSectionElement = document.createElement('tbody');

studentsList.forEach((student: Student) => {
  const tr: HTMLTableRowElement = document.createElement('tr');
  const td1: HTMLTableCellElement = document.createElement('td');
  const td2: HTMLTableCellElement = document.createElement('td');

  td1.textContent = student.firstName;
  td2.textContent = student.location;

  tr.appendChild(td1);
  tr.appendChild(td2);
  tbody.appendChild(tr);
});

table.appendChild(tbody);

document.body.appendChild(table);
