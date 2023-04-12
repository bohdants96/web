window.fetch('http://127.0.0.1:5000/room')
    .then((res) => res.json())
    .then((res) => {
        console.log(JSON.stringify(res));
        res.forEach((room) => {
            if (!room) { return; }
            const roomDiv = document.createElement('div');
            roomDiv.className = 'room';
            roomDiv.innerHTML = `
                <img src="https://via.placeholder.com/150x150" alt="Room Image">
                <h3>${room.name}</h3>
                <p>Capacity: ${room.num_of_seats}</p>
                <p>Location: Lviv, Ukraine</p>
                <button class="button" type="button" id="book-btn" onclick="openReservationDialog()">Book Now</button>
            `;
            document.getElementById('event-list').appendChild(roomDiv);
        });
    });
