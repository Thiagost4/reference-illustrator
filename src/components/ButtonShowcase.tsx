import { Button } from "@/components/ui/button";

const ButtonShowcase = () => {
  return (
    <div className="space-y-8">
      {/* Primary Buttons */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">Botão Primário (Rosa Vibrante)</h3>
        <div className="flex flex-wrap gap-4">
          <div className="space-y-2">
            <Button variant="default" size="default">Padrão</Button>
            <p className="text-xs text-muted-foreground">Estado: Padrão</p>
          </div>
          <div className="space-y-2">
            <Button variant="default" size="default" className="hover:bg-accent">Hover</Button>
            <p className="text-xs text-muted-foreground">Estado: Hover</p>
          </div>
          <div className="space-y-2">
            <Button variant="default" size="default" disabled>Desabilitado</Button>
            <p className="text-xs text-muted-foreground">Estado: Desabilitado</p>
          </div>
        </div>
      </div>

      {/* Secondary Buttons */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">Botão Secundário (Roxo Impact)</h3>
        <div className="flex flex-wrap gap-4">
          <div className="space-y-2">
            <Button variant="secondary" size="default">Padrão</Button>
            <p className="text-xs text-muted-foreground">Estado: Padrão</p>
          </div>
          <div className="space-y-2">
            <Button variant="secondary" size="default" className="hover:bg-accent">Hover</Button>
            <p className="text-xs text-muted-foreground">Estado: Hover</p>
          </div>
          <div className="space-y-2">
            <Button variant="secondary" size="default" disabled>Desabilitado</Button>
            <p className="text-xs text-muted-foreground">Estado: Desabilitado</p>
          </div>
        </div>
      </div>

      {/* Outline Buttons */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">Botões Outline (Contorno)</h3>
        <div className="flex flex-wrap gap-4">
          <div className="space-y-2">
            <Button variant="outline" size="default">Primário Outline</Button>
            <p className="text-xs text-muted-foreground">Contorno Rosa</p>
          </div>
          <div className="space-y-2">
            <Button variant="outline-secondary" size="default">Secundário Outline</Button>
            <p className="text-xs text-muted-foreground">Contorno Roxo</p>
          </div>
        </div>
      </div>

      {/* Status Buttons */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">Botões de Status</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="success" size="default">Sucesso</Button>
          <Button variant="destructive" size="default">Erro/Danger</Button>
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">Tamanhos</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="default" size="sm">Pequeno</Button>
          <Button variant="default" size="default">Padrão</Button>
          <Button variant="default" size="lg">Grande</Button>
        </div>
      </div>
    </div>
  );
};

export default ButtonShowcase;
