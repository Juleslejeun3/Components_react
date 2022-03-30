import MyProfilePhoto from './Components/Profile/ProfilePhoto';
import FullName from './Components/Profile/FullName';
import Adress from './Components/Profile/Adress';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
    <header class="list_header">
  <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Accueil</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">CV</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Contact</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Realisations</a>
  </li>
</ul>
  </header>
  <div className="App">
   <MyProfilePhoto className="profile"/>
   <FullName/>
   <Adress/> 
   </div>  
    </div>
  );
}

export default App;