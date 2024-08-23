import { Link } from "react-router-dom";

function Navbar() {
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
          <li>Sair</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
