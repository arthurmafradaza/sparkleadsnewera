import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // Fechar o menu mobile quando um link é clicado
  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };
  
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
  
  // Função para abrir o WhatsApp
  const openWhatsApp = () => {
    window.open('https://wa.me/17866276787?text=Ol%C3%A1%2C%20vim%20pelo%20website%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%21', '_blank');
  };
  
  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 md:py-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <img 
              src="https://storage.googleapis.com/msgsndr/efZEjK6PqtPGDHqB2vV6/media/68308a5b6126fb2ff83364c7.png" 
              alt="SparkLeads.pro" 
              className="h-10 md:h-12 w-auto" 
            />
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-sm font-medium hover:text-spark-500 transition-colors">Home</a>
          <a href="#features" className="text-sm font-medium hover:text-spark-500 transition-colors">Funcionalidades</a>
          <a href="#benefits" className="text-sm font-medium hover:text-spark-500 transition-colors">Vantagens</a>
          <a href="#planos" className="text-sm font-medium hover:text-spark-500 transition-colors">Planos</a>
          <a href="#testimonials" className="text-sm font-medium hover:text-spark-500 transition-colors">Depoimentos</a>
        </div>
        
        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://app.sparkleads.pro/">
            <Button variant="ghost" className="hover:text-spark-500">Entrar</Button>
          </a>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-primary hover:opacity-90">Agendar Demonstração</Button>
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
                  id="cFxp3HNIh6NAPRv2p4VZ_1748012106009"
                  className="min-h-[600px]"
                ></iframe>
              </div>
            </DialogContent>
          </Dialog>
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full bg-green-500 hover:bg-green-600 text-white border-0"
            onClick={openWhatsApp}
          >
            <img src="/images/chat-icon.png" alt="Chat" className="h-12 w-12" />
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="flex items-center space-x-2 md:hidden">
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full bg-green-500 hover:bg-green-600 text-white border-0 ml-1"
            onClick={openWhatsApp}
          >
            <img src="/images/chat-icon.png" alt="Chat" className="h-6 w-6" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border shadow-md">
          <div className="container mx-auto py-4 space-y-4">
            <a 
              href="/" 
              className="block text-base font-medium hover:text-spark-500 transition-colors py-3 px-4 rounded-lg hover:bg-gray-50"
              onClick={handleNavLinkClick}
            >
              Home
            </a>
            <a 
              href="#features" 
              className="block text-base font-medium hover:text-spark-500 transition-colors py-3 px-4 rounded-lg hover:bg-gray-50"
              onClick={handleNavLinkClick}
            >
              Funcionalidades
            </a>
            <a 
              href="#benefits" 
              className="block text-base font-medium hover:text-spark-500 transition-colors py-3 px-4 rounded-lg hover:bg-gray-50"
              onClick={handleNavLinkClick}
            >
              Vantagens
            </a>
            <a 
              href="#planos" 
              className="block text-base font-medium hover:text-spark-500 transition-colors py-3 px-4 rounded-lg hover:bg-gray-50"
              onClick={handleNavLinkClick}
            >
              Planos
            </a>
            <a 
              href="#testimonials" 
              className="block text-base font-medium hover:text-spark-500 transition-colors py-3 px-4 rounded-lg hover:bg-gray-50"
              onClick={handleNavLinkClick}
            >
              Depoimentos
            </a>
            <div className="flex flex-col space-y-3 pt-4 border-t border-border px-4">
              <a href="https://app.sparkleads.pro/" className="w-full">
                <Button variant="ghost" className="justify-center hover:text-spark-500 w-full py-3 text-base">Entrar</Button>
              </a>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="justify-center bg-gradient-primary hover:opacity-90 w-full py-6 text-base">Agendar Demonstração</Button>
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
                      id="cFxp3HNIh6NAPRv2p4VZ_1748012106009_mobile"
                      className="min-h-[600px]"
                    ></iframe>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
