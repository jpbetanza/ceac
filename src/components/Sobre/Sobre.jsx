const Sobre = () => {
  return (
    <div id="sobre" className="grid gap-5">
      <div className="flex gap-7 items-center">
        <h1 className="text-[32px] font-bold text-[#1E1E1E]">Sobre</h1>
        <div className="w-[131px] h-[1px] bg-[#1E1E1E] grow"></div>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly gap-[2rem] md:gap-[7rem] text-center text-[#1E1E1E]">
        <p className="text-[20px]">
          Nossa missão é promover o entendimento e a prática dos princípios
          espíritas, enfatizando a fraternidade, a solidariedade e o respeito
          mútuo. Valorizamos a busca constante pela evolução moral e espiritual
          de cada indivíduo.
        </p>
        <p className="text-[20px]">
          Oferecemos uma ampla variedade de atividades, incluindo palestras
          esclarecedoras, grupos de estudo de obras espíritas e eventos que
          convidam à reflexão e ao crescimento pessoal. Estas atividades visam
          enriquecer sua jornada espiritual e promover o compartilhamento de
          conhecimento.
        </p>
        <p className="text-[20px]">
          Aqui você encontrará uma comunidade calorosa e acolhedora, pronta para
          oferecer apoio e compartilhar experiências. Nossa equipe e membros
          estão comprometidos em tornar sua experiência conosco significativa e
          enriquecedora.
        </p>
      </div>
    </div>
  );
};
export default Sobre;
