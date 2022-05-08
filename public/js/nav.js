let ul= document.querySelector('.links-container');

auth.onAuthStateChanged ((user) => {

if(user) {

// user is loggin

ul.innerHTML +=

<li class="link-item"><a href="/admin" class="link">Dashboard</a></li>

<li class="link-item"><a href="#" onclick="LogoutUser()" class="link">Logout</a>

else{

// no one is logged in

ul.innerHTML +=

<li class="link-item"><a href="/admin" class="link">Login</a></li>

})
