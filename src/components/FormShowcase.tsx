import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const FormShowcase = () => {
  return (
    <div className="space-y-8 max-w-md">
      {/* Standard Input */}
      <div className="space-y-2">
        <Label htmlFor="standard">Campo Padrão</Label>
        <Input id="standard" type="text" placeholder="Digite aqui..." />
        <p className="text-xs text-muted-foreground">Fundo cinza claro, borda padrão</p>
      </div>

      {/* Focused Input (simulated) */}
      <div className="space-y-2">
        <Label htmlFor="focused">Campo em Foco (Digitando)</Label>
        <Input 
          id="focused" 
          type="text" 
          placeholder="Digite aqui..." 
          className="bg-background border-primary ring-2 ring-primary"
        />
        <p className="text-xs text-muted-foreground">Borda rosa vibrante ao focar</p>
      </div>

      {/* Error Input */}
      <div className="space-y-2">
        <Label htmlFor="error" className="text-destructive">Campo com Erro</Label>
        <div className="relative">
          <Input 
            id="error" 
            type="text" 
            placeholder="Email inválido" 
            className="border-destructive pr-10"
          />
          <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-destructive" />
        </div>
        <p className="text-xs text-destructive">Borda e ícone vermelhos para erros</p>
      </div>

      {/* Success Input */}
      <div className="space-y-2">
        <Label htmlFor="success" className="text-success">Campo Validado</Label>
        <div className="relative">
          <Input 
            id="success" 
            type="text" 
            placeholder="email@valido.com" 
            className="border-success pr-10"
          />
          <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-success" />
        </div>
        <p className="text-xs text-success">Borda e ícone verdes para validação</p>
      </div>

      {/* Disabled Input */}
      <div className="space-y-2">
        <Label htmlFor="disabled">Campo Desativado</Label>
        <Input 
          id="disabled" 
          type="text" 
          placeholder="Não editável" 
          disabled
        />
        <p className="text-xs text-muted-foreground">Fundo cinza, não editável</p>
      </div>

      {/* Textarea */}
      <div className="space-y-2">
        <Label htmlFor="textarea">Campo de Texto Multi-linha</Label>
        <Textarea 
          id="textarea" 
          placeholder="Digite seu texto aqui..."
          className="min-h-[100px] resize-none"
        />
      </div>

      {/* Checkbox */}
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label 
          htmlFor="terms" 
          className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Aceito os termos e condições
        </Label>
      </div>
    </div>
  );
};

export default FormShowcase;
