const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
        .then(res => res.json())
        .then(data => displayuser(data))
}
const displayuser = user => {
    const image = document.getElementById('image');
    const name = document.getElementById('name');
    const location = document.getElementById('location');
    const number = document.getElementById('number');
    const email = document.getElementById('email');

    const imgLink = user.results[0].picture.large;
    image.setAttribute("src", imgLink);

    name.innerText = user.results[0].name.title + ' ' + user.results[0].name.first + ' ' + user.results[0].name.last;

    location.innerText = user.results[0].location.street.number + ', ' + user.results[0].location.street.name + ', ' + user.results[0].location.city + ', ' + user.results[0].location.country;

    number.innerText = user.results[0].cell;

    email.innerText = user.results[0].email;
}
loadUser();