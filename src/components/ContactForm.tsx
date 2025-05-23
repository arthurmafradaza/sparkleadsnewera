import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Shield, MessageSquare } from "lucide-react";

const ContactForm = () => {
  useEffect(() => {
    // Injetar o script do Stripe Buy Button
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/buy-button.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Limpar o script quando o componente for desmontado
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="py-12 bg-spark-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 bg-spark-100 text-spark-800 rounded-full text-sm font-medium mb-4">
                <MessageSquare className="h-4 w-4 mr-2 text-spark-600" />
                Suporte personalizado
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Vamos <span className="text-gradient">transformar</span> sua agência juntos
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
              Gostou do Spark? Nossa equipe de especialistas está pronta para ajudar você a alavancar suas vendas com uma plataforma feita exclusivamente para agentes de seguro.
              </p>
              
              <div className="space-y-6 mt-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-spark-100 rounded-full p-2 mr-4">
                    <Shield className="h-5 w-5 text-spark-500" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Experiência com seguros.</h3>
                    <p className="text-muted-foreground">Suporte 100% especializado para atender as suas demandas.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-spark-100 rounded-full p-2 mr-4">
                    <MessageSquare className="h-5 w-5 text-spark-500" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">No seu ritmo, com o que faz sentido.</h3>
                    <p className="text-muted-foreground">A gente só entra quando for pra somar.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-center">Pronto para usar o SparkLeads?</h3>
              <p className="text-muted-foreground mb-6">Contrate agora e tenha acesso imediato à plataforma que mais entende a rotina dos agentes de seguros, ou agende uma demonstração.</p>
              
              <div className="space-y-4">
                {/* Stripe Checkout Button */}
                <div 
                  className="stripe-container flex justify-center items-center"
                  dangerouslySetInnerHTML={{
                    __html: `
                      <stripe-buy-button
                        buy-button-id="buy_btn_1PGyOeBWo9pIJAZWcErUFVuo"
                        publishable-key="pk_live_51NfTc7BWo9pIJAZWmsEfRre4vQI49SuogEXFUC7j7GcDEhxFU2OLiHaVVTB28MLVcXqc60cj9jb18DvtxIFgB5sg00IriYJkp6"
                      >
                      </stripe-buy-button>
                    `
                  }}
                />
                
                <p className="text-xs text-muted-foreground text-center mt-4">
                  Ao clicar em "Subscribe", você concorda com nossa política de privacidade e termos de uso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 