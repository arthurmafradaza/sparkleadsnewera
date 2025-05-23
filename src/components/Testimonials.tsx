import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface Testimonial {
  content: string;
  author: string;
  role: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    content: "É até difícil escolher o que mais gostamos no Spark Leads. A plataforma realmente transforma a rotina: facilita a organização do negócio e ainda agiliza o atendimento com as mensagens centralizadas no próprio sistema. Tudo flui muito melhor.",
    author: "Bia Mullet",
    role: "Agente Independente",
    rating: 5
  },
  {
    content: "A facilidade de usar a plataforma é impressionante. Em apenas uma semana, minha equipe já estava dominando todas as funcionalidades e nossa produtividade disparou.",
    author: "Amanda Soares",
    role: "Gerente de Agência",
    rating: 5
  },
  {
    content: "Eu adoro em como a plataforma é dinâmica e permite uma flexibilidade. O Spark Leads possui flexibilidade, permitindo que seja adaptado de acordo com as necessidades específicas do seu projeto. Isso é incrível! Sua estrutura dinâmica facilita ajustes e personalizações, garantindo uma experiência sob medida para diferentes cenários!",
    author: "Laryssa Bandeira",
    role: "Especialista em Seguros de Vida",
    rating: 5
  },
  {
    content: "O Spark Leads virou o cérebro da minha operação. Tudo está lá: leads, clientes, mensagens, alertas. Não tem retrabalho, não tem bagunça. É como ter um assistente que trabalha por mim 24h e ainda me ajuda a vender mais.",
    author: "Fernanda Torres",
    role: "Diretora Regional",
    rating: 5
  },
  {
    content: "A integração entre agendamentos e lembretes automáticos reduziu nossas taxas de não comparecimento em quase 70%. Isso por si só já valeu o investimento.",
    author: "Miguel Santos",
    role: "Agente de Seguros Automotivos",
    rating: 4
  },
  {
    content: "Os relatórios analíticos me ajudaram a entender melhor meu funil de vendas. Agora sei exatamente onde focar para maximizar os resultados.",
    author: "Juliana Lima",
    role: "Agente de Seguros Residenciais",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            O que nossos <span className="text-gradient">clientes dizem</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja como o Spark Leads está transformando agências de seguros em todo o país.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden hover-lift h-full flex flex-col">
              <CardContent className="pt-5 flex-1 flex flex-col">
                <div className="flex mb-3 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-lg flex-1">"{testimonial.content}"</p>
              </CardContent>
              <CardFooter className="border-t py-2 flex justify-center mt-auto">
                <p className="font-semibold text-center">{testimonial.author}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
