import { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Send } from "lucide-react";
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

  return (
    <div className="min-h-screen py-20 px-6 lg:px-12 bg-[#F5F3ED] font-mono">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* Header */}
        <header className="border-b-4 border-[#2C2C2C] pb-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div>
            <h1 className="retro-heading text-5xl lg:text-7xl text-[#2C2C2C] tracking-tighter leading-none">
              CONTACT
            </h1>
            <p className="font-mono text-xs md:text-sm uppercase tracking-widest text-[#2C2C2C]/60 mt-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#5D9B99] animate-pulse" />
              // Send a direct ping to the system
            </p>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#2C2C2C]/60">
            <Mail className="w-4 h-4 text-[#D17654]" />
            <span>contact@opitien.work</span>
          </div>
        </header>

        {/* Form */}
        <section className="bg-white border-2 border-[#2C2C2C] shadow-[4px_4px_0px_#2C2C2C] p-6 md:p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>
              
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  rules={{ required: "Name is required" }}
                  render={({ field }) => (
                    <FormItem className="relative">
                      <FormControl>
                        <Input
                          {...field}
                          placeholder=" "
                          autoComplete="name"
                          className="peer bg-transparent border-b border-[#2C2C2C]/50 text-[#2C2C2C] focus:border-[#5D9B99] transition-colors"
                        />
                      </FormControl>
                      <FormLabel className="absolute left-0 top-0 text-xs text-[#2C2C2C]/50
                        transform -translate-y-3 scale-75 origin-left transition-all duration-200
                        peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-[#888]
                        peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-[#5D9B99]">
                        Name *
                      </FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },
                  }}
                  render={({ field }) => (
                    <FormItem className="relative">
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder=" "
                          autoComplete="email"
                          className="peer bg-transparent border-b border-[#2C2C2C]/50 text-[#2C2C2C] focus:border-[#5D9B99] transition-colors"
                        />
                      </FormControl>
                      <FormLabel className="absolute left-0 top-0 text-xs text-[#2C2C2C]/50
                        transform -translate-y-3 scale-75 origin-left transition-all duration-200
                        peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-[#888]
                        peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-[#5D9B99]">
                        Email *
                      </FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Subject */}
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormControl>
                      <Input
                        {...field}
                        placeholder=" "
                        className="peer bg-transparent border-b border-[#2C2C2C]/50 text-[#2C2C2C] focus:border-[#5D9B99] transition-colors"
                      />
                    </FormControl>
                    <FormLabel className="absolute left-0 top-0 text-xs text-[#2C2C2C]/50
                      transform -translate-y-3 scale-75 origin-left transition-all duration-200
                      peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-[#888]
                      peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-[#5D9B99]">
                      Subject
                    </FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Message */}
              <FormField
                control={form.control}
                name="message"
                rules={{
                  required: "Message is required",
                  minLength: { value: 10, message: "Please provide a bit more detail" },
                }}
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder=" "
                        rows={6}
                        className="peer bg-transparent border-b border-[#2C2C2C]/50 text-[#2C2C2C] focus:border-[#5D9B99] transition-colors"
                      />
                    </FormControl>
                    <FormLabel className="absolute left-0 top-0 text-xs text-[#2C2C2C]/50
                      transform -translate-y-3 scale-75 origin-left transition-all duration-200
                      peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-[#888]
                      peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-[#5D9B99]">
                      Message *
                    </FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-4">
                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  className="retro-button bg-[#2C2C2C] text-[#F5F3ED] hover:bg-[#D17654] hover:text-white border-none shadow-[4px_4px_0px_#5D9B99]"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </Button>

                {statusMessage && (
                  <p
                    className={`font-mono text-xs md:text-sm ${
                      status === "success" ? "text-[#5D9B99]" : "text-destructive"
                    }`}
                  >
                    {statusMessage}
                  </p>
                )}
              </div>
            </form>
          </Form>
        </section>
      </div>
    </div>
  );
}
