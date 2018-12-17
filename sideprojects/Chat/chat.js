var currentChatRoomText;
var doc;
var chatRoomObject;

function showChat() {
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = `
    <div id="chatContainer">
        <div id="chatfield"> </div>
        <input type="text" id="txtfield" name="name" >
        <button onclick="speak()"id="sendbtn">Send</button>
        </div>
 
    `;
    initFirebase();
}

function initFirebase() {
// Initialize Firebase
    var config = {
        apiKey: "AIzaSyA-IgMbAjK5yyOFm_JP12eNeOlpFe1V4kQ",
        authDomain: "startit-chat.firebaseapp.com",
        databaseURL: "https://startit-chat.firebaseio.com",
        projectId: "startit-chat",
        storageBucket: "startit-chat.appspot.com",
        messagingSenderId: "611501069118"
    };
    firebase.initializeApp(config);
    var firestore = firebase.firestore();
    const settings = { timestampsInSnapshots: true };
    firestore.settings(settings);
    console.log(1);

    doc = firestore.collection('chat').doc('n1weALkgrn0Qt6MtHu7U');
    doc.onSnapshot(
        function(chatRoomSnapshot) {
            chatRoomObject = chatRoomSnapshot.data();
            document.getElementById('chatfield').innerHTML = chatRoomObject.text;
            currentChatRoomText = chatRoomObject.text;
        });
}


function speak() {
    var newText = currentChatRoomText + '</br>' + document.getElementById("txtfield").value;
    
    doc.set({ text: newText })
        .then(function (response) { console.log('text sent'); })
        .catch(function (error) { console.error(error); });
}
