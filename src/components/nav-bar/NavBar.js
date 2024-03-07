 
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { videInfo } from '../../Redux/store';
 
export  const NavBar = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch()  
  const token=useSelector((state)=>state.userSlice.token)
  const infoUtilisateur=useSelector((state)=>state.userSlice.infoUser)
  const firstName=infoUtilisateur.firstName
    //function pour vider le store et se redireger vers la page d'accueil
   function deconnecter(){      
      navigate('/') ;         
       dispatch(videInfo(''))     
    }
  return (
    <nav className="main-nav">   
     <Link className="main-nav-logo" to={'/'}>  
        <img
          className="main-nav-logo-image"
          src="../assets/img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>        
      <div>
        { token ? <><i className="fa fa-user-circle" />{firstName}<i className="fa fa-sign-out" onClick={deconnecter}/>Sign Out</>:
        <Link className="main-nav-item" to={'/login'}>
        <i className="fa fa-user-circle" />        
        Sign In
      </Link>}
        
      </div>
    </nav>
    
  );
};
