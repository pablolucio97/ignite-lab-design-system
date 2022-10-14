import { Envelope, Lock } from 'phosphor-react';
import { Button } from './components/Button';
import { CheckBox } from './components/CheckBox';
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { Input } from './components/Input';
import { Logo } from './components/Logo';

import './styles/global.css'

export default function App() {
  return (
    <div className="w-screen h-screen bg-black500 flex flex-col items-center justify-center text-gray100">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>

        <Text size="lg" className="text-gray700 mt-1">
          Faça login e comece a usar!
        </Text>
      </header>

      <form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <Input.Root>
            <Input.Icon>
              <Envelope />
            </Input.Icon>

            <Input.Input type="email" id="email" placeholder="Digite seu e-mail" />
          </Input.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <Input.Root>
            <Input.Icon>
              <Lock />
            </Input.Icon>

            <Input.Input type="password" id="password" placeholder="******" />
          </Input.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <CheckBox id="remember" />
          <Text size="sm" className="text-gray700">Lembrar de mim por 30 dias</Text>
        </label>

        <Button type="submit" className="mt-4">Entrar na plataforma</Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a href="" className="text-gray700 underline hover:text-gray800">Esqueceu sua senha?</a>
        </Text>
        <Text asChild size="sm">
          <a href="" className="text-gray700 underline hover:text-gray800">Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div>
  )
}