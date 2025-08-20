import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
  source: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      source: "",
    },
  });

  function onSubmit(values: ContactFormValues) {
    // You can integrate with Formspree or any API here
    // For demo, just log values
    console.log(values);
  }

  return (
    <div className="mx-auto max-w-2xl py-8">
      <h2 className="mb-6 text-center text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
        Contact
      </h2>
      <p className="mb-6 text-center text-lg text-neutral-900 dark:text-neutral-100">
        Have a question for me? My direct messages are open
        <a
          href="https://twitter.com/_faisal_akbar"
          className="font-bold text-sky-800 dark:text-sky-500 ml-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          on Twitter
        </a>
        for short and succinct messages.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Email address{" "}
                  <small className="text-base">(will remain private)</small>
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea rows={6} placeholder="Your message..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="source"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How’d you hear about my website?</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Searching the web" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full text-lg py-4">
            Send message
          </Button>
        </form>
      </Form>
    </div>
  );
}
