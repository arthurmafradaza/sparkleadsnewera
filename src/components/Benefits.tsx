import React from 'react';
import { Check } from 'lucide-react';

interface Benefit {
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    title: "Aumente sua produtividade em até 30%",
    description: "Economize tempo em tarefas administrativas e foque no que realmente importa: construir relacionamentos e vender."
  },
  {
    title: "Nunca perca oportunidades de venda",
    description: "Follow-ups automáticos garantem que nenhum lead caia no esquecimento, aumentando suas taxas de conversão."
  },
  {
    title: "Centralize todas as informações",
    description: "Acesse dados de clientes, apólices e conversas em um único lugar, de qualquer dispositivo."
  },
  {
    title: "Escale sua agência sem esforço",
    description: "Ferramentas robustas de gerenciamento de equipe permitem acompanhar e melhorar o desempenho de todos os membros."
  },
  {
    title: "Decisões baseadas em dados",
    description: "Analise métricas importantes e visualize tendências para tomar decisões estratégicas para seu negócio."
  },
  {
    title: "Experiência do cliente aprimorada",
    description: "Ofereça um atendimento mais ágil e personalizado, construindo fidelidade e aumentando indicações."
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Por que escolher o <span className="text-gradient">Spark Leads</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nossa plataforma foi projetada especificamente para as necessidades dos agentes de seguro, trazendo resultados comprovados.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-10 w-10 rounded-full bg-spark-100 flex items-center justify-center mb-4">
                <Check className="h-5 w-5 text-spark-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
