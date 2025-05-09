
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Using EmailJS as a service to send emails without backend
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "service_id", // Replace with your EmailJS service ID
          template_id: "template_id", // Replace with your EmailJS template ID
          user_id: "user_id", // Replace with your EmailJS user ID
          template_params: {
            to_email: "giovanni.buratto@gmail.com",
            from_name: formData.name,
            from_email: formData.email,
            company: formData.company,
            message: formData.message,
          },
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "Mensagem enviada",
          description: "Sua mensagem foi enviada com sucesso!",
        });
      } else {
        throw new Error("Falha ao enviar o email");
      }
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      toast({
        title: "Erro",
        description: "Não foi possível enviar sua mensagem. Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      
      // Reset form after submission (successful or not)
      setTimeout(() => {
        if (isSubmitted) {
          setFormData({
            name: "",
            email: "",
            company: "",
            message: "",
          });
          setIsSubmitted(false);
        }
      }, 3000);
    }
  };

  return (
    <div className="bg-white rounded-lg p-5 md:p-6 shadow-md w-full max-w-md mx-auto">
      <h3 className="text-xl md:text-2xl font-semibold text-[rgba(36,40,15,1)] mb-4">Entre em contato</h3>
      
      {isSubmitted ? (
        <div className="bg-green-100 text-green-800 p-4 rounded-md mb-4 animate-fade-in-up">
          Mensagem enviada com sucesso! Entraremos em contato em breve.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgba(225,240,121,1)]"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgba(225,240,121,1)]"
            />
          </div>
          
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
              Empresa
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgba(225,240,121,1)]"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgba(225,240,121,1)]"
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[rgba(225,240,121,1)] text-[rgba(36,40,15,1)] py-2 px-4 rounded-md hover:bg-[rgba(215,230,111,1)] transition-colors font-medium flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-[rgba(36,40,15,1)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                ENVIANDO...
              </>
            ) : (
              "ENVIAR MENSAGEM"
            )}
          </button>
        </form>
      )}
    </div>
  );
};
