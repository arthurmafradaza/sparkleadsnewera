import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Zap, Shield, Clock, FileCheck, Users, MessageSquare, BarChart } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const CTA = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  return (
    <section id="pricing" className="py-8">
      <div className="container mx-auto px-4">
        <div className="relative bg-gradient-to-br from-spark-50 to-spark-100 dark:from-gray-900 dark:to-gray-800 rounded-3xl overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-spark-500/20 to-transparent"></div>
          
          <div className="relative p-4 md:p-8">
            <div className="max-w-4xl mx-auto text-center mb-6">
              <div className="mb-3">
                <Shield className="h-10 w-10 mx-auto text-spark-500 mb-2" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold mb-2">
                Deixe de ser <span className="text-gradient">corretor de planilhas</span> e volte a vender seguros
              </h2>
              <p className="text-base md:text-xl mb-4">
                A SparkLeads centraliza tudo para que você foque no que faz diferença: proteger famílias e bater metas
              </p>
            </div>
            
            {/* Pricing comparison grid - Desktop */}
            <div className="max-w-5xl mx-auto overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-xl hidden md:block">
              {/* Header Row */}
              <div className="grid grid-cols-3 p-4 bg-secondary dark:bg-gray-900 border-b">
                <div className="font-bold text-lg">Funcionalidades</div>
                <div className="font-bold text-lg text-center">Outras Ferramentas</div>
                <div className="font-bold text-lg text-center text-spark-600">SparkLeads</div>
              </div>
              
              {/* Feature Rows */}
              <div className="divide-y">
                <div className="grid grid-cols-3 p-4">
                  <div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-spark-500" />
                      <p className="font-medium">CRM & Gestão de Pipeline</p>
                    </div>
                  </div>
                  <div className="text-center">US$ 69/mês</div>
                  <div className="text-center text-spark-600">
                    <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                  </div>
                </div>
                
                <div className="grid grid-cols-3 p-4">
                  <div>
                    <div className="flex items-center">
                      <FileCheck className="h-5 w-5 mr-2 text-spark-500" />
                      <p className="font-medium">Automação de Renovações</p>
                    </div>
                  </div>
                  <div className="text-center">US$ 59/mês</div>
                  <div className="text-center text-spark-600">
                    <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                  </div>
                </div>
                
                <div className="grid grid-cols-3 p-4">
                  <div>
                    <div className="flex items-center">
                      <MessageSquare className="h-5 w-5 mr-2 text-spark-500" />
                      <p className="font-medium">WhatsApp & SMS Integrados</p>
                    </div>
                  </div>
                  <div className="text-center">US$ 29/mês</div>
                  <div className="text-center text-spark-600">
                    <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                  </div>
                </div>
                
                <div className="grid grid-cols-3 p-4">
                  <div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 mr-2 text-spark-500" />
                      <p className="font-medium">Agendamentos & Lembretes</p>
                    </div>
                  </div>
                  <div className="text-center">US$ 39/mês</div>
                  <div className="text-center text-spark-600">
                    <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                  </div>
                </div>
                
                <div className="grid grid-cols-3 p-4">
                  <div>
                    <div className="flex items-center">
                      <BarChart className="h-5 w-5 mr-2 text-spark-500" />
                      <p className="font-medium">Analytics & Relatórios</p>
                    </div>
                  </div>
                  <div className="text-center">US$ 29/mês</div>
                  <div className="text-center text-spark-600">
                    <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                  </div>
                </div>
                
                <div className="grid grid-cols-3 p-4">
                  <div>
                    <div className="flex items-center">
                      <Zap className="h-5 w-5 mr-2 text-spark-500" />
                      <p className="font-medium">Workflows e Automações</p>
                    </div>
                  </div>
                  <div className="text-center">US$ 159/mês</div>
                  <div className="text-center text-spark-600">
                    <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                  </div>
                </div>
              </div>
              <div className="p-2 text-xs text-muted-foreground text-center">
                Tenha tudo em uma única plataforma integrada.
              </div>
            </div>
            
            {/* Pricing comparison - Mobile */}
            <div className="max-w-5xl mx-auto overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-xl md:hidden">
              <div className="p-4 bg-secondary dark:bg-gray-900 border-b text-center">
                <div className="font-bold text-lg">Compare Você Mesmo!</div>
              </div>
              
              <div className="divide-y">
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <Clock className="h-5 w-5 mr-2 text-spark-500" />
                    <p className="font-medium">CRM & Gestão de Pipeline</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2 text-center mb-2">
                    US$ 49/mês
                  </div>
                  <div className="bg-spark-50 rounded-lg p-2 flex justify-between items-center">
                    <span className="font-medium">SparkLeads</span>
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <FileCheck className="h-5 w-5 mr-2 text-spark-500" />
                    <p className="font-medium">Automação de Renovações</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2 text-center mb-2">
                    US$ 39/mês
                  </div>
                  <div className="bg-spark-50 rounded-lg p-2 flex justify-between items-center">
                    <span className="font-medium">SparkLeads</span>
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <MessageSquare className="h-5 w-5 mr-2 text-spark-500" />
                    <p className="font-medium">WhatsApp & SMS Integrados</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2 text-center mb-2">
                    US$ 29/mês
                  </div>
                  <div className="bg-spark-50 rounded-lg p-2 flex justify-between items-center">
                    <span className="font-medium">SparkLeads</span>
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <Users className="h-5 w-5 mr-2 text-spark-500" />
                    <p className="font-medium">Agendamentos & Lembretes</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2 text-center mb-2">
                    US$ 19/mês
                  </div>
                  <div className="bg-spark-50 rounded-lg p-2 flex justify-between items-center">
                    <span className="font-medium">SparkLeads</span>
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <BarChart className="h-5 w-5 mr-2 text-spark-500" />
                    <p className="font-medium">Analytics & Relatórios</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2 text-center mb-2">
                    US$ 29/mês
                  </div>
                  <div className="bg-spark-50 rounded-lg p-2 flex justify-between items-center">
                    <span className="font-medium">SparkLeads</span>
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <Zap className="h-5 w-5 mr-2 text-spark-500" />
                    <p className="font-medium">Workflows e Automações</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2 text-center mb-2">
                    US$ 159/mês
                  </div>
                  <div className="bg-spark-50 rounded-lg p-2 flex justify-between items-center">
                    <span className="font-medium">SparkLeads</span>
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                </div>
              </div>
              <div className="p-2 text-xs text-muted-foreground text-center">
                Tenha tudo em uma única plataforma integrada.
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-sm md:text-base px-4 py-2 md:px-6 md:py-3">
                    Transforme sua agência agora <Zap className="ml-2 h-4 w-4" />
                  </Button>
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
                      id="cFxp3HNIh6NAPRv2p4VZ_1748012106009_cta"
                      className="min-h-[600px]"
                    ></iframe>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
