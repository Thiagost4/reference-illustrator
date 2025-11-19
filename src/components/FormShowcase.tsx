import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const FormShowcase = () => {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Column 1: Standard States */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Estados Básicos</h3>
          
          {/* Standard Input */}
          <div className="space-y-2">
            <Label htmlFor="standard" className="text-sm font-medium">Padrão</Label>
            <Input id="standard" type="text" placeholder="digite aqui" />
            <p className="text-xs text-muted-foreground">Fundo cinza claro, borda neutra</p>
          </div>

          {/* Focused Input (simulated) */}
          <div className="space-y-2">
            <Label htmlFor="focused" className="text-sm font-medium">Digitando</Label>
            <Input 
              id="focused" 
              type="text" 
              placeholder="digitando" 
              className="bg-background border-primary ring-2 ring-primary"
            />
            <p className="text-xs text-muted-foreground">Fundo branco, borda rosa ao focar</p>
          </div>

          {/* Error Input */}
          <div className="space-y-2">
            <Label htmlFor="error" className="text-destructive text-sm font-medium">Erro</Label>
            <div className="relative">
              <Input 
                id="error" 
                type="text" 
                placeholder="Valor" 
                className="border-destructive bg-background pr-10"
              />
              <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-destructive" />
            </div>
            <p className="text-xs text-destructive">Mensagem de erro</p>
          </div>

          {/* Success Input */}
          <div className="space-y-2">
            <Label htmlFor="success" className="text-success text-sm font-medium">Sucesso</Label>
            <div className="relative">
              <Input 
                id="success" 
                type="text" 
                placeholder="Valor" 
                className="border-success bg-background pr-10"
              />
              <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-success" />
            </div>
            <p className="text-xs text-success">Campo validado com sucesso</p>
          </div>

          {/* Disabled Input */}
          <div className="space-y-2">
            <Label htmlFor="disabled" className="text-sm font-medium text-muted-foreground">Desativado</Label>
            <Input 
              id="disabled" 
              type="text" 
              placeholder="Desativado" 
              disabled
            />
            <p className="text-xs text-muted-foreground">Campo não editável</p>
          </div>
        </div>

        {/* Column 2: Mobile Form Example */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Mobile Formulário</h3>
          
          <div className="p-6 bg-card border border-border rounded-lg space-y-4 max-w-sm">
            <div className="space-y-2">
              <Label htmlFor="mobile-form" className="text-sm font-medium">Mobile Formulário</Label>
              <Input 
                id="mobile-form" 
                type="text" 
                placeholder="" 
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password-visible" className="text-sm font-medium">Senha</Label>
              <div className="relative">
                <Input 
                  id="password-visible" 
                  type="text" 
                  placeholder="" 
                  value="12345678"
                  className="bg-background pr-10"
                  readOnly
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground">
                  👁️
                </div>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <Checkbox id="remember-1" defaultChecked />
                <Label htmlFor="remember-1" className="text-xs font-normal">Lembrar Senha</Label>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password-hidden" className="text-sm font-medium">Senha</Label>
              <div className="relative">
                <Input 
                  id="password-hidden" 
                  type="password" 
                  placeholder="" 
                  value="12345678"
                  className="bg-background pr-10"
                  readOnly
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground">
                  🚫
                </div>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <Checkbox id="remember-2" defaultChecked />
                <Label htmlFor="remember-2" className="text-xs font-normal">Lembrar Senha</Label>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="disabled-mobile" className="text-sm font-medium text-muted-foreground">Desativado</Label>
              <Input 
                id="disabled-mobile" 
                type="text" 
                placeholder="Desativado" 
                disabled
              />
              <div className="flex items-center space-x-2 mt-2">
                <Checkbox id="remember-3" disabled />
                <Label htmlFor="remember-3" className="text-xs font-normal text-muted-foreground">Lembrar</Label>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3: Textarea */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Campo de Texto</h3>
          
          <div className="space-y-2">
            <Label htmlFor="textarea-1" className="text-sm font-medium">Campo de texto</Label>
            <Textarea 
              id="textarea-1" 
              placeholder="Campo de texto"
              className="min-h-[120px] resize-none bg-background"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="textarea-2" className="text-sm font-medium text-muted-foreground">Campo de texto</Label>
            <Textarea 
              id="textarea-2" 
              placeholder="Campo de texto"
              className="min-h-[120px] resize-none"
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormShowcase;
