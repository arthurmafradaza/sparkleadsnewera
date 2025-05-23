import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, MessageSquare, Users, Zap, FileCheck, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-4 pb-1 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-spark-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-spark-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="mb-4 px-4 py-1.5 bg-spark-100 text-spark-800 rounded-full text-sm font-medium inline-flex items-center">
            <span className="flex h-2 w-2 rounded-full bg-spark-500 mr-2"></span>
            Desenvolvido para transformar agentes em máquinas de vendas
          </div>
          
          {/* Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 tracking-tight">
            CRM especializado em <span className="text-gradient">agentes de seguros</span>
          </h1>
          
          {/* Subheadline */}
          <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-3">
            mais organização, mais vendas, menos esforço.
          </h2>
          
          {/* Description */}
          <p className="text-base md:text-xl text-muted-foreground mb-3 max-w-2xl">
          Chega de vender no improviso. O SparkLeads organiza sua operação para você focar no que importa: vender apólices.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-2">
            <a href="#demo">
              <Button size="lg" className="bg-gradient-primary text-white w-full sm:w-auto text-sm md:text-base py-2 md:py-3">
                Quero vender mais apólices
              </Button>
            </a>
          </div>
          
          {/* Stats or social proof - Movido para baixo para não ser coberto pela imagem */}
          <div className="mt-1 hidden md:grid grid-cols-4 gap-3 w-full max-w-3xl mb-3">
            <div className="flex flex-col items-center">
              <div className="text-spark-600 mb-1 bg-spark-100 rounded-full p-1.5"><Users size={20} /></div>
              <p className="text-xl font-bold">300+</p>
              <p className="text-xs text-muted-foreground">Agentes ativos</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-spark-600 mb-1 bg-spark-100 rounded-full p-1.5"><Shield size={20} /></div>
              <p className="text-xl font-bold">150k+</p>
              <p className="text-xs text-muted-foreground">Apólices vendidas</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-spark-600 mb-1 bg-spark-100 rounded-full p-1.5"><FileCheck size={20} /></div>
              <p className="text-xl font-bold">8,5h</p>
              <p className="text-xs text-muted-foreground">Tempo economizado/semana</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-spark-600 mb-1 bg-spark-100 rounded-full p-1.5"><Zap size={20} /></div>
              <p className="text-xl font-bold">57%</p>
              <p className="text-xs text-muted-foreground">+ Conversão de apólices</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hero image/mockup */}
      <div className="container mx-auto mt-4">
        <div className="relative mx-auto max-w-4xl">
          <div className="bg-gradient-to-b from-spark-100 to-transparent p-2 rounded-xl">
            <div className="w-full rounded-lg shadow-2xl overflow-hidden border border-spark-100">
              <div className="h-8 bg-secondary flex items-center px-4 border-b">
                <div className="flex space-x-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="bg-background relative">
                <img 
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1440&h=500"
                  alt="SparkLeads Dashboard para Agentes de Seguro" 
                  className="w-full h-auto object-cover max-h-[230px]" 
                />
                
                {/* Pop-up Nova Apólice */}
                <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-2 md:p-3 border border-border animate-float z-10" 
                  style={{ maxWidth: "160px", fontSize: "0.75rem" }}>
                  <div className="flex gap-1 md:gap-2 items-center">
                    <div className="rounded-full h-6 w-6 md:h-8 md:w-8 bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                      <Shield size={14} />
                    </div>
                    <div>
                      <p className="text-xs font-medium">Nova Apólice</p>
                      <p className="text-xs text-muted-foreground" style={{ fontSize: "0.65rem" }}>Carlos acabou de contratar seguro</p>
                    </div>
                  </div>
                </div>
                
                {/* Pop-up Renovação Automática */}
                <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-2 md:p-3 border border-border animate-float z-10" 
                  style={{ animationDelay: '1s', maxWidth: "160px", fontSize: "0.75rem" }}>
                  <div className="flex gap-1 md:gap-2 items-center">
                    <div className="rounded-full h-6 w-6 md:h-8 md:w-8 bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                      <Calendar size={14} />
                    </div>
                    <div>
                      <p className="text-xs font-medium">Renovação</p>
                      <p className="text-xs text-muted-foreground" style={{ fontSize: "0.65rem" }}>5 clientes para contatar</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats para telas móveis - posicionados após a imagem */}
        <div className="mt-4 grid grid-cols-2 md:hidden gap-3 w-full max-w-3xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="text-spark-600 mb-1 bg-spark-100 rounded-full p-1.5"><Users size={16} /></div>
            <p className="text-lg font-bold">2500+</p>
            <p className="text-xs text-muted-foreground">Agentes ativos</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-spark-600 mb-1 bg-spark-100 rounded-full p-1.5"><Shield size={16} /></div>
            <p className="text-lg font-bold">150k+</p>
            <p className="text-xs text-muted-foreground">Apólices vendidas</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-spark-600 mb-1 bg-spark-100 rounded-full p-1.5"><FileCheck size={16} /></div>
            <p className="text-lg font-bold">8,5h</p>
            <p className="text-xs text-muted-foreground">Tempo economizado</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-spark-600 mb-1 bg-spark-100 rounded-full p-1.5"><Zap size={16} /></div>
            <p className="text-lg font-bold">37%</p>
            <p className="text-xs text-muted-foreground">+ Conversão</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
