import { IconCornerUpLeft, IconPlus } from "@tabler/icons-react"
import FiltroProduto from "../produtos/filtro-produto"
import BotaoLink from "./btn-link"

export interface HeaderPageProps {
   titulo: string
   textoBtn: string
   placeholder: string
   functionBtn: () => void
}

export default function HeaderPage(props: HeaderPageProps) {
   return (
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-4">
         <h2 className="font-logo text-xl text-logo-black">{props.titulo}</h2>
         <FiltroProduto placeholder={props.placeholder} />
         <div className="flex gap-2">
            <button className="btn-default" onClick={props.functionBtn}>
               <IconPlus size={24}/>
               {props.textoBtn}
            </button>
            <BotaoLink link={"/home"} texto={"Voltar"} icon={IconCornerUpLeft}/>
         </div>
      </div>
   )
}