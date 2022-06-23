import { LogoRocketseat } from './LogoRocketseat';

export function Footer() {
  return (
    <div className="mx-6 py-6 border-t-[1px] border-gray-600 flex justify-between">
      <div className="flex items-center gap-6">
        <LogoRocketseat />
        <span className="text-gray-300 ">
          Rocketseat - Todos os direitos reservados
        </span>
      </div>

      <div className="flex items-center">
        <span className="text-gray-300">Políticas de privacidade</span>
      </div>
    </div>
  );
}
