import React, { useState, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CheckCircle2, BarChart3, Calendar, Users, MessageSquare, Zap, Shield, FileCheck, Clock, Award, Target } from "lucide-react";
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Feature = {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  subFeatures: {
    title: string;
    description: string;
  }[];
};

const features: Feature[] = [
  {
    id: "apolices",
    title: "Gestão de Apólices",
    description: "Organize todas as apólices dos seus clientes em um único lugar, com alertas de renovação automáticos.",
    icon: FileCheck,
    subFeatures: [
      {
        title: "Revisão Anual Automatizada",
        description: "O SparkLeads identifica apólices prestes a fazer 1 ano e dispara follow-ups automáticos para iniciar a revisão anual, fortalecendo o relacionamento, ajustando coberturas e gerando indicações."
      },
      {
        title: "Categorização Personalizada",
        description: "Tenha a organização das suas apólices e clientes na palma da sua mão."
      },
      {
        title: "Histórico de Relacionamento",
        description: "Acompanhe cada conversa, apólice e revisão feita com o cliente, do primeiro contato à fidelização."
      }
    ]
  },
  {
    id: "followups",
    title: "Follow-ups Inteligentes",
    description: "Nunca perca uma oportunidade de venda com sequências automatizadas de follow-up personalizadas.",
    icon: Zap,
    subFeatures: [
      {
        title: "Modelos de Follow-up Validados",
        description: "Sequências otimizadas para venda, criadas com base no que realmente converte."
      },
      {
        title: "Lembretes Contextuais",
        description: "Detecta aniversários, renovações e outras datas-chave para acionar o lead no momento exato."
      },
      {
        title: "Disparos com Precisão Cirúrgica",
        description: "Mensagens enviadas no momento exato para destravar conversas e avançar vendas com consistência."
      }
    ]
  },
  {
    id: "multicanais",
    title: "Comunicação Multicanal",
    description: "Mantenha-se conectado com clientes por WhatsApp, e-mail, Instagram e SMS sem trocar de plataforma.",
    icon: MessageSquare,
    subFeatures: [
      {
        title: "WhatsApp Integrado",
        description: "Atenda clientes pelo WhatsApp diretamente do sistema, centralizando todas as conversas."
      },
      {
        title: "Tudo em um só lugar",
        description: "Gerencie WhatsApp, SMS, Instagram e e-mail em uma única tela, sem perder tempo mudando de uma plataforma para a outra."
      },
      {
        title: "Atualizações em tempo real",
        description: "Mantenha o cliente informado sobre cada etapa, direto nos canais que ele mais usa."
      }
    ]
  },
  {
    id: "agencia",
    title: "Gestão de Agência",
    description: "Monitore sua operação de ponta a ponta, desde a entrada do lead até a sua conversão.",
    icon: Users,
    subFeatures: [
      {
        title: "Controle total da sua produção",
        description: "Acompanhe seu desempenho com dados claros sobre propostas, apólices e evolução de vendas."
      },
      {
        title: "Metas e Projeções",
        description: "Acompanhe seus resultados em tempo real, com foco total na sua produção."
      },
      {
        title: "Indicadores que importam",
        description: "Acompanhe os números que movem sua agência: quantidade de leads, taxa de conversão, apólices emitidas e todos os seus agendamentos."
      }
    ]
  },
  {
    id: "produtividade",
    title: "Produtividade com Spark",
    description: "Ganhe tempo, reduza tarefas repetitivas e foque no que realmente importa: vender",
    icon: Clock,
    subFeatures: [
      {
        title: "Tarefas Automáticas",
        description: "Automatize ações do dia a dia, como enviar mensagens, marcar lembretes e atualizar informações."
      },
      {
        title: "Agenda Integrada",
        description: "Sincronização com seu calendário para gerenciar reuniões."
      },
      {
        title: "App Móvel",
        description: "Acesse tudo que precisa: leads, apólices e histórico, direto do celular, onde estiver."
      }
    ]
  }
];

