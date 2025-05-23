import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Garantir que a página volte ao topo ao ser atualizada
if (typeof window !== 'undefined') {
  if ('scrollRestoration' in window.history) {
    // Impedir o comportamento padrão de restauração de scroll
    window.history.scrollRestoration = 'manual';
  }
  
  // Definir a posição de scroll para o topo antes de recarregar
  window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
  });
}

createRoot(document.getElementById("root")!).render(<App />);
