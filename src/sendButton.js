import sendButtonTest from "./main";

function sendData() {
    sendButtonTest.addEventListener('click', () => {
        let name = document.getElementById("name").value; 
        let email = document.getElementById("email").value;
        let phoneNumber = document.getElementById("phoneNumber").value;

        let user  = {
            name: name,
            email: email,
            phoneNumber: phoneNumber
        }
        console.log
        console.log(user);
    })
}
sendData();

export default sendData;


