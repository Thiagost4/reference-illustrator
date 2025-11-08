const TypographyShowcase = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-foreground">
          Tipografia Principal - Poppins
        </h1>
        <p className="text-sm text-muted-foreground">Fonte limpa e moderna para títulos</p>
      </div>

      <div className="space-y-2">
        <h2 className="text-3xl font-semibold text-foreground">
          Título H2 - PlayerCore
        </h2>
        <p className="text-sm text-muted-foreground">Subtítulos em Poppins Semibold</p>
      </div>

      <div className="space-y-2">
        <h3 className="text-2xl font-medium text-foreground">
          Título H3 - Design System
        </h3>
        <p className="text-sm text-muted-foreground">Poppins Medium para seções</p>
      </div>

      <div className="space-y-2">
        <p className="text-base text-foreground leading-relaxed">
          Este é um exemplo de texto em corpo padrão. A fonte Poppins é altamente legível e ideal para longos blocos de texto, interfaces, documentos e apresentações. Sua clareza e funcionalidade garantem boa experiência de leitura.
        </p>
        <p className="text-sm text-muted-foreground">Poppins Regular para corpo de texto</p>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground leading-relaxed">
          Texto menor em cor secundária (muted) para informações complementares e microcopy. Mantém a legibilidade mesmo em tamanhos reduzidos.
        </p>
        <p className="text-xs text-muted-foreground">Tamanho pequeno para metadados</p>
      </div>

      <div className="space-y-2 p-4 bg-muted rounded-lg">
        <p className="font-handwriting text-lg text-primary">
          "Fonte decorativa para dar caráter humano e autenticidade"
        </p>
        <p className="text-xs text-muted-foreground">
          Estilo informal para frases motivacionais (simula Crayon Hand)
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 text-center">
        <div className="p-4 bg-card border border-border rounded-lg">
          <p className="text-3xl font-bold text-foreground">1234567890</p>
          <p className="text-xs text-muted-foreground mt-2">Numerais em Poppins</p>
        </div>
        <div className="p-4 bg-card border border-border rounded-lg">
          <p className="text-xs uppercase tracking-wider font-semibold text-primary">ABCDEFGHIJKLM</p>
          <p className="text-xs text-muted-foreground mt-2">Maiúsculas para destaques</p>
        </div>
      </div>
    </div>
  );
};

export default TypographyShowcase;
