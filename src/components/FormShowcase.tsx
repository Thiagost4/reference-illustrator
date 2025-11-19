import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle2, Mail, Bell, Upload, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const FormShowcase = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
  });

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

      {/* Advanced Form Components Section */}
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-6">Componentes Avançados</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Profile Form with Avatar */}
          <div className="p-6 border border-border rounded-lg bg-card space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Upload & Profile</h4>
            
            <div className="flex items-center gap-6">
              <Avatar className="w-20 h-20">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="text-lg bg-primary/10 text-primary">PC</AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <Button variant="outline" className="gap-2">
                  <Upload className="w-4 h-4" />
                  Enviar foto
                </Button>
                <p className="text-sm text-muted-foreground">
                  JPG, PNG ou GIF. Máx 2MB.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Nome</Label>
                <Input id="firstName" defaultValue="Thiago" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Sobrenome</Label>
                <Input id="lastName" defaultValue="Teles" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="profileEmail">E-mail</Label>
              <Input id="profileEmail" type="email" defaultValue="thiago@playercore.com" />
            </div>
          </div>

          {/* Select & Switches */}
          <div className="p-6 border border-border rounded-lg bg-card space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Select & Switches</h4>
            
            <div className="space-y-2">
              <Label htmlFor="timezone">Fuso horário</Label>
              <Select defaultValue="brt">
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o fuso horário" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="brt">Brasília (BRT)</SelectItem>
                  <SelectItem value="utc">UTC</SelectItem>
                  <SelectItem value="art">Buenos Aires (ART)</SelectItem>
                  <SelectItem value="pt">Lisboa (WET)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="theme">Tema</Label>
              <Select defaultValue="light">
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o tema" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Claro</SelectItem>
                  <SelectItem value="dark">Escuro</SelectItem>
                  <SelectItem value="system">Sistema</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4 pt-4 border-t border-border">
              <h5 className="text-sm font-medium text-foreground">Notificações</h5>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm font-medium">E-mail</div>
                    <div className="text-xs text-muted-foreground">Alertas por e-mail</div>
                  </div>
                </div>
                <Switch
                  checked={notifications.email}
                  onCheckedChange={(value) => setNotifications(prev => ({ ...prev, email: value }))}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm font-medium">Push</div>
                    <div className="text-xs text-muted-foreground">Notificações push</div>
                  </div>
                </div>
                <Switch
                  checked={notifications.push}
                  onCheckedChange={(value) => setNotifications(prev => ({ ...prev, push: value }))}
                />
              </div>
            </div>
          </div>

          {/* Password with Toggle */}
          <div className="p-6 border border-border rounded-lg bg-card space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Senha com Toggle</h4>
            
            <div className="space-y-2">
              <Label htmlFor="currentPassword">Senha atual</Label>
              <div className="relative">
                <Input
                  id="currentPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Digite sua senha atual"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="newPassword">Nova senha</Label>
              <Input id="newPassword" type="password" placeholder="Crie uma nova senha" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirmar nova senha</Label>
              <Input id="confirmPassword" type="password" placeholder="Repita a nova senha" />
            </div>
          </div>

          {/* Bio Textarea */}
          <div className="p-6 border border-border rounded-lg bg-card space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Textarea</h4>
            
            <div className="space-y-2">
              <Label htmlFor="bio">Sobre você</Label>
              <Textarea
                id="bio"
                placeholder="Ex: Responsável pela operação e retenção de jogadores..."
                defaultValue="Head de Produto focado em retenção, churn e automação de jornadas no iGaming."
                rows={5}
              />
              <p className="text-xs text-muted-foreground">Máximo de 500 caracteres</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormShowcase;
