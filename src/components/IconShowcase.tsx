import { 
  Check, 
  X, 
  Plus, 
  Search, 
  Settings, 
  MessageCircle,
  Send,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Mail,
  Phone
} from "lucide-react";

const IconShowcase = () => {
  const interfaceIcons = [
    { name: "Check", icon: Check, description: "Confirmação e sucesso" },
    { name: "Close (X)", icon: X, description: "Fechar e cancelar" },
    { name: "Add (+)", icon: Plus, description: "Adicionar novos itens" },
    { name: "Search", icon: Search, description: "Busca e pesquisa" },
    { name: "Settings", icon: Settings, description: "Configurações" },
    { name: "Message", icon: MessageCircle, description: "Mensagens" },
    { name: "Send", icon: Send, description: "Enviar" },
  ];

  const socialIcons = [
    { name: "WhatsApp", icon: MessageCircle, description: "WhatsApp" },
    { name: "Telegram", icon: Send, description: "Telegram" },
    { name: "Instagram", icon: Instagram, description: "Instagram" },
    { name: "Facebook", icon: Facebook, description: "Facebook" },
    { name: "LinkedIn", icon: Linkedin, description: "LinkedIn" },
    { name: "Twitter", icon: Twitter, description: "Twitter/X" },
    { name: "Email", icon: Mail, description: "Email" },
    { name: "Phone", icon: Phone, description: "Telefone" },
  ];

  return (
    <div className="space-y-8">
      {/* Interface Icons */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-foreground">Ícones de Interface</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {interfaceIcons.map((item) => (
            <div 
              key={item.name} 
              className="flex flex-col items-center justify-center p-6 border-2 border-border rounded-lg bg-card hover:border-primary transition-colors"
            >
              <item.icon className="h-8 w-8 text-primary mb-3" />
              <p className="font-semibold text-foreground text-sm">{item.name}</p>
              <p className="text-xs text-muted-foreground text-center mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Social Icons */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-foreground">Ícones de Redes Sociais</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {socialIcons.map((item) => (
            <div 
              key={item.name} 
              className="flex flex-col items-center justify-center p-6 border-2 border-border rounded-lg bg-card hover:border-secondary transition-colors"
            >
              <item.icon className="h-8 w-8 text-secondary mb-3" />
              <p className="font-semibold text-foreground text-sm">{item.name}</p>
              <p className="text-xs text-muted-foreground text-center mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Icon Sizes */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-foreground">Tamanhos de Ícones</h3>
        <div className="flex items-end gap-8 p-6 border-2 border-border rounded-lg bg-card">
          <div className="flex flex-col items-center gap-2">
            <Settings className="h-4 w-4 text-primary" />
            <span className="text-xs text-muted-foreground">16px</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Settings className="h-5 w-5 text-primary" />
            <span className="text-xs text-muted-foreground">20px</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Settings className="h-6 w-6 text-primary" />
            <span className="text-xs text-muted-foreground">24px</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Settings className="h-8 w-8 text-primary" />
            <span className="text-xs text-muted-foreground">32px</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Settings className="h-12 w-12 text-primary" />
            <span className="text-xs text-muted-foreground">48px</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconShowcase;