const Features = () => {
  const [activeTab, setActiveTab] = useState("apolices");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const activeFeature = features.find(feature => feature.id === activeTab);
  
  useEffect(() => {
    // Carregar o script do formulário após a montagem do componente quando o modal é aberto
    if (isDialogOpen) {
      const script = document.createElement('script');
      script.src = "https://internal.sparkleads.pro/js/form_embed.js";
      script.type = "text/javascript";
      document.body.appendChild(script);

      return () => {
        // Limpar o script quando o componente for desmontado ou o modal for fechado
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [isDialogOpen]);

  return (
    <section id="features" className="py-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-spark-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 max-w-3xl mx-auto">
          <div className="inline-flex items-center px-4 py-1.5 bg-spark-100 text-spark-800 rounded-full text-sm font-medium mb-3">
            <Shield className="hidden md:block h-4 w-4 mr-2 text-spark-600" />
            Especializado em seguros. Focado em resultado. Livre de complicações.
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Um CRM que <span className="text-gradient">entende seu negócio</span> de seguros
          </h2>
          <p className="text-lg text-muted-foreground">
            O SparkLeads centraliza tudo para que você foque no que faz diferença: proteger famílias e bater metas. Sem complicações, sem perda de tempo.
          </p>
        </div>
        
        <Tabs defaultValue="apolices" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto p-0">
            {features.map((feature) => (
              <TabsTrigger
                key={feature.id}
                value={feature.id}
                className={`flex flex-col items-center p-3 h-auto data-[state=active]:bg-spark-100/50 data-[state=active]:text-spark-900 rounded-lg`}
              >
                <feature.icon className={`h-6 w-6 mb-1 ${activeTab === feature.id ? 'text-spark-600' : ''}`} />
                <span>{feature.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {activeFeature && (
            <TabsContent value={activeFeature.id} className="relative mt-5">
              <div className="grid md:grid-cols-2 gap-5 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{activeFeature.title}</h3>
                  <p className="text-lg mb-3 text-muted-foreground">{activeFeature.description}</p>
                  
                  <ul className="space-y-2">
                    {activeFeature.subFeatures.map((subFeature, index) => (
                      <li key={index} className="flex">
                        <CheckCircle2 className="h-6 w-6 text-spark-500 mr-2 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold">{subFeature.title}</h4>
                          <p className="text-muted-foreground">{subFeature.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 flex justify-center">
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                      <DialogTrigger asChild>
                        <Button className="bg-gradient-primary text-lg py-6 px-8">Organize sua operação em minutos</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-auto">
                        <DialogHeader>
                          <DialogTitle className="text-xl text-center">Agende sua demonstração</DialogTitle>
                          <DialogDescription className="text-center mb-4">
                            Escolha um horário que funcione melhor para você.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="pt-2">
                          <iframe 
                            src="https://internal.sparkleads.pro/widget/booking/cFxp3HNIh6NAPRv2p4VZ" 
                            style={{ width: '100%', border: 'none', overflow: 'hidden' }} 
                            scrolling="no" 
                            id="cFxp3HNIh6NAPRv2p4VZ_1748012106009_features"
                            className="min-h-[600px]"
                          ></iframe>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
                
                <div className="relative bg-spark-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  {activeFeature.id === "apolices" ? (
                    <div className="rounded-lg overflow-hidden border shadow-sm">
                      <div className="h-8 bg-secondary flex items-center px-4 border-b">
                        <div className="flex space-x-2">
                          <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
                          <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                        </div>
                      </div>
                      <div className="h-64 bg-white dark:bg-gray-900 flex flex-col items-center justify-center p-2">
                        <img 
                          src="https://storage.googleapis.com/msgsndr/efZEjK6PqtPGDHqB2vV6/media/6830c16f6126fb34b4341e5a.png" 
                          alt="Interface de gestão de apólices"
                          className="w-full h-auto mx-auto"
                          style={{ maxHeight: "240px", objectFit: "contain" }}
                        />
                      </div>
                    </div>
                  ) : activeFeature.id === "followups" ? (
                    <div className="rounded-lg overflow-hidden border shadow-sm">
                      <div className="h-8 bg-secondary flex items-center px-4 border-b">
                        <div className="flex space-x-2">
                          <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
                          <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                        </div>
                      </div>
                      <div className="h-64 bg-white dark:bg-gray-900 flex flex-col items-center justify-center p-2">
                        <img 
                          src="https://storage.googleapis.com/msgsndr/efZEjK6PqtPGDHqB2vV6/media/6830c38e7bdb39d71b7bdd8c.png" 
                          alt="Interface de follow-ups inteligentes"
                          className="w-full h-auto mx-auto"
                          style={{ maxHeight: "240px", objectFit: "contain" }}
                        />
                      </div>
                    </div>
                  ) : activeFeature.id === "multicanais" ? (
                    <div className="rounded-lg overflow-hidden border shadow-sm">
                      <div className="h-8 bg-secondary flex items-center px-4 border-b">
                        <div className="flex space-x-2">
                          <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
                          <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                        </div>
                      </div>
                      <div className="h-64 bg-white dark:bg-gray-900 flex flex-col items-center justify-center p-2">
                        <img 
                          src="https://storage.googleapis.com/msgsndr/efZEjK6PqtPGDHqB2vV6/media/6830c6011f386bbe0f60cead.png" 
                          alt="Interface de comunicação multicanal"
                          className="w-full h-auto mx-auto"
                          style={{ maxHeight: "240px", objectFit: "contain" }}
                        />
                      </div>
                    </div>
                  ) : activeFeature.id === "agencia" ? (
                    <div className="rounded-lg overflow-hidden border shadow-sm">
                      <div className="h-8 bg-secondary flex items-center px-4 border-b">
                        <div className="flex space-x-2">
                          <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
                          <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                        </div>
                      </div>
                      <div className="h-64 bg-white dark:bg-gray-900 flex flex-col items-center justify-center p-2">
                        <img 
                          src="https://storage.googleapis.com/msgsndr/efZEjK6PqtPGDHqB2vV6/media/6830ca0e6417b26e2e763275.png" 
                          alt="Interface de gestão de agência"
                          className="w-full h-auto mx-auto"
                          style={{ maxHeight: "240px", objectFit: "contain" }}
                        />
                      </div>
                    </div>
                  ) : activeFeature.id === "produtividade" ? (
                    <div className="rounded-lg overflow-hidden border shadow-sm">
                      <div className="h-8 bg-secondary flex items-center px-4 border-b">
                        <div className="flex space-x-2">
                          <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
                          <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                        </div>
                      </div>
                      <div className="h-64 bg-white dark:bg-gray-900 flex flex-col items-center justify-center p-2">
                        <img 
                          src="https://storage.googleapis.com/msgsndr/efZEjK6PqtPGDHqB2vV6/media/6830cd541f386b1ea960d7cb.png" 
                          alt="Interface de produtividade para corretores"
                          className="w-full h-auto mx-auto"
                          style={{ maxHeight: "240px", objectFit: "contain" }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-lg overflow-hidden border shadow-sm">
                      <div className="h-8 bg-secondary flex items-center px-4 border-b">
                        <div className="flex space-x-2">
                          <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
                          <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                        </div>
                      </div>
                      <div className="h-64 bg-white dark:bg-gray-900 flex flex-col items-center justify-center p-6">
                        <activeFeature.icon className="h-16 w-16 text-spark-400 mb-4" />
                        <div className="text-center">
                          <h4 className="font-medium mb-2">{activeFeature.title}</h4>
                          <p className="text-sm text-muted-foreground max-w-xs">
                            Feito especificamente para as necessidades de agentes de seguro.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>
          )}
        </Tabs>
      </div>
    </section>
  );
};

export default Features;
