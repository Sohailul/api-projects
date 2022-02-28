const loadRandomUsers = () => {
    const url = `https://randomuser.me/api/?results=500`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayRandomUsers(data.results))
}

const displayRandomUsers = users => {
    console.log(users);
    // for (const user of users) {
    //     const randomUserDiv = document.getElementById('random-users');
    //     const div = document.createElement('div');
    //     div.innerHTML = `
    // <img src="${user.picture.large}">
    // <h3>Name: ${user.name.title} ${user.name.first} ${user.name.last}</h3>
    // <h4>Email: ${user.email}</h4> 
    // <h4>Gender: ${user.gender}</h4>
    // <h6>Location: ${user.location.city}, ${user.location.state}- ${user.location.postcode}, ${user.location.country}</h6>
    // `;
    // randomUserDiv.appendChild(div);
    // }

    users.forEach(user => {
        const randomUserDiv = document.getElementById('random-users');
        const div = document.createElement('div');
        div.classList.add('user');
        div.innerHTML = `
        <img src="${user.picture.large}">
        <h3>Name: ${user.name.title} ${user.name.first} ${user.name.last}</h3>
        <h4>Email: ${user.email}</h4> 
        <h4>Gender: ${user.gender}</h4>
        <h6>Location: ${user.location.city}, ${user.location.state}- ${user.location.postcode}, ${user.location.country}</h6>
        `;
        randomUserDiv.appendChild(div);
    });
}