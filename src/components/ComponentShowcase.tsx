import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { TrendingUp, TrendingDown, AlertTriangle, Brain, Users, Target, BarChart3, Shield, Sparkles, CheckCircle2, XCircle, Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const ComponentShowcase = () => {
  return (
    <div className="space-y-12">
      {/* Analytics Cards Section */}
      <div>
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-foreground mb-2">Dashboard Analytics</h3>
          <p className="text-muted-foreground">Métricas em tempo real com IA proprietária</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Churn Risk Card */}
          <Card className="border-l-4 border-l-danger hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-danger/10 rounded-lg">
                    <AlertTriangle className="h-6 w-6 text-danger" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Risco de Churn</CardTitle>
                    <CardDescription>Análise preditiva</CardDescription>
                  </div>
                </div>
                <Badge variant="destructive">Alta</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-end gap-2">
                <span className="text-4xl font-bold text-danger">23%</span>
                <div className="flex items-center text-danger text-sm mb-2">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span>+5.2%</span>
                </div>
              </div>
              <Progress value={23} className="h-2 bg-danger/20" />
              <p className="text-sm text-muted-foreground">
                127 clientes em risco de abandono
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Ver Clientes</Button>
            </CardFooter>
          </Card>

          {/* LTV Optimization Card */}
          <Card className="border-l-4 border-l-success hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-success/10 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Otimização LTV</CardTitle>
                    <CardDescription>Método 360°</CardDescription>
                  </div>
                </div>
                <Badge className="bg-success text-success-foreground">+18%</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-end gap-2">
                <span className="text-4xl font-bold text-success">R$ 4.2K</span>
                <div className="flex items-center text-success text-sm mb-2">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span>+18%</span>
                </div>
              </div>
              <Progress value={75} className="h-2 bg-success/20" />
              <p className="text-sm text-muted-foreground">
                Valor médio do tempo de vida aumentado
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Orquestrar Ações</Button>
            </CardFooter>
          </Card>

          {/* AI Insights Card */}
          <Card className="border-l-4 border-l-primary hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">IA Proprietária</CardTitle>
                    <CardDescription>Insights em tempo real</CardDescription>
                  </div>
                </div>
                <Sparkles className="h-5 w-5 text-primary animate-pulse" />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Precisão do modelo</span>
                  <span className="font-semibold text-foreground">94.7%</span>
                </div>
                <Progress value={94.7} className="h-2" />
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Análises processadas</span>
                  <span className="font-semibold text-foreground">12.4K</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" className="w-full">Ver Relatório IA</Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Metric Cards - Método 360 - Minimal Style */}
      <div>
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-foreground mb-2">Analytics</h3>
          <p className="text-muted-foreground">Monitor performance and gain insights into your workflows</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Total Executions */}
          <Card className="hover:shadow-md transition-shadow border-border">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-muted rounded-full">
                  <svg className="h-6 w-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="flex items-center text-success text-sm font-medium">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +12.5%
                </div>
              </div>
              <div className="text-4xl font-bold text-foreground mb-1">24,847</div>
              <p className="text-sm font-medium text-foreground mb-1">Total Executions</p>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>

          {/* Success Rate */}
          <Card className="hover:shadow-md transition-shadow border-border">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-muted rounded-full">
                  <svg className="h-6 w-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex items-center text-success text-sm font-medium">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +0.3%
                </div>
              </div>
              <div className="text-4xl font-bold text-foreground mb-1">98.7%</div>
              <p className="text-sm font-medium text-foreground mb-1">Success Rate</p>
              <p className="text-xs text-muted-foreground">Last 30 days</p>
            </CardContent>
          </Card>

          {/* Avg Duration */}
          <Card className="hover:shadow-md transition-shadow border-border">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-muted rounded-full">
                  <Clock className="h-6 w-6 text-foreground" />
                </div>
                <div className="flex items-center text-success text-sm font-medium">
                  <TrendingUp className="h-4 w-4 mr-1 rotate-180 text-success" />
                  -2.1s
                </div>
              </div>
              <div className="text-4xl font-bold text-foreground mb-1">38.2s</div>
              <p className="text-sm font-medium text-foreground mb-1">Avg Duration</p>
              <p className="text-xs text-muted-foreground">Per execution</p>
            </CardContent>
          </Card>

          {/* Error Rate */}
          <Card className="hover:shadow-md transition-shadow border-border">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-muted rounded-full">
                  <XCircle className="h-6 w-6 text-foreground" />
                </div>
                <div className="flex items-center text-destructive text-sm font-medium">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  -
                </div>
              </div>
              <div className="text-4xl font-bold text-foreground mb-1">1.3%</div>
              <p className="text-sm font-medium text-foreground mb-1">Error Rate</p>
              <p className="text-xs text-muted-foreground">Last 30 days</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Action Cards with Status */}
      <div>
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-foreground mb-2">Ações Orquestradas</h3>
          <p className="text-muted-foreground">Acompanhe a execução em tempo real</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="hover:border-success transition-colors">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success" />
                    Campanha de Retenção
                  </CardTitle>
                  <CardDescription>Enviada há 2 horas</CardDescription>
                </div>
                <Badge className="bg-success text-success-foreground">Concluída</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Taxa de abertura</span>
                <span className="font-semibold">68%</span>
              </div>
              <Progress value={68} className="h-2 bg-success/20" />
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Conversões</span>
                <span className="font-semibold">156 clientes retidos</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:border-primary transition-colors">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Análise Preditiva
                  </CardTitle>
                  <CardDescription>Em processamento</CardDescription>
                </div>
                <Badge variant="secondary">Em andamento</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Progresso</span>
                <span className="font-semibold">73%</span>
              </div>
              <Progress value={73} className="h-2" />
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tempo estimado</span>
                <span className="font-semibold">~5 minutos</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Modals and Dialogs */}
      <div>
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-foreground mb-2">Diálogos do Sistema</h3>
          <p className="text-muted-foreground">Interações críticas e confirmações</p>
        </div>
        
        <div className="flex flex-wrap gap-4">
          {/* Critical Action Dialog */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" className="border-danger text-danger hover:bg-danger/10">
                <AlertTriangle className="mr-2 h-4 w-4" />
                Ação Crítica
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-danger" />
                  Confirmar Ação Crítica
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Esta ação afetará 127 clientes identificados com alto risco de churn. 
                  Deseja prosseguir com a orquestração automática de ações de retenção?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction className="bg-danger hover:bg-danger/90">
                  Confirmar e Executar
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          {/* Success Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-success hover:bg-success/90 text-success-foreground">
                <CheckCircle2 className="mr-2 h-4 w-4" />
                Ação Concluída
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-success flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  Análise Concluída com Sucesso
                </DialogTitle>
                <DialogDescription>
                  O processamento foi finalizado e os insights estão disponíveis
                </DialogDescription>
              </DialogHeader>
              <div className="py-4 space-y-4">
                <div className="p-4 bg-success/10 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Clientes analisados</span>
                    <span className="text-lg font-bold text-success">1,847</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Insights gerados</span>
                    <span className="text-lg font-bold text-success">342</span>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button className="bg-success hover:bg-success/90">Ver Relatório</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* AI Processing Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Brain className="mr-2 h-4 w-4" />
                Iniciar Análise IA
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  Análise com IA Proprietária
                </DialogTitle>
                <DialogDescription>
                  Configure os parâmetros para análise preditiva
                </DialogDescription>
              </DialogHeader>
              <div className="py-4 space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Período de análise</label>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">7 dias</Button>
                    <Button variant="outline" size="sm">30 dias</Button>
                    <Button size="sm">90 dias</Button>
                  </div>
                </div>
                <div className="p-4 border border-border rounded-lg bg-muted/50">
                  <div className="flex items-start gap-3">
                    <Sparkles className="h-5 w-5 text-primary mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium mb-1">IA Sugerida</p>
                      <p className="text-xs text-muted-foreground">
                        Com base no histórico, recomendamos análise de 90 dias para melhor precisão preditiva
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline">Cancelar</Button>
                <Button>Iniciar Análise</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Status Badges */}
      <div>
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-foreground mb-2">Status e Indicadores</h3>
          <p className="text-muted-foreground">Estados visuais para análises e métricas</p>
        </div>
        
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-3">Risco de Churn</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="destructive" className="gap-1">
                <XCircle className="h-3 w-3" />
                Alto Risco
              </Badge>
              <Badge className="bg-warning text-warning-foreground gap-1">
                <AlertTriangle className="h-3 w-3" />
                Risco Moderado
              </Badge>
              <Badge className="bg-success text-success-foreground gap-1">
                <CheckCircle2 className="h-3 w-3" />
                Baixo Risco
              </Badge>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-muted-foreground mb-3">Status de Análise</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="gap-1">
                <Clock className="h-3 w-3" />
                Aguardando
              </Badge>
              <Badge variant="secondary" className="gap-1">
                <Brain className="h-3 w-3 animate-pulse" />
                Processando IA
              </Badge>
              <Badge className="gap-1">
                <CheckCircle2 className="h-3 w-3" />
                Concluído
              </Badge>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-muted-foreground mb-3">Performance LTV</p>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-success text-success-foreground gap-1">
                <TrendingUp className="h-3 w-3" />
                +18% Crescimento
              </Badge>
              <Badge className="bg-primary text-primary-foreground gap-1">
                <Target className="h-3 w-3" />
                Meta Atingida
              </Badge>
              <Badge variant="secondary" className="gap-1">
                <BarChart3 className="h-3 w-3" />
                Em Análise
              </Badge>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-muted-foreground mb-3">Categorias</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Método 360°</Badge>
              <Badge className="bg-primary text-primary-foreground">IA Proprietária</Badge>
              <Badge variant="secondary">Orquestração</Badge>
              <Badge className="bg-accent text-accent-foreground">Insights</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentShowcase;
