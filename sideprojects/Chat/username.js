console.log
function showfrontPage() {
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = `
    
 <div id="usernameContainer">
        <input type="text" placeholder="Username" id="createUserName" /><br />
        <button onclick="addNewUser()" class="login" type="submit" id="regsub">Submit</button>
  
</div>
<div id="checkAll"></div>
        `;
}
function addNewUser() {



    var username = document.getElementById('createUserName').value;


    if (username == ''  ) {
        document.getElementById('checkAll').innerHTML = 'fill in everything';

    }
    else {

        var newItem = {};
        newItem.username = username;

        chatl.users.push(newItem);


        var test = chatl.users;

        var i = 0; i <test.length; i++;
        var testname = test[i].username;

        var mainContentDiv = document.getElementById('mainContent');
        mainContentDiv.innerHTML = ` 


    <div class="sikker" style="color:white">You are now registered!</div>
   
      <div id="usernameContainer"><div>Hello ${testname}</div>
      <button onclick="showChat()"type="submit">Enter</button>
      </div>
      `;

    }

}
