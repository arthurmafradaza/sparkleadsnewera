
import React, { useEffect, useRef } from 'react';
import { CheckCircle, ShieldCheck, Calendar, BarChart, Users, MessageSquare } from 'lucide-react';

const ScrollingElements = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !elementsRef.current) return;
      
      const scrollPosition = window.scrollY;
      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      
      // Calculate how far we've scrolled into the section (0 to 1)
      const scrollProgress = Math.max(0, Math.min(1, 
        (scrollPosition - containerTop + window.innerHeight/2) / containerHeight
      ));
      
      // Apply transformations based on scroll
      elementsRef.current.style.transform = `translateY(${-scrollProgress * 50}px)`;
      elementsRef.current.style.opacity = `${Math.min(1, scrollProgress * 2)}`;
      
      // Apply individual transformations to children
      const children = elementsRef.current.children;
      for (let i = 0; i < children.length; i++) {
        const child = children[i] as HTMLElement;
        const delay = i * 0.1; // Stagger effect
        const childProgress = Math.max(0, Math.min(1, (scrollProgress - delay) * 2));
        child.style.transform = `translateY(${20 - childProgress * 20}px)`;
        child.style.opacity = `${childProgress}`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section ref={containerRef} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Potencialize seu <span className="text-gradient">negócio</span> de seguros
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nossa plataforma integrada combina as ferramentas mais importantes para que você se concentre apenas nas vendas.
          </p>
        </div>
        
        <div 
          ref={elementsRef} 
          className="relative max-w-6xl mx-auto"
        >
          {/* Floating interactive elements */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Calendar, title: "Agendamentos Automáticos", description: "Elimine o vai e vem de e-mails para marcar reuniões" },
              { icon: MessageSquare, title: "Follow-ups Inteligentes", description: "Nunca mais esqueça de fazer contato com um lead" },
              { icon: Users, title: "Gestão de Equipe", description: "Acompanhe o desempenho de cada membro da sua agência" },
              { icon: ShieldCheck, title: "Segurança de Dados", description: "Seus dados e de seus clientes sempre protegidos" },
              { icon: BarChart, title: "Análise de Conversão", description: "Entenda seu funil de vendas e melhore resultados" },
              { icon: CheckCircle, title: "Processos Otimizados", description: "Automatize tarefas repetitivas e foque no que importa" },
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                  transform: 'translateY(20px)'
                }}
              >
                <div className="h-12 w-12 rounded-full bg-spark-100 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-spark-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          
          {/* Interactive graphic element */}
          <div className="relative py-20">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-border">
              {/* Abstract representation of platform functionality */}
              <div className="h-80 bg-gradient-to-br from-spark-500/30 via-spark-400/10 to-transparent relative">
                {/* Interactive elements that appear on scroll */}
                <div className="absolute top-1/4 left-1/4 h-12 w-12 rounded-full bg-spark-100 border-4 border-white flex items-center justify-center animate-pulse">
                  <Calendar className="h-6 w-6 text-spark-600" />
                </div>
                
                <div className="absolute top-1/2 right-1/3 h-10 w-10 rounded-full bg-spark-200 border-2 border-white flex items-center justify-center animate-pulse" style={{ animationDelay: '0.5s' }}>
                  <Users className="h-5 w-5 text-spark-700" />
                </div>
                
                <div className="absolute bottom-1/4 right-1/4 h-14 w-14 rounded-full bg-spark-50 border-2 border-white flex items-center justify-center animate-pulse" style={{ animationDelay: '1s' }}>
                  <MessageSquare className="h-7 w-7 text-spark-500" />
                </div>
                
                <div className="absolute top-10 right-10 glass p-4 rounded-lg max-w-xs shadow-lg opacity-90 transform rotate-2 hover:rotate-0 transition-transform">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                    <p className="text-xs font-medium">Novo lead capturado</p>
                  </div>
                  <p className="text-xs text-muted-foreground">O sistema iniciou automaticamente a sequência de follow-up</p>
                </div>
                
                <div className="absolute bottom-10 left-10 glass p-4 rounded-lg max-w-xs shadow-lg opacity-90 transform -rotate-1 hover:rotate-0 transition-transform">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="h-2 w-2 bg-spark-500 rounded-full"></div>
                    <p className="text-xs font-medium">Reunião agendada</p>
                  </div>
                  <p className="text-xs text-muted-foreground">Maria Silva acabou de agendar uma consulta para amanhã</p>
                </div>
                
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100,100 Q200,50 300,150" stroke="rgba(255,255,255,0.5)" fill="none" strokeWidth="2" strokeDasharray="5,5" />
                  <path d="M300,150 Q250,200 150,250" stroke="rgba(255,255,255,0.5)" fill="none" strokeWidth="2" strokeDasharray="5,5" />
                  <path d="M150,250 Q100,200 100,100" stroke="rgba(255,255,255,0.5)" fill="none" strokeWidth="2" strokeDasharray="5,5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollingElements;
