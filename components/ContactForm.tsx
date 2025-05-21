import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { useContext } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Le nom doit contenir au moins 2 caractères',
  }),
  email: z.string().email({
    message: 'Veuillez entrer une adresse email valide',
  }),
  type: z.enum(['contact', 'quote'], {
    required_error: 'Veuillez sélectionner le type de demande',
  }),
  company: z.string().optional(),
  phone: z.string().optional(),
  subject: z.string().min(5, {
    message: 'Le sujet doit contenir au moins 5 caractères',
  }),
  message: z.string().min(10, {
    message: 'Le message doit contenir au moins 10 caractères',
  }),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const { language } = useContext(LanguageContext);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formType, setFormType] = useState<'contact' | 'quote'>('contact');

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: 'contact',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          language,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: language === 'fr' ? 'Message envoyé' : 'Message sent',
          description: result.message,
        });
        reset();
        setFormType('contact');
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: language === 'fr' ? 'Erreur' : 'Error',
        description: error instanceof Error ? error.message : 'Une erreur est survenue',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="type" className="text-[#1E293B]">
            {language === 'fr' ? 'Type de demande' : 'Request type'}
          </Label>
          <Select
            defaultValue="contact"
            onValueChange={(value: 'contact' | 'quote') => {
              setFormType(value);
              setValue('type', value);
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder={language === 'fr' ? 'Sélectionnez le type' : 'Select type'} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="contact">
                {language === 'fr' ? 'Contact' : 'Contact'}
              </SelectItem>
              <SelectItem value="quote">
                {language === 'fr' ? 'Demande de devis' : 'Quote request'}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Input
            {...register('name')}
            placeholder={language === 'fr' ? 'Votre nom' : 'Your name'}
            className={errors.name ? 'border-red-500' : ''}
          />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Input
            {...register('email')}
            type="email"
            placeholder={language === 'fr' ? 'Votre email' : 'Your email'}
            className={errors.email ? 'border-red-500' : ''}
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        {formType === 'quote' && (
          <>
            <div>
              <Input
                {...register('company')}
                placeholder={language === 'fr' ? 'Nom de votre entreprise (facultatif)' : 'Your company name (optional)'}
              />
            </div>

            <div>
              <Input
                {...register('phone')}
                type="tel"
                placeholder={language === 'fr' ? 'Votre téléphone (facultatif)' : 'Your phone (optional)'}
              />
            </div>
          </>
        )}

        <div>
          <Input
            {...register('subject')}
            placeholder={language === 'fr' ? 'Sujet' : 'Subject'}
            className={errors.subject ? 'border-red-500' : ''}
          />
          {errors.subject && (
            <p className="text-sm text-red-500 mt-1">{errors.subject.message}</p>
          )}
        </div>

        <div>
          <Textarea
            {...register('message')}
            placeholder={language === 'fr' ? 'Votre message' : 'Your message'}
            className={`min-h-[150px] ${errors.message ? 'border-red-500' : ''}`}
          />
          {errors.message && (
            <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting
          ? language === 'fr'
            ? 'Envoi en cours...'
            : 'Sending...'
          : formType === 'quote'
          ? language === 'fr'
            ? 'Demander un devis'
            : 'Request a quote'
          : language === 'fr'
          ? 'Envoyer le message'
          : 'Send message'}
      </Button>
    </form>
  );
} 