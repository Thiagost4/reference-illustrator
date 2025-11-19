import { Button } from "@/components/ui/button";

const ButtonShowcase = () => {
  return (
    <div className="space-y-12">
      {/* Primary Filled Buttons */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-foreground mb-2">Botão Primário</h3>
        <p className="text-sm text-muted-foreground mb-4">Fundo sólido rosa vibrante</p>
        <div className="flex flex-wrap gap-6 items-center">
          <div className="space-y-2">
            <Button variant="default">Botão primário</Button>
            <p className="text-xs text-muted-foreground text-center">Padrão</p>
          </div>
          <div className="space-y-2">
            <Button variant="default" className="hover:bg-primary/90">Hover</Button>
            <p className="text-xs text-muted-foreground text-center">Hover</p>
          </div>
          <div className="space-y-2">
            <Button variant="default" className="active:bg-primary/80">Active</Button>
            <p className="text-xs text-muted-foreground text-center">Active</p>
          </div>
          <div className="space-y-2">
            <Button variant="default" disabled>Disable</Button>
            <p className="text-xs text-muted-foreground text-center">Desabilitado</p>
          </div>
        </div>
      </div>

      {/* Secondary Filled Buttons */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-foreground mb-2">Botão Secundário</h3>
        <p className="text-sm text-muted-foreground mb-4">Fundo sólido roxo impact</p>
        <div className="flex flex-wrap gap-6 items-center">
          <div className="space-y-2">
            <Button variant="secondary">Botão secundário</Button>
            <p className="text-xs text-muted-foreground text-center">Padrão</p>
          </div>
          <div className="space-y-2">
            <Button variant="secondary" className="hover:bg-secondary/90">Hover</Button>
            <p className="text-xs text-muted-foreground text-center">Hover</p>
          </div>
          <div className="space-y-2">
            <Button variant="secondary" className="active:bg-secondary/80">Active</Button>
            <p className="text-xs text-muted-foreground text-center">Active</p>
          </div>
          <div className="space-y-2">
            <Button variant="secondary" disabled>Disable</Button>
            <p className="text-xs text-muted-foreground text-center">Desabilitado</p>
          </div>
        </div>
      </div>

      {/* Outline Primary Buttons */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-foreground mb-2">Botão Primário Outline</h3>
        <p className="text-sm text-muted-foreground mb-4">Contorno rosa vibrante</p>
        <div className="flex flex-wrap gap-6 items-center">
          <div className="space-y-2">
            <Button variant="outline">Botão primário</Button>
            <p className="text-xs text-muted-foreground text-center">Padrão</p>
          </div>
          <div className="space-y-2">
            <Button variant="outline" className="hover:bg-primary/5">Botão primário</Button>
            <p className="text-xs text-muted-foreground text-center">Hover</p>
          </div>
          <div className="space-y-2">
            <Button variant="outline" className="active:bg-primary/10">Active</Button>
            <p className="text-xs text-muted-foreground text-center">Active</p>
          </div>
          <div className="space-y-2">
            <Button variant="outline" disabled>Disable</Button>
            <p className="text-xs text-muted-foreground text-center">Desabilitado</p>
          </div>
        </div>
      </div>

      {/* Outline Secondary Buttons */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-foreground mb-2">Botão Secundário Outline</h3>
        <p className="text-sm text-muted-foreground mb-4">Contorno roxo impact</p>
        <div className="flex flex-wrap gap-6 items-center">
          <div className="space-y-2">
            <Button variant="outline-secondary">Botão secundário</Button>
            <p className="text-xs text-muted-foreground text-center">Padrão</p>
          </div>
          <div className="space-y-2">
            <Button variant="outline-secondary" className="hover:bg-secondary/5">Botão secundário</Button>
            <p className="text-xs text-muted-foreground text-center">Hover</p>
          </div>
          <div className="space-y-2">
            <Button variant="outline-secondary" className="active:bg-secondary/10">Active</Button>
            <p className="text-xs text-muted-foreground text-center">Active</p>
          </div>
          <div className="space-y-2">
            <Button variant="outline-secondary" disabled>Disable</Button>
            <p className="text-xs text-muted-foreground text-center">Desabilitado</p>
          </div>
        </div>
      </div>

      {/* Status Buttons */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-foreground mb-2">Botões de Status</h3>
        <p className="text-sm text-muted-foreground mb-4">Estados de sucesso e erro</p>
        <div className="flex flex-wrap gap-6 items-center">
          <Button variant="success">Sucesso</Button>
          <Button variant="destructive">Erro/Danger</Button>
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-foreground mb-2">Tamanhos</h3>
        <p className="text-sm text-muted-foreground mb-4">Pequeno, padrão e grande</p>
        <div className="flex flex-wrap items-center gap-6">
          <Button variant="default" size="sm">Pequeno</Button>
          <Button variant="default" size="default">Padrão</Button>
          <Button variant="default" size="lg">Grande</Button>
        </div>
      </div>
    </div>
  );
};

export default ButtonShowcase;
