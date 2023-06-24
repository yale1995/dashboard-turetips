import { Button } from '../components/Form/Button'
import { Checkbox } from '../components/Form/Checkbox'
import { Logo } from '../components/Logo'
import { Paragraph } from '../components/Text/Paragraph'
import { TextInput } from '../components/Form/TextInput'
import { Envelope, Lock } from '../assets/icons/phosphorIcons'

export default function SignIn() {
  return (
    <div className="w-screen h-screen flex-col bg-gray-900 flex items-center justify-center text-gray-100 px-4">
      <header className="flex flex-col items-center">
        <Logo />
        <Paragraph size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar
        </Paragraph>
      </header>

      <form className="flex flex-col items-stretch gap-4 w-full max-w-sm mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Paragraph className="font-semibold">Endereço de email</Paragraph>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              id="email"
              type="email"
              placeholder="Digite seu email"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Paragraph className="font-semibold">Sua senha</Paragraph>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              id="password"
              type="password"
              placeholder="**********"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" name="remember" />
          <Paragraph size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Paragraph>
        </label>
        <Button type="submit">Entrar na plataforma</Button>
      </form>
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
