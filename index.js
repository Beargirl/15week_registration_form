function check() {
    let name = document.getElementById
    ("name")
    let email = document.getElementById
    ("email")
    let username = document.getElementById
    ("username")
    let password = document.getElementById
    ("password")
    let confirm = document.getElementById
    ("confirm");

    document.getElementById('errorMessage').innerHTML = '';
    document.getElementById('successMessage').innerHTML = '';

        if(email.value === '')
        document.getElementById('errorMessage').innerHTML+= "Ваш e-mail не заполнен! <br>"; 
        if(name.value === '')
        document.getElementById('errorMessage').innerHTML+= "Поле Имя не заполнено! <br>"
        if(username.value === '')
        document.getElementById('errorMessage').innerHTML+= "Имя пользователя не заполнено! <br>"; 
        if(password.value === '')
        document.getElementById('errorMessage').innerHTML+= "Ваш пароль не заполнен! <br>"; 
        if(confirm.value === '')
        document.getElementById('errorMessage') .innerHTML+= "Повтор пароля не заполнен! <br>"; 
        if (confirm.value !== password.value)
        document.getElementById('errorMessage').innerHTML+= "Пароли не совпадают! <br>"; 
        else {

            document.getElementById ('successMessage').innerHTML+= "Добро пожаловать, <br>" + document.getElementById('name').value + "!";  
        }
        

} 


/* function check() {
    let name = document.getElementById
    ("name")
    let email = document.getElementById
    ("email")
    let username = document.getElementById
    ("username")
    let password = document.getElementById
    ("password")
    let confirm = document.getElementById
    ("confirm");

    element.classList('errorMessage').innerHTML = '';
    element.classList('successMessage').innerHTML = '';

 
        if(email.value === '')
        element.classList('errorMessage').innerHTML+= "Ваш e-mail не заполнен! <br>";
        if(name.value === '')
        element.classList('errorMessage').innerHTML+= "Поле Имя не заполнено! <br>"
        if(username.value === '')
        element.classList('errorMessage').innerHTML+= "Имя пользователя не заполнено! <br>"; 
        if(password.value === '')
        element.classList('errorMessage').innerHTML+= "Ваш пароль не заполнен! <br>"; 
        if(confirm.value === '')
        element.classList('errorMessage') .innerHTML+= "Повтор пароля не заполнен! <br>"; 
        if (confirm.value !== password.value)
        element.classList('errorMessage').innerHTML+= "Пароли не совпадают! <br>"; 
        else {
            element.classList('successMessage').innerHTML+= "Добро пожаловать, <br>" + document.getElementById('name').value + "!";  
        }
        

} */