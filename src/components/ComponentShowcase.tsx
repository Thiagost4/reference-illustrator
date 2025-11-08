import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Heart, Share2, MessageCircle, ShoppingCart, Star, Trash2 } from "lucide-react";

const ComponentShowcase = () => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="space-y-8">
      {/* Cards Section */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-foreground">Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Product Card */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <ShoppingCart className="h-16 w-16 text-primary" />
            </div>
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg">Produto Exemplo</CardTitle>
                <Badge variant="default">Novo</Badge>
              </div>
              <CardDescription>
                Descrição breve do produto com informações relevantes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                ))}
                <span className="text-sm text-muted-foreground">(4.5)</span>
              </div>
              <p className="text-2xl font-bold text-primary">R$ 99,90</p>
            </CardContent>
            <CardFooter className="gap-2">
              <Button className="flex-1">Comprar</Button>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => setLiked(!liked)}
              >
                <Heart className={liked ? "fill-danger text-danger" : ""} />
              </Button>
            </CardFooter>
          </Card>

          {/* Info Card */}
          <Card className="hover:border-primary transition-colors">
            <CardHeader>
              <CardTitle>Card Informativo</CardTitle>
              <CardDescription>
                Com ícones e badges para status
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Status:</span>
                <Badge variant="secondary">Ativo</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Tipo:</span>
                <Badge variant="outline">Premium</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Prioridade:</span>
                <Badge className="bg-success text-success-foreground">Alta</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" className="w-full">Ver Detalhes</Button>
            </CardFooter>
          </Card>

          {/* Social Card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Post Social</CardTitle>
              <CardDescription>2 horas atrás</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground">
                Exemplo de card para conteúdo social com interações e compartilhamento.
              </p>
            </CardContent>
            <CardFooter className="flex gap-4 border-t border-border pt-4">
              <Button variant="ghost" size="sm" className="gap-2">
                <Heart className="h-4 w-4" />
                <span className="text-xs">42</span>
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <MessageCircle className="h-4 w-4" />
                <span className="text-xs">12</span>
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <Share2 className="h-4 w-4" />
                <span className="text-xs">5</span>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Modals Section */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-foreground">Modais e Diálogos</h3>
        <div className="flex flex-wrap gap-4">
          {/* Standard Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button>Abrir Modal Padrão</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Título do Modal</DialogTitle>
                <DialogDescription>
                  Descrição do conteúdo do modal. Este é um exemplo de modal padrão com informações e ações.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <p className="text-sm text-foreground">
                  Conteúdo adicional do modal pode ser inserido aqui. Você pode adicionar formulários, listas ou qualquer outro componente.
                </p>
              </div>
              <DialogFooter>
                <Button variant="outline">Cancelar</Button>
                <Button>Confirmar</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Alert Dialog */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">Ação Destrutiva</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
                <AlertDialogDescription>
                  Esta ação não pode ser desfeita. Isso irá permanentemente deletar os dados selecionados.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                  Continuar
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          {/* Success Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-success text-success-foreground hover:bg-success/90">
                Modal de Sucesso
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2 text-success">
                  <div className="h-8 w-8 rounded-full bg-success/20 flex items-center justify-center">
                    ✓
                  </div>
                  Operação Concluída!
                </DialogTitle>
                <DialogDescription>
                  Sua ação foi realizada com sucesso. Você pode fechar esta janela.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button className="bg-success text-success-foreground hover:bg-success/90">
                  Fechar
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Badges Section */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-foreground">Badges e Status</h3>
        <div className="flex flex-wrap gap-3">
          <Badge variant="default">Primário</Badge>
          <Badge variant="secondary">Secundário</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Erro</Badge>
          <Badge className="bg-success text-success-foreground">Sucesso</Badge>
          <Badge className="bg-warning text-foreground">Aviso</Badge>
          <Badge className="bg-accent text-accent-foreground">Destaque</Badge>
        </div>
      </div>
    </div>
  );
};

export default ComponentShowcase;
