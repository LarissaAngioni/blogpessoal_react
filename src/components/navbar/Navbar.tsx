import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";

function Navbar() {
  const navigate = useNavigate();

  const { handleLogout } = useContext(AuthContext);

  function logout(){
    handleLogout();
    alert("O usuário foi desconectado com sucesso!");
    navigate("/");
  }

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
          <li>Postagens</li>
          <li>Temas</li>
          <li>Cadastrar tema</li>
          <li>Perfil</li>
          <li><Link to='' onClick={logout} className="hover:underline">Sair</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
