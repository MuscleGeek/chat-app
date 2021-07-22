--BootStrap--
npm install bootstrap

--Firebase
npm install firebase

--accesar a console.firebase

console.firebase.google.com
-Crear firebase project


<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/8.7.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/8.7.1/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>

npm install -g firebase-tools

$firebase init


{
  "hosting": {
    "site": "chat-appcr",
    "public": "public",
    ...
  }
}

$firebase deploy --only hosting:chat-appcr




