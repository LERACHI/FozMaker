import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface QuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const QuoteModal = ({ open, onOpenChange }: QuoteModalProps) => {
  const [form, setForm] = useState({ nome: "", whatsapp: "", descricao: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Orçamento enviado! Entraremos em contato em breve.");
    setForm({ nome: "", whatsapp: "", descricao: "" });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass border-border/50 sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">Solicitar Orçamento</DialogTitle>
          <DialogDescription>
            Preencha os dados abaixo e retornaremos em até 24h.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nome">Nome</Label>
            <Input
              id="nome"
              placeholder="Seu nome"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              required
              className="bg-muted/50 border-border/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="whatsapp">WhatsApp</Label>
            <Input
              id="whatsapp"
              placeholder="(00) 00000-0000"
              value={form.whatsapp}
              onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
              required
              className="bg-muted/50 border-border/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="descricao">Descreva seu projeto</Label>
            <Textarea
              id="descricao"
              placeholder="Conte-nos sobre sua ideia..."
              value={form.descricao}
              onChange={(e) => setForm({ ...form, descricao: e.target.value })}
              required
              className="bg-muted/50 border-border/50 min-h-[100px]"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Enviar Solicitação
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteModal;
