import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from './pages/Index'; import Services from './pages/Services'; import Industries from './pages/Industries'; import Equipment from './pages/Equipment'; import About from './pages/About'; import Contact from './pages/Contact'; import NotFound from './pages/NotFound';
const q=new QueryClient();
export default function App(){return <QueryClientProvider client={q}><BrowserRouter><Routes><Route path="/" element={<Index/>}/><Route path="/services" element={<Services/>}/><Route path="/industries" element={<Industries/>}/><Route path="/equipment" element={<Equipment/>}/><Route path="/about" element={<About/>}/><Route path="/request-assessment" element={<Contact/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Routes></BrowserRouter></QueryClientProvider>}
