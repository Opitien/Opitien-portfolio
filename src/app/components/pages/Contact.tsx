import { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Send, Globe, Github, Linkedin, MessageSquare } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { useSEO } from "../../../utils/useSEO";
import { getSEOConfig } from "../../../utils/seo";
import { motion } from "motion/react";

type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  useSEO(getSEOConfig("contact"));

  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("submitting");
    setStatusMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      setStatusMessage("Message sent successfully. I will get back to you soon.");
      form.reset();
    } catch {
      setStatus("error");
      setStatusMessage("Something went wrong while sending your message. Please try again.");
    }
  }

  const socialLinks = [
    { icon: <Github size={20} />, label: "GitHub", href: "https://github.com/opitien" },
    { icon: <Linkedin size={20} />, label: "LinkedIn", href: "https://linkedin.com/in/opitien" },
    { icon: <Mail size={20} />, label: "Email", href: "mailto:contact@opitien.work" },
  ];

  return (
    <div className="min-h-screen py-24 px-6 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Header */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-brand-teal"></span>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-teal">
              Get in Touch
            </span>
          </div>
          
          <h1 className="text-foreground leading-tight tracking-tighter">
            Let's build the <br />
            <span className="text-brand-teal">future</span> together.
          </h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Contact Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you have a specific project in mind or just want to say hi, 
                feel free to reach out. I'm always open to discussing new opportunities 
                and creative ideas.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-muted flex items-center justify-center rounded-full group-hover:bg-brand-teal group-hover:text-background transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Email</p>
                  <p className="font-medium">contact@opitien.work</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-muted flex items-center justify-center rounded-full group-hover:bg-brand-teal group-hover:text-background transition-all">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Location</p>
                  <p className="font-medium">Lagos, Nigeria (GMT+1)</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-8">
              {socialLinks.map((link, i) => (
                <a 
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-all"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-card border border-border p-8 md:p-12 shadow-sm">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" noValidate>
                <div className="grid md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="name"
                    rules={{ required: "Name is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="bg-background" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    rules={{ 
                      required: "Email is required",
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" }
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} className="bg-background" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Project Inquiry" {...field} className="bg-background" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  rules={{ required: "Message is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell me about your project..." 
                          {...field} 
                          rows={6}
                          className="bg-background resize-none" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={status === "submitting"}
                  className="w-full py-6 bg-foreground text-background font-bold text-lg hover:bg-brand-teal transition-all"
                >
                  <Send className="w-5 h-5 mr-3" />
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </Button>

                {statusMessage && (
                  <p className={`text-center text-sm font-medium ${status === "success" ? "text-brand-teal" : "text-destructive"}`}>
                    {statusMessage}
                  </p>
                )}
              </form>
            </Form>
          </div>

        </div>

      </div>
    </div>
  );
}
