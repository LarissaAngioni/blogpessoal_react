import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { ReactNode, useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

function Footer() {
  let data = new Date().getFullYear();

  const { usuario } = useContext(AuthContext)

    let component: ReactNode;

    if (usuario.token !== "") {
      component = (
        <div
        className="
        flex
        justify-center
        bg-indigo-900
        pt-10
        text-white
        text-center
      "
      >
        <div>
          <div className="font-bold text-lg ">Blog Pessoal Larissa Angioni | Copyright: {data}</div>
          <div>
            <div>Acesse minhas redes sociais</div>
            <div className="flex justify-center gap-4">
              <a href="https://www.linkedin.com/in/larissaangioni/" target="_blank"><LinkedinLogo size={40} /></a>
              <a href="https://github.com/larissaangioni" target="_blank"><GithubLogo size={40} /></a> 
            </div>
          </div>
        </div>
      </div>
      )
    }
  return (
    <> {component} </>
  );
}

export default Footer;
