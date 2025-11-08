import { useState } from "react";
import ColorSwatch from "@/components/ColorSwatch";
import ButtonShowcase from "@/components/ButtonShowcase";
import FormShowcase from "@/components/FormShowcase";
import TypographyShowcase from "@/components/TypographyShowcase";
import IconShowcase from "@/components/IconShowcase";
import ComponentShowcase from "@/components/ComponentShowcase";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const colors = [
    {
      name: "Rosa Vibrante (Primary)",
      hex: "#ED1E79",
      description: "Cor principal - energia, criatividade e inovação",
    },
    {
      name: "Roxo Impact (Secondary)",
      hex: "#2E0274",
      description: "Cor secundária - profundidade e impacto visual",
    },
    {
      name: "Roxo Contrast (Dark)",
      hex: "#11002C",
      description: "Fundos de contraste e layouts de alto impacto",
    },
    {
      name: "Branco Puro (Light)",
      hex: "#FFFFFF",
      description: "Acessibilidade e limpeza visual",
    },
    {
      name: "Cinza Claro (Base)",
      hex: "#E9E9E9",
      description: "Base neutra e elegante",
    },
    {
      name: "Preto Intenso (Contrast)",
      hex: "#0A0A0A",
      description: "Estabilidade, força e neutralidade",
    },
    {
      name: "Danger (Erro)",
      hex: "#FF4242",
      description: "Mensagens de erro e ações destrutivas",
    },
    {
      name: "Success (Sucesso)",
      hex: "#3FE34F",
      description: "Mensagens de sucesso e confirmação",
    },
    {
      name: "Warning (Aviso)",
      hex: "#FCFF52",
      description: "Alertas e avisos",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-primary">PlayerCore Design System</h1>
          <p className="text-muted-foreground mt-2">
            Referência visual dos elementos de design da marca PlayerCore
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="colors" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="colors">Cores</TabsTrigger>
            <TabsTrigger value="typography">Tipografia</TabsTrigger>
            <TabsTrigger value="buttons">Botões</TabsTrigger>
            <TabsTrigger value="forms">Formulários</TabsTrigger>
            <TabsTrigger value="icons">Ícones</TabsTrigger>
            <TabsTrigger value="components">Componentes</TabsTrigger>
          </TabsList>

          {/* Colors Tab */}
          <TabsContent value="colors" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>02. Paleta de Cores</CardTitle>
                <CardDescription>
                  Cores de alto impacto visual, equilibrando tecnologia, modernidade e proximidade
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {colors.map((color, index) => (
                  <ColorSwatch
                    key={index}
                    name={color.name}
                    hex={color.hex}
                    description={color.description}
                  />
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Acessibilidade de Cores</CardTitle>
                <CardDescription>
                  Todas as combinações seguem os padrões de contraste WCAG AA e AAA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-6 bg-background border-2 border-border rounded-lg text-center">
                    <p className="text-foreground font-semibold text-lg">
                      Preto Intenso (#0A0A0A)
                    </p>
                    <p className="text-sm text-muted-foreground">sobre</p>
                    <p className="text-foreground font-semibold text-lg">
                      Branco Puro (#FFFFFF)
                    </p>
                    <p className="text-xs text-success mt-2">✓ Alto Contraste - AA/AAA</p>
                  </div>
                  <div className="p-6 bg-accent text-accent-foreground border-2 border-border rounded-lg text-center">
                    <p className="font-semibold text-lg">
                      Branco Puro (#FFFFFF)
                    </p>
                    <p className="text-sm opacity-80">sobre</p>
                    <p className="font-semibold text-lg">
                      Roxo Contrast (#11002C)
                    </p>
                    <p className="text-xs mt-2 opacity-90">✓ Alto Contraste</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Typography Tab */}
          <TabsContent value="typography" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>01. Tipografia</CardTitle>
                <CardDescription>
                  PlayerCore utiliza fontes modernas para garantir clareza e personalidade
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TypographyShowcase />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Buttons Tab */}
          <TabsContent value="buttons" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>04. Botões</CardTitle>
                <CardDescription>
                  Elementos chave de interação com variações de estilo e estado
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ButtonShowcase />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Forms Tab */}
          <TabsContent value="forms" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>05. Formulários</CardTitle>
                <CardDescription>
                  Campos de formulário com design limpo e estados de interação claros
                </CardDescription>
              </CardHeader>
              <CardContent>
                <FormShowcase />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Icons Tab */}
          <TabsContent value="icons" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>03. Ícones</CardTitle>
                <CardDescription>
                  Biblioteca de ícones para interface e redes sociais
                </CardDescription>
              </CardHeader>
              <CardContent>
                <IconShowcase />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Components Tab */}
          <TabsContent value="components" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>06. Componentes</CardTitle>
                <CardDescription>
                  Cards, modais, badges e outros elementos compostos da interface
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ComponentShowcase />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          PlayerCore Design System - Referência Visual v1.0
        </div>
      </footer>
    </div>
  );
};

export default Index;
