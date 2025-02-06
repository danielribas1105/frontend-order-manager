'use client'
import { useState } from "react"
import { Usuario } from "@/core"
import listaUsuarios from "@/core/constants/usuarios"
import Container from "@/components/layout/container"
import HeaderPage from "@/components/templates/header-page"
import ListaUsuarios from "@/components/usuarios/lista-usuarios"
import FormUsuario from "@/components/usuarios/form-usuario"

export default function UsuariosPage() {

   //const { usuarios } = useUsuarios()
   const [usuarioAtual, setUsuarioAtual ] = useState<Usuario | null>(null)
   const [usuarios, setUsuarios] = useState<Usuario[]>(listaUsuarios)

   function selecionarUsuario(usuario: Usuario) {
      console.log("selecionarUsuario")
      setUsuarioAtual(usuario)
   }

   function removerUsuario(usuarioRemovido: Usuario) {
      console.log("removerUsuario")
      const novaListaUsuarios = usuarios.filter((u) => u.id !== usuarioRemovido.id)
      setUsuarios(novaListaUsuarios)
   }

   function cancelar() {
      setUsuarioAtual(null)
   }

   return (
      <Container className="flex-col">
         <HeaderPage
            titulo="USUÁRIOS CADASTRADOS"
            linkBtn="/usuarios/addUsuario"
            textoBtn="Adicionar Usuário"
            placeholder="Buscar usuário"
         />
         <div>
            { usuarioAtual ? (
               <FormUsuario usuario={usuarioAtual} cancelar={cancelar}/>
            ) : (
               <ListaUsuarios 
                  usuarios={usuarios} 
                  selecionarUsuario={selecionarUsuario}
                  removerUsuario={removerUsuario} 
               />
            )}
         </div>
      </Container>
   )
}