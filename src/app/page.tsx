import Image from "next/image";

export default function Home() {
  return (
    <main className="md:snap-y md:snap-mandatory md:h-screen min-h-[100svh] overflow-y-scroll">
      <div className="md:fixed inset-0 -z-10">
        <Image
          src="/images/home.png"
          alt="Water background"
          fill
          unoptimized
          priority
          className="object-cover"
        />
      </div>
      <section
        id="home"
        className="md:snap-start flex flex-col items-center justify-center h-screen text-center"
      >
        <h1 className="text-white text-8xl font-bebas mb-2">
          INÊS SOARES SILVA
        </h1>
        <p className="text-white font-bebas text-4xl mb-8">O MEU PORTFÓLIO</p>
        <div className="flex gap-6 flex-wrap justify-center">
          <Image
            src="/images/ines1.jpg"
            alt="Inês with flower"
            width={300}
            height={400}
            className="rounded-lg object-cover"
          />
          <Image
            src="/images/ines2.jpg"
            alt="Inês in front of blue door"
            width={300}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      </section>
      <section
        id="why-me"
        className="bg-gradient-to-b from-[#FFFBEA] via-white to-[#EAF6FF] md:snap-start h-screen flex items-center bg-white"
      >
        <div className="mx-auto w-full max-w-6xl px-6">
          <h2 className="text-[#0F6A67] text-4xl md:text-6xl font-bebas text-center mb-8">
            PORQUÊ TRABALHAR COMIGO?
          </h2>

          <div className="grid md:grid-cols-2 items-center gap-10">
            <div className="relative max-w-xl rounded-[24px] border border-[#166569] bg-[#FFF6BF] p-8 md:p-10 shadow-sm">
              {/* título dentro da caixa */}
              <p className="text-center uppercase tracking-[0.18em] leading-relaxed text-[#166569]/90 mb-6">
                CRIO CONTEÚDO AUTÊNTICO E ESTÉTICO, COM FOCO NA EXPERIÊNCIA
                REAL.
              </p>

              <div className="space-y-3 text-[#166569]">
                <p className="font-semibold text-lg">Ajudo a:</p>
                <ul className="list-disc pl-6 leading-relaxed">
                  <li>Aumentar a visibilidade da propriedade</li>
                  <li>
                    Gerar desejo de reserva com vídeos e fotos envolventes
                  </li>
                  <li>
                    Criar conteúdo alinhado com tendências de Reels/TikTok
                  </li>
                </ul>
              </div>

              <div className="absolute left-1/2 -bottom-8 -translate-x-1/2">
                <div className="relative">
                  <span className="absolute inset-0 translate-x-1 translate-y-1 -z-10 rounded-full bg-[#FFF6BF] border border-[#166569]" />
                  <a
                    href="#contacto"
                    className="inline-block rounded-full border border-[#166569] bg-white px-8 py-2.5
      uppercase tracking-[0.2em] text-[#0F6A67] shadow-[0_1px_0_0_rgba(0,0,0,0.15)]
      hover:bg-[#F7F7F7] transition-transform active:translate-x-1 active:translate-y-1 text-center"
                  >
                    Contactar
                  </a>
                </div>
              </div>
            </div>

            <Image
              src="/images/rio.jpg"
              alt="Inês na praia"
              width={380}
              height={500}
              className="rounded-2xl object-cover"
              priority
            />
          </div>
        </div>
      </section>
      <section
        id="portfolio"
        className="md:snap-start min-h-screen flex flex-col items-center justify-center bg-[#FAFAF5] px-6 py-16"
      >
        <h2 className="text-[#0F6A67] text-4xl md:text-6xl font-bebas text-center mb-4">
          O MEU PORTFÓLIO
        </h2>
        <p className="text-center text-[#2B2B2B]/80 max-w-3xl mb-12 uppercase tracking-wide">
          Travel Storytelling – vlogs curtos para Reels/TikTok, com narrativa em
          1ª pessoa que transmite imersão, emoção e curiosidade.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center">
            {/* Container para o vídeo e decorações */}
            <div className="relative w-[260px]">
              {/* Wrapper do vídeo: arredondamento ajustado e position relative */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-lg w-[260px] aspect-[9/16] bg-black">
                <video
                  src="/videos/casaDaMadeira.mov"
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                />
              </div>

              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span
                  className="rounded-full border border-[#94C37E] bg-[#D7F5C5]
                   px-5 py-1.5 text-sm font-semibold tracking-[0.1em] text-[#5A8444]"
                >
                  HOSPEDAGEM
                </span>
              </div>
            </div>

            {/* Texto abaixo do vídeo */}
            <div className="mt-8 text-center text-[#9B7BF6]">
              <p className="text-xl font-semibold">Storytelling</p>
              <p className="mt-1 text-base">
                Casa da Madeira -<br />
                Petrópolis, Brasil
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            {/* Container para o vídeo e decorações */}
            <div className="relative w-[260px]">
              {/* Wrapper do vídeo: arredondamento ajustado e position relative */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-lg w-[260px] aspect-[9/16] bg-black">
                <video
                  src="/videos/parqueDosMonges.mov"
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                />
              </div>

              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span
                  className="rounded-full border border-[#94C37E] bg-[#D7F5C5]
                   px-5 py-1.5 text-sm font-semibold tracking-[0.1em] text-[#5A8444]"
                >
                  HOSPEDAGEM
                </span>
              </div>
            </div>

            {/* Texto abaixo do vídeo */}
            <div className="mt-8 text-center text-[#9B7BF6]">
              <p className="text-xl font-semibold">Storytelling</p>
              <p className="mt-1 text-base">
                Parque dos Monges -<br />
                Alcobaça, Portugal
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            {/* Container para o vídeo e decorações */}
            <div className="relative w-[260px]">
              {/* Wrapper do vídeo: arredondamento ajustado e position relative */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-lg w-[260px] aspect-[9/16] bg-black">
                <video
                  src="/videos/agafay.mov"
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                />
              </div>

              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span
                  className="rounded-full border border-[#94C37E] bg-[#D7F5C5]
                   px-5 py-1.5 text-sm font-semibold tracking-[0.1em] text-[#5A8444]"
                >
                  HOSPEDAGEM
                </span>
              </div>
            </div>

            {/* Texto abaixo do vídeo */}
            <div className="mt-8 text-center text-[#9B7BF6]">
              <p className="text-xl font-semibold">Storytelling</p>
              <p className="mt-1 text-base">
                Deserto Agafay -<br />
                Marrakech, Marrocos
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Secção fotografias 1 */}
      <section
        id="portfolio"
        className="bg-gradient-to-b from-[#EAF4FF] to-white md:snap-start min-h-screen flex flex-col items-center justify-center bg-[#FAFAF5] px-6 py-16"
      >
        <h2 className="text-[#0F6A67] text-4xl md:text-6xl font-bebas text-center mb-4">
          O MEU PORTFÓLIO
        </h2>
        <p className="text-center text-[#2B2B2B]/80 max-w-3xl mb-12 uppercase tracking-wide">
          fotografias dos espaços & experiências
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center">
            <div className="relative w-[260px]">
              <div className="relative rounded-[2rem] overflow-hidden shadow-lg w-[260px] aspect-[9/16] bg-black">
                <Image
                  src="/images/casaDaMadeira.jpg"
                  alt="Breakfast in the nature"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>

              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span
                  className="rounded-full border border-[#94C37E] bg-[#D7F5C5]
                   px-5 py-1.5 text-sm font-semibold tracking-[0.1em] text-[#5A8444]"
                >
                  VIAGEM
                </span>
              </div>
            </div>

            <div className="mt-8 text-center text-[#9B7BF6]">
              <p className="text-xl font-semibold">Demonstração de Espaço</p>
              <p className="mt-1 text-base">
                Casa da Madeira -<br />
                Petrópolis, Brasil
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            {/* Container para o vídeo e decorações */}
            <div className="relative w-[260px]">
              {/* Wrapper do vídeo: arredondamento ajustado e position relative */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-lg w-[260px] aspect-[9/16] bg-black">
                <Image
                  src="/images/parqueDosMonges.jpg"
                  alt="Relaxing by the lake"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>

              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span
                  className="rounded-full border border-[#94C37E] bg-[#D7F5C5]
                   px-5 py-1.5 text-sm font-semibold tracking-[0.1em] text-[#5A8444]"
                >
                  VIAGEM
                </span>
              </div>
            </div>

            {/* Texto abaixo do vídeo */}
            <div className="mt-8 text-center text-[#9B7BF6]">
              <p className="text-xl font-semibold">Demonstração de Espaço</p>
              <p className="mt-1 text-base">
                Parque dos Monges -<br />
                Alcobaça, Portugal
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            {/* Container para o vídeo e decorações */}
            <div className="relative w-[260px]">
              {/* Wrapper do vídeo: arredondamento ajustado e position relative */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-lg w-[260px] aspect-[9/16] bg-black">
                <Image
                  src="/images/agafay.jpg"
                  alt="Sunset at Agafay desert"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>

              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span
                  className="rounded-full border border-[#94C37E] bg-[#D7F5C5]
                   px-5 py-1.5 text-sm font-semibold tracking-[0.1em] text-[#5A8444]"
                >
                  VIAGEM
                </span>
              </div>
            </div>

            {/* Texto abaixo do vídeo */}
            <div className="mt-8 text-center text-[#9B7BF6]">
              <p className="text-xl font-semibold">Demonstração de Espaço</p>
              <p className="mt-1 text-base">
                Deserto Agafay -<br />
                Marrakech, Marrocos
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Secção fotografias 2 */}
      <section
        id="portfolio"
        className=" bg-gradient-to-b from-[#FFFBEA] via-white to-[#EAF6FF] md:snap-start min-h-screen flex flex-col items-center justify-center bg-[#FAFAF5] px-6 py-16"
      >
        <h2 className="text-[#0F6A67] text-4xl md:text-6xl font-bebas text-center mb-4">
          O MEU PORTFÓLIO
        </h2>
        <p className="text-center text-[#2B2B2B]/80 max-w-3xl mb-12 uppercase tracking-wide">
          fotografias dos espaços & experiências
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center">
            <div className="relative w-[260px]">
              <div className="relative rounded-[2rem] overflow-hidden shadow-lg w-[260px] aspect-[9/16] bg-black">
                <Image
                  src="/images/riad.jpg"
                  alt="Relaxar na piscina da Riad Roxanne"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>

              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span
                  className="rounded-full border border-[#94C37E] bg-[#D7F5C5]
                   px-5 py-1.5 text-sm font-semibold tracking-[0.1em] text-[#5A8444]"
                >
                  VIAGEM
                </span>
              </div>
            </div>

            {/* Texto abaixo do vídeo */}
            <div className="mt-8 text-center text-[#9B7BF6]">
              <p className="text-xl font-semibold">Demonstração de Espaço</p>
              <p className="mt-1 text-base">
                Riad Roxanne -<br />
                Marrakech, Marrocos
              </p>
            </div>
          </div>
          {/* Pequeno Almoco - Pousada Toca do Mar */}
          <div className="flex flex-col items-center">
            <div className="relative w-[260px]">
              <div className="relative rounded-[2rem] overflow-hidden shadow-lg w-[260px] aspect-[9/16] bg-black">
                <Image
                  src="/images/pequenoAlmoco.jpg"
                  alt="Tomar o pequeno almoço na pousada toca do mar"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>

              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span
                  className="rounded-full border border-[#94C37E] bg-[#D7F5C5]
                   px-5 py-1.5 text-sm font-semibold tracking-[0.1em] text-[#5A8444]"
                >
                  VIAGEM
                </span>
              </div>
            </div>

            <div className="mt-8 text-center text-[#9B7BF6]">
              <p className="text-xl font-semibold">Demonstração de Espaço</p>
              <p className="mt-1 text-base">
                Pousada Toca do Mar -<br />
                Ilha Grande, Brasil
              </p>
            </div>
          </div>
          {/* Paddle - Mayan Monkeys */}
          <div className="flex flex-col items-center">
            <div className="relative w-[260px]">
              <div className="relative rounded-[2rem] overflow-hidden shadow-lg w-[260px] aspect-[9/16] bg-black">
                <Image
                  src="/images/paddle.jpg"
                  alt="Paddle no Mayan Monkeys"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>

              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span
                  className="rounded-full border border-[#94C37E] bg-[#D7F5C5]
                   px-5 py-1.5 text-sm font-semibold tracking-[0.1em] text-[#5A8444]"
                >
                  VIAGEM
                </span>
              </div>
            </div>

            <div className="mt-8 text-center text-[#9B7BF6]">
              <p className="text-xl font-semibold">Demonstração de Espaço</p>
              <p className="mt-1 text-base">
                Mayan Monkeys -<br />
                Isla Mujeres, Mexico
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Porque criar conteudo 2 */}
      <section
        id="why-me"
        className="bg-gradient-to-b from-[#EAF9F7] to-[#CDEDE9] md:snap-start h-screen flex items-center bg-white"
      >
        <div className="mx-auto w-full max-w-6xl px-6">
          <h2 className="text-[#0F6A67] text-4xl md:text-6xl font-bebas text-center mb-8">
            PORQUE CRIAR CONTEÚDO AUTÊNTICO É UMA BOA OPÇÃO?
          </h2>

          <div className="grid md:grid-cols-2 items-center gap-10">
            <div className="relative max-w-xl rounded-[24px] border border-[#166569] bg-[#FFF6BF] p-8 md:p-10 shadow-sm">
              <div className="space-y-3 text-[#0F6A67]">
                <ul className="list-disc pl-6 leading-relaxed">
                  <li>
                    {" "}
                    Mostra o espaço através da perspetiva real de quem o vive
                  </li>
                  <li>
                    Cria ligação emocional e desperta o desejo de viver a
                    experiência
                  </li>
                  <li>
                    Inspira confiança - fotos e vídeos genuínos passam
                    credibilidade
                  </li>
                  <li>
                    Gera material que pode ser reutilizado nas redes, site e
                    anúncios
                  </li>
                </ul>
              </div>

              <div className="absolute left-1/2 -bottom-8 -translate-x-1/2">
                <div className="relative">
                  <span className="absolute inset-0 translate-x-1 translate-y-1 -z-10 rounded-full bg-[#FFF6BF] border border-[#166569]" />
                  <a
                    href="#contacto"
                    className="inline-block rounded-full border border-[#166569] bg-white px-8 py-2.5
      uppercase tracking-[0.2em] text-[#0F6A67] shadow-[0_1px_0_0_rgba(0,0,0,0.15)]
      hover:bg-[#F7F7F7] transition-transform active:translate-x-1 active:translate-y-1 text-center"
                  >
                    Contactar
                  </a>
                </div>
              </div>
            </div>

            <Image
              src="/images/rede.jpg"
              alt="Inês numa cama de rede"
              width={380}
              height={500}
              className="rounded-2xl object-cover"
              priority
            />
          </div>
        </div>
      </section>
      {/* Pacote */}
      <section
        id="pacote"
        className="bg-[#F8F7F4] md:snap-start py-20 flex items-center"
      >
        <div className="mx-auto w-full max-w-4xl px-6">
          {/* Título Principal */}
          <h2 className="text-[#2D7A74] text-5xl md:text-6xl font-bebas text-center mb-24">
            PACOTE
          </h2>

          {/* Grid para os cartões */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20">
            {/* Card de Vídeos */}
            <div className="relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#D5E8C1] border border-[#166569] rounded-full px-8 py-2">
                <h3 className="text-[#2D7A74] text-xl font-bold">VÍDEOS</h3>
              </div>
              <div className="rounded-3xl bg-[#D5E8C1] p-8 pt-12 h-full flex flex-col justify-center border border-[#166569]">
                <p className="text-center text-[#2D7A74] text-lg">
                  - 1 a 2 vídeos curtos em formato Reels/Tik Tok (storytelling
                  da experiência) -
                </p>
              </div>
            </div>

            {/* Card de Fotos */}
            <div className="relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#FDF0C8] rounded-full border border-[#166569] px-8 py-2">
                <h3 className="text-[#2D7A74] text-xl font-bold">FOTOS</h3>
              </div>
              <div className="rounded-3xl bg-[#FDF0C8] border border-[#166569] p-8 pt-12 h-full flex flex-col justify-center">
                <p className="text-center text-[#2D7A74] text-lg">
                  - 5 a 10 fotografias editadas (lifestyle e demonstração do
                  espaço) -
                </p>
              </div>
            </div>

            {/* Card de Entrega & Partilha */}
            <div className="relative md:col-span-2">
              <div className=" border border-[#166569] absolute -top-6 left-1/2 -translate-x-1/2 bg-[#F8F7F4] rounded-full px-8 py-2">
                <h3 className="text-[#2D7A74] text-xl font-bold">
                  ENTREGA & PARTILHA
                </h3>
              </div>
              <div className="rounded-3xl border border-[#166569] p-8 pt-12">
                <ul className="space-y-3 text-center text-[#2D7A74] text-lg">
                  <li>
                    - Entrega do conteúdo em alta resolução para o uso da marca
                  </li>
                  <li>
                    - Possibilidade de partilha nas minhas redes sociais,
                    alcançando um público interessado em viagens e lifestyle
                    (opcional)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* --- INÍCIO DA SEÇÃO DO BOTÃO ATUALIZADA --- */}
          <div className="text-center mt-20">
            <p className="text-[#8A7EB5] text-xl font-bold mb-8">
              PRECISAM DE MAIS VÍDEOS? <br /> ENTREM EM CONTACTO PARA SABER OS
              VALORES MENSAIS
            </p>

            {/* Container do botão para posicionamento da sombra */}
            <div className="relative inline-block group">
              {/* Elemento da Sombra (posicionado atrás) */}
              <span className="absolute inset-0 rounded-full bg-[#8A7EB5] border border-[#2B2B2B] transform translate-x-1 translate-y-1"></span>

              {/* Link Principal (posicionado na frente) */}
              <a
                href="#contacto"
                className="relative block rounded-full border border-[#8A7EB5] bg-white px-12 py-3
    font-bold text-[#2D7A74] text-lg tracking-widest
    transition-transform group-hover:-translate-x-0 group-hover:-translate-y-0 
    active:translate-x-1 active:translate-y-1 text-center"
              >
                CONTACTAR
              </a>
            </div>
          </div>
          {/* --- FIM DA SEÇÃO DO BOTÃO ATUALIZADA --- */}
        </div>
      </section>
      <section
        id="contacto"
        className="relative h-screen flex flex-col justify-center items-center text-white md:snap-start"
      >
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold">
            ENTREM EM CONTACTO!
          </h2>
          <p className="uppercase tracking-wide text-lg md:text-xl">
            Porto, Portugal
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div>
              <p className="uppercase tracking-widest text-sm">Instagram:</p>
              <a
                href="https://instagram.com/inesoaresilva"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                @inesoaresilva
              </a>
            </div>
            <div>
              <p className="uppercase tracking-widest text-sm">TikTok:</p>
              <a
                href="https://tiktok.com/@atineslife"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                @atineslife
              </a>
            </div>
            <div>
              <p className="uppercase tracking-widest text-sm">Email:</p>
              <a href="mailto:inesoaresilva@gmail.com" className="underline">
                inesoaresilva@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Barra verde no fundo */}
        <div className="absolute bottom-0 left-0 w-full h-6 bg-[#C8ED90]" />
      </section>
    </main>
  );
}
