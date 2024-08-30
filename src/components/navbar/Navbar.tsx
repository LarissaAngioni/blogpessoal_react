import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";

function Navbar() {
  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  function logout(){
    handleLogout();
    alert("O usuário foi desconectado com sucesso!");
    navigate("/");
  }

  let navbarComponent;


  return (
    <div
      className="flex 
    bg-indigo-900 
     text-white
      "
    >
      <div
        className="
          pl-10
          font-bold
          text-2xl
          m-5
        "
      >
        <Link to="/home">Blog Pessoal</Link>
      </div>

      <div className="ml-auto">
        <ul
          className="
            justify-end
            inline-flex
            gap-4
            pr-10
            m-5
          "
        >
          <li className='hover:underline'>Postagens</li>
          <li className='hover:underline'>
          <Link to='/temas'>Temas</Link>
            </li>
          <li className='hover:underline'>
            <Link to="/cadastroTema"> Cadastrar tema </Link>
            </li> 
          <li className='hover:underline'>Perfil</li>
          <li className='hover:underline'><Link to='' onClick={logout} className="hover:underline">Sair</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
