export default function Home() {
  return (
    <main className="min-h-screen bg-[#171717] text-[#ffffff] font-sans selection:bg-[#68121f] selection:text-[#ffffff]">
      {/* Header / Navigation */}
      <nav className="sticky top-0 z-50 bg-[#185347] border-b border-[#68121f] px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter uppercase italic">
          Sócio <span className="text-[#ffffff]">Futebol</span>
        </div>
        <a 
          href="#planos" 
          className="bg-[#ffffff] text-[#185347] px-6 py-2 rounded-full font-bold uppercase text-sm hover:bg-[#68121f] hover:text-[#ffffff] transition-colors"
        >
          Seja Sócio
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#185347]/80 to-[#171717] z-10"></div>
        <div className="relative z-20 text-center px-4 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-black uppercase italic mb-4 leading-none">
            Alcançamos a <br />
            <span className="text-[#ffffff]">Glória Eterna</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light uppercase tracking-widest">
            O Fluminense é alma e coração. Faça parte da nossa história.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#planos" className="bg-[#ffffff] text-[#185347] px-10 py-4 rounded-md font-black uppercase text-lg hover:scale-105 transition-transform">
              Ver Planos Arquiba
            </a>
            <a href="#" className="border-2 border-[#ffffff] text-[#ffffff] px-10 py-4 rounded-md font-black uppercase text-lg hover:bg-[#ffffff] hover:text-[#185347] transition-all">
              Saiba Mais
            </a>
          </div>
        </div>
      </section>

      {/* Planos Arquiba */}
      <section id="planos" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic text-[#ffffff] mb-4">Planos Arquiba</h2>
          <div className="w-24 h-2 bg-[#68121f] mx-auto"></div>
          <p className="mt-6 text-[#393939] font-bold uppercase tracking-tighter text-xl">Escolha sua armadura e venha para o Maracanã</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Plano 1 */}
          <div className="bg-[#185347] p-8 rounded-xl border-t-8 border-[#68121f] flex flex-col">
            <h3 className="text-3xl font-black uppercase italic mb-2">Arquiba 60%</h3>
            <p className="text-sm text-gray-300 mb-6 font-bold uppercase">Ideal para quem frequenta o Maraca</p>
            <div className="text-5xl font-black mb-8">R$ 55<span className="text-xl">,90/mês</span></div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-2">✓ 60% de desconto em ingressos</li>
              <li className="flex items-center gap-2">✓ Prioridade 2 na compra</li>
              <li className="flex items-center gap-2">✓ Rede de parceiros</li>
            </ul>
            <button className="w-full bg-[#ffffff] text-[#185347] py-4 rounded font-black uppercase hover:bg-[#68121f] hover:text-[#ffffff] transition-colors">
              Entre em contato
            </button>
          </div>

          {/* Plano 2 - Destaque */}
          <div className="bg-[#68121f] p-8 rounded-xl border-t-8 border-[#ffffff] transform md:-translate-y-4 shadow-2xl flex flex-col">
            <div className="bg-[#ffffff] text-[#68121f] text-xs font-black py-1 px-3 rounded-full self-start mb-4 uppercase">Mais Popular</div>
            <h3 className="text-3xl font-black uppercase italic mb-2">Arquiba 100%</h3>
            <p className="text-sm text-gray-200 mb-6 font-bold uppercase">O plano do guerreiro tricolor</p>
            <div className="text-5xl font-black mb-8">R$ 95<span className="text-xl">,00/mês</span></div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-2">✓ 100% de desconto em ingressos</li>
              <li className="flex items-center gap-2">✓ Prioridade 1 na compra</li>
              <li className="flex items-center gap-2">✓ 1 Convidado com desconto</li>
              <li className="flex items-center gap-2">✓ Experiências exclusivas</li>
            </ul>
            <button className="w-full bg-[#ffffff] text-[#68121f] py-4 rounded font-black uppercase hover:bg-[#185347] hover:text-[#ffffff] transition-colors">
              Entre em contato
            </button>
          </div>

          {/* Plano 3 */}
          <div className="bg-[#185347] p-8 rounded-xl border-t-8 border-[#68121f] flex flex-col">
            <h3 className="text-3xl font-black uppercase italic mb-2">Arquiba Família</h3>
            <p className="text-sm text-gray-300 mb-6 font-bold uppercase">Tradição passada de pai para filho</p>
            <div className="text-5xl font-black mb-8">R$ 145<span className="text-xl">,00/mês</span></div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-2">✓ Titular + 2 Dependentes</li>
              <li className="flex items-center gap-2">✓ 100% de desconto em ingressos</li>
              <li className="flex items-center gap-2">✓ Prioridade Máxima</li>
            </ul>
            <button className="w-full bg-[#ffffff] text-[#185347] py-4 rounded font-black uppercase hover:bg-[#68121f] hover:text-[#ffffff] transition-colors">
              Entre em contato
            </button>
          </div>
        </div>
      </section>

      {/* Como Funciona o Convidado */}
      <section className="bg-[#ffffff] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-[#185347] text-4xl md:text-6xl font-black uppercase italic mb-12">Como funciona o Convidado</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-[#68121f] rounded-full flex items-center justify-center text-3xl mb-6">🎟️</div>
              <h4 className="text-[#185347] text-xl font-black uppercase mb-2">Acesse o Portal</h4>
              <p className="text-[#393939] font-medium">Logue na sua conta de sócio e escolha a partida desejada.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-[#185347] rounded-full flex items-center justify-center text-3xl mb-6">👤</div>
              <h4 className="text-[#185347] text-xl font-black uppercase mb-2">Adicione Amigos</h4>
              <p className="text-[#393939] font-medium">Insira o CPF do seu convidado no momento da compra.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-[#68121f] rounded-full flex items-center justify-center text-3xl mb-6">🏟️</div>
              <h4 className="text-[#185347] text-xl font-black uppercase mb-2">Vão ao Jogo</h4>
              <p className="text-[#393939] font-medium">O ingresso será carregado diretamente na carteirinha ou QR Code.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#171717] border-t border-[#393939] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black uppercase italic mb-2">Fluminense Football Club</h3>
            <p className="text-[#393939] font-bold uppercase">Laranjeiras, Rio de Janeiro - Brasil</p>
          </div>
          <div className="flex gap-6">
            <span className="text-2xl grayscale hover:grayscale-0 cursor-pointer transition-all">📸</span>
            <span className="text-2xl grayscale hover:grayscale-0 cursor-pointer transition-all">🐦</span>
            <span className="text-2xl grayscale hover:grayscale-0 cursor-pointer transition-all">🎥</span>
          </div>
          <p className="text-[#393939] text-sm font-bold uppercase">
            © 2024 Sócio Futebol - Tradição e Glória
          </p>
        </div>
      </footer>
    </main>
  );
}