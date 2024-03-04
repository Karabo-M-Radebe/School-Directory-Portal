// Sample data for school directory
const schoolData = [{
    name: "ABC Elementary School",
    vacancies: 2,
    address: "123 Main Street",
    city: "Cityville",
    state: "State",
    zip: "12345"
},
{
    name: "XYZ Middle School",
    vacancies: 3,
    address: "456 Elm Street",
    city: "Townville",
    state: "State",
    zip: "54321"
},
{
    name: "123 High School",
    vacancies: 0,
    address: "789 Oak Street",
    city: "Villagetown",
    state: "State",
    zip: "67890"
}
];

// Function to create school cards dynamically
function createSchoolCard(data) {
const card = document.createElement('div');
card.classList.add('bg-white', 'p-6', 'rounded-lg', 'shadow-md');

const name = document.createElement('h2');
name.classList.add('text-xl', 'font-bold', 'mb-2');
name.textContent = data.name;

const vacancies = document.createElement('p');
vacancies.textContent = `Vacancies: ${data.vacancies}`;

const address = document.createElement('p');
address.textContent = `Address: ${data.address}, ${data.city}, ${data.state} ${data.zip}`;

card.appendChild(name);
card.appendChild(vacancies);
card.appendChild(address);

return card;
}

// Populate school cards
const schoolList = document.getElementById('school-list');
schoolData.forEach(function(item) {
const card = createSchoolCard(item);
schoolList.appendChild(card);
});
