fetch('http://127.0.0.1:5000/user/23')
    .then((response) => {
        if (!response.ok) {
            if (response.status === 404) {
                window.location.href = '404.html';
            }
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        return response.json();
    })
    .then((user) => {
        console.log(JSON.stringify(user));
        const template = `
      <div style="display: flex; align-items: center; justify-content: center; height: 250px">
        <ul>
          <li style="font-size: 25px"><strong>ID:</strong> ${user.id}</li>
          <li style="font-size: 25px"><strong>Username:</strong> ${user.username}</li>
          <li style="font-size: 25px"><strong>Email:</strong> ${user.email}</li>
          <li style="font-size: 25px"><strong>First Name:</strong> ${user.first_name}</li>
          <li style="font-size: 25px"><strong>Last Name:</strong> ${user.last_name}</li>
        </ul>
      </div>`;
        document.getElementById('stats').innerHTML = template;
    })
    .catch((error) => console.error(error));
