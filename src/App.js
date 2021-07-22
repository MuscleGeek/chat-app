// Firebase deps
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';



const auth = firebase.auth();


function App() {
  return (
    <>
      <h1>React -Firebase App</h1>
      <p>Este es un parrafo</p>
      <hr/>
      <p>other p</p>

    </>
  );
}

export default App;
