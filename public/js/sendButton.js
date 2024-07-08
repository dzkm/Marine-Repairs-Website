let sendButton = document.getElementById("sendButton");

function sendData() {
    sendButton.addEventListener('click', () => {
        let name = document.getElementById("name").value; 
        let email = document.getElementById("email").value;
        let phoneNumber = document.getElementById("phoneNumber").value;

        let user  = {
                name,
                email,
                phoneNumber
        }
        localStorage.setItem('user', JSON.stringify(user)); // Salva o usuario no local storage
    })
}
sendData();

function getUserData() {

    let userData = localStorage.getItem('user');

    let user = JSON.parse(userData); // faz o parse do objeto usuario para string

    console.log(user.name);
    console.log(user.email);
    console.log(user.phoneNumber);
}

getUserData();

