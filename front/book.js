function openReservationDialog() {
    const dialog = document.createElement('dialog');
    dialog.innerHTML = `
    <style>    
    dialog {
        width: 500px;
        border: 2px solid #ccc;
        border-radius: 5px;
        padding: 20px;
    }

    h2 {
        text-align: center;
        font-size: 28px;
        margin-bottom: 20px;
    }
    p{
    text-align: center;
    }

    form label {
        display: inline-block;
        width: 150px;
        font-weight: bold;
    }

    form input {
        display: block;
        width: 100%;
        padding: 8px;
        border-radius: 5px;
        border: 2px solid #ccc;
        margin-bottom: 20px;
        box-sizing: border-box;
        font-size: 16px;
    }
    
    form .test{
    display: flex;
    justify-content: center;
    }
    
    form button {
        display: inline-block;
        background-color: #333;
        color: #fff;
        border: none;
        padding: 0.8rem 1.5rem;
        border-radius: 3px;
        font-size: 1.2rem;
        margin-top: 20px;
        cursor: pointer;
        margin-right: 25%;;
    }

    form button:hover {
        background-color: #444444;
    }

    form button[type="button"] {
        background-color: #ccc;
        color: #333;
        margin-right: 10px;
    }

    form button[type="button"]:hover {
        background-color: #aaa;
    }
    </style>

    <h2>Book Now</h2>
    <p>Please fill out the form below to book this room.</p>
    <form>
      <label for="id">Id user:</label>
      <input type="number" id="id"">
      <br>
      <label for="name">Name:</label>
      <input type="text" id="name">
      <br>
      <label for="email">Email:</label>
      <input type="email" id="email">
      <br>
      <label for="id_room">Id room:</label>
      <input type="number" id="id_room">
      <br>
      <label for="num_of_seats">Number of people:</label>
      <input type="number" id="num_of_seats">
      <br>
      <label for="datetime_from">Datetime from:</label>
      <input type="datetime-local" id="datetime_from">
      <br>
      <label for="datetime_to">Datetime to:</label>
      <input type="datetime-local" id="datetime_to">
      <br>
      <div class="test">
        <button type="submit" onclick="submitReservation()">Book</button>
        <button type="button" onclick="closeReservationDialog()">Cancel</button>
      </div>
    </form>
  `;
    dialog.style.border = '1px solid #ccc';
    dialog.style.borderRadius = '5px';
    dialog.style.padding = '20px';
    dialog.style.backgroundColor = '#fff';

    document.body.appendChild(dialog);
    dialog.showModal();
}

function closeReservationDialog() {
    const dialog = document.querySelector('dialog');
    dialog.close();
    dialog.remove();
}

function submitReservation() {
    const roomId = document.getElementById('id_room').value;
    const userId = document.getElementById('id').value;
    const numOfPeoples = document.getElementById('num_of_seats').value;
    const timeStarts = new Date(document.getElementById('datetime_from').value).toISOString();
    const timeEnds = new Date(document.getElementById('datetime_to').value).toISOString();

    const data = {
        room_id: roomId,
        user_id: userId,
        num_of_people: numOfPeoples,
        time_start: timeStarts,
        time_end: timeEnds,
    };

    fetch('http://127.0.0.1:5000/user/book', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => {
            if (!response.ok) {
                if (response.status === 404) {
                    window.location.href = '404.html';
                }
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    closeReservationDialog();
}
