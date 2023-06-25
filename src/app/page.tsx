import { Logo } from '../components/Logo'
import { Paragraph } from '../components/Text/Paragraph'
import { FormSignIn } from './components/FormSignIn'

export default function SignIn() {
  return (
    <div className="w-screen h-screen flex-col bg-gray-900 flex items-center justify-center text-gray-100 px-4">
      <header className="flex flex-col items-center">
        <Logo />
        <Paragraph size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar
        </Paragraph>
      </header>

      <FormSignIn />

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Paragraph asChild size="md">
          <a className="text-gray-400 underline" href="">
            Esqueceu sua senha?
          </a>
        </Paragraph>
        <Paragraph asChild size="md">
          <a className="text-gray-400 underline" href="">
            Não possui conta? Crie uma agora
          </a>
        </Paragraph>
      </footer>
    </div>
  )
}
