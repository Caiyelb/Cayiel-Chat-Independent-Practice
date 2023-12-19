$(".send").click(function(){
    var send = $(".your-input").val();
    $(" .sent").append("<p>" + send + "</p>");
    

    
});
$(".send2").click(function(){
    var send = $(".friend-input").val();
    $(" .received").append("<p>" + send + "</p>");
   

    
});
$(".sent").show();














//DON'T CHANGE THIS CODE

var realYourName, realFriendName;

try {
    realYourName = eval('yourName');
    realFriendName = eval('friendsName');
} catch (_e) {}

updateNames();

function updateNames(){
    $(".your-name").text(realYourName);
    $(".friends-name").text(realFriendName);
}