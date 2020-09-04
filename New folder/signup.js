let userregistration = async() => {
    let username = document.querySelector("#inp").value;
    let password = document.querySelector("#pas").value;
    let email = document.querySelector("#email").value;
    let mobile = document.querySelector("#number").value;

    if(username == ""){
        document.querySelector("#inp").style.borderColor = "red";
        return;
    }

    let url =`http://localhost:3000/adduser?username=${username}&password=${password}&email=${email}&mobile=${mobile}`;
console.log(url);

 await fetch(url);



        document.querySelector("#inp").value="";
        document.querySelector("#pas").value="";
        document.querySelector("#email").value="";
        document.querySelector("#number").value="";
};