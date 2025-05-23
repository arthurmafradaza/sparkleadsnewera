import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle } from 'lucide-react';

const DemoSection = () => {
  useEffect(() => {
    // Carregar o script do formulário após a montagem do componente
    const script = document.createElement('script');
    script.src = "https://internal.sparkleads.pro/js/form_embed.js";
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      // Limpar o script quando o componente for desmontado
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="demo" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-spark-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-spark-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
              {/* Widget de agendamento embedado */}
              <iframe 
                src="https://internal.sparkleads.pro/widget/booking/cFxp3HNIh6NAPRv2p4VZ" 
                style={{ width: '100%', border: 'none', overflow: 'hidden' }} 
                scrolling="no" 
                id="cFxp3HNIh6NAPRv2p4VZ_1748012106009"
                className="min-h-[450px]"
              ></iframe>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Veja o <span className="text-gradient">Spark Leads</span> em ação
            </h2>
            
            <p className="text-xl leading-relaxed mb-8">
            Entenda, em poucos minutos, como transformar sua operação de seguros com organização, automação e resultados reais.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-spark-500 mr-3 mt-1 flex-shrink-0" />
                <p>Como organizar seus leads e clientes sem planilhas</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-spark-500 mr-3 mt-1 flex-shrink-0" />
                <p>Veja como integrar com suas ferramentas favoritas</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-spark-500 mr-3 mt-1 flex-shrink-0" />
                <p>Como o SparkLeads se adapta ao seu modelo de operação</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-spark-500 mr-3 mt-1 flex-shrink-0" />
                <p>Tire todas suas dúvidas com nossos especialistas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
