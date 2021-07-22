import '../CSS/App.css';

import Button from './button';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp({
  
})

function App() {
  const [user, setUser] = useState(() => auth.currentUser);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user){
        setUser(user);
      }else{
        setUser(null);
      }
    });

    if(initializing){
      setInitializing(false);
    }
  }, [])

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.useDeviceLanguage();
    try{
      await auth.signInWithGoogle(provider);
    } catch (error){
      console.log(error);
    }
  }

  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    }catch (error){
      console.log(error.message);
    }
  }

  if (initializing) return "Loading ... ";

  return (
    <>
      {user ? (
        <>
          <Button onClick={signOut}>Sign out</Button>
          <p>Welcome to the chat</p>
        </>  
      ) : (
        <Button onClick={signInWithGoogle}>Sign in with Google</Button>
      )}
    </>
  );
}

export default App;
