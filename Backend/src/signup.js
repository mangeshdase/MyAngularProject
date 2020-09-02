let userregistration = () => {
    let username = document.querySelector("#inp").value;
    let password = document.querySelector("#pas").value;
    let email = document.querySelector("#email").value;
    let mobile = document.querySelector("#number").value;

    if(username == ""){
        document.querySelector("#inp").style.borderColor = "red";
        return;
    }

    let url =`http://localhost:3000/adduser?username=${username}&password=${password}&email=${email}&mobile=${mobile}`;

    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => {
        const res = xhr.responseText;
        console.log(res);

        document.querySelector("#inp").value="";
        document.querySelector("#pas").value="";
        document.querySelector("#email").value="";
        document.querySelector("#number").value="";

    };
    xhr.send();
};