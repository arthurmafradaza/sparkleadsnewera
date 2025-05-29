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
    <section id="pricing" className="py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="relative bg-gradient-to-br from-spark-50 to-spark-100 dark:from-gray-900 dark:to-gray-800 rounded-3xl overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-spark-500/20 to-transparent"></div>
          
          <div className="relative p-4 md:p-8">
            <div className="max-w-4xl mx-auto text-center mb-8 md:mb-10">
              <div className="mb-4">
                <Shield className="h-10 w-10 mx-auto text-spark-500 mb-3" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Chega de improviso. <span className="text-gradient">Organize sua rotina</span> e aumente suas vendas.
              </h2>
              <p className="text-base md:text-xl mb-4 mx-auto max-w-2xl">
                A SparkLeads centraliza tudo para que você foque no que faz diferença: proteger famílias e bater metas.
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
                <div className="font-bold text-lg mb-1">Compare Você Mesmo!</div>
              </div>
              
              <div className="divide-y">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="h-6 w-6 mr-4 text-spark-500 flex-shrink-0" />
                    <p className="font-medium text-base">CRM & Gestão de Pipeline</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center mb-4 font-medium">
                    US$ 49/mês
                  </div>
                  <div className="bg-spark-50 dark:bg-spark-900/20 rounded-lg p-4 flex justify-between items-center">
                    <span className="font-medium">SparkLeads</span>
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <FileCheck className="h-6 w-6 mr-4 text-spark-500 flex-shrink-0" />
                    <p className="font-medium text-base">Automação de Renovações</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center mb-4 font-medium">
                    US$ 39/mês
                  </div>
                  <div className="bg-spark-50 dark:bg-spark-900/20 rounded-lg p-4 flex justify-between items-center">
                    <span className="font-medium">SparkLeads</span>
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <MessageSquare className="h-6 w-6 mr-4 text-spark-500 flex-shrink-0" />
                    <p className="font-medium text-base">WhatsApp & SMS Integrados</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center mb-4 font-medium">
                    US$ 29/mês
                  </div>
                  <div className="bg-spark-50 dark:bg-spark-900/20 rounded-lg p-4 flex justify-between items-center">
                    <span className="font-medium">SparkLeads</span>
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                </div>
              </div>
              <div className="p-4 text-sm text-muted-foreground text-center">
                Tenha tudo em uma única plataforma integrada.
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-base px-6 py-6 md:px-8 md:py-6 rounded-xl">
                    Transforme sua agência agora <Zap className="ml-2 h-5 w-5" />
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
