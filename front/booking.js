window.fetch('http://127.0.0.1:5000/user/2/books')
    .then((res) => res.json()).then((res) => {
        console.log(JSON.stringify(res));
        res.forEach((book) => {
            if (!book) {
                return;
            }
            const roomDiv = document.createElement('div');
            roomDiv.className = 'room';
            roomDiv.innerHTML = `
                <style>
                .test{
                display: flex;
                justify-content: center;
                }
                .test button {
        background-color: #333;
        color: #fff;
        border: none;
        padding: 0.8rem 1.5rem;
        border-radius: 3px;
        font-size: 1.2rem;
        margin-top: 20px;
        cursor: pointer;
        margin-right: 25%;
    }

    .test button:hover {
        background-color: #444444;
    }

    .test button[type="button"] {
        background-color: #ccc;
        color: #333;
        margin-right: 10px;
    }

    .test button[type="button"]:hover {
        background-color: #aaa;
    }
</style>
                <img src="https://via.placeholder.com/150x150" alt="Room Image">
                <h3>${book.room_id}</h3>
                <p>Capacity: ${book.num_of_people}</p>
                <p>From: ${book.time_start}</p>
                <p>To: ${book.time_end}</p>
                <div class="test">
                <button class="button" type="edit" id="edit">Edit</button>
                <button class="button" type="button" id="book-btn" >Cancel</button>
                </div>
            `;
            document.getElementById('event-list').appendChild(roomDiv);
        });
    });
