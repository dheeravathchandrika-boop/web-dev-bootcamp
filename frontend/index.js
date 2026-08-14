
var users = [
    {
        "name":"jahnavi",
        "gender":"female",
        "image":"image copy .png"
    },
    {
        "name":"john doe",
        "gender":"male",
        "image":"image.png"
    }
]

var curId = 0;

function toggleuser(){
    curId = (curId + 1) % 5;

    var userName = document.getElementById("user-name");
    var userImage = document.getElementById("user-img");
    var userGender = document.getElementById("user-gender");

    userName.innerHTML = users[curId].name;
    userImage.src = users[curId].image;
    userGender.textContent = users[curId].gender;
} 

function randomuser(){
    fetch("https://randomuser.me/api/")
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        var user = data.results[0];
        var userName = document.getElementById("user-name");
        var userImage = document.getElementById("user-img");
        var userGender = document.getElementById("user-gender");

        var newuserName = data.results[0].name.first + " " + data.results[0].name.last;
        var newuserGender = data.results[0].gender;
        var newuserImage = data.results[0].picture.large;

        userName.innerHTML = newuserName;
        userGender.innerHTML = newuserGender;
        userImage.src = newuserImage;

    })
    .catch(function(err) {
        console.log("error occured : " +err);
    });
}
