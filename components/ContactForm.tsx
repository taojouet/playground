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
import { content } from '@/data/content';

const formSchema = z.object({
  type: z.enum(['contact', 'quote']),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  subject: z.string().min(2, 'Subject must be at least 2 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormProps {
  defaultType?: 'contact' | 'quote';
  language: 'fr' | 'en';
}

export function ContactForm({ defaultType = 'contact', language }: ContactFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formType, setFormType] = useState<'contact' | 'quote'>(defaultType);

  const t = content[language].contact.form;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: defaultType,
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      message: '',
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
        body: JSON.stringify({ ...data, lang: language }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: t.successTitle,
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
        title: t.errorTitle,
        description: error instanceof Error ? error.message : 'An error occurred',
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
            {t.type}
          </Label>
          <Select
            defaultValue={formType}
            onValueChange={(value: 'contact' | 'quote') => {
              setFormType(value);
              setValue('type', value);
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder={t.selectTypePlaceholder} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="contact">{t.contact}</SelectItem>
              <SelectItem value="quote">{t.quote}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="name" className="text-[#1E293B]">
            {t.name}
          </Label>
          <Input
            {...register('name')}
            placeholder={t.namePlaceholder}
            className={errors.name ? 'border-red-500' : ''}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email" className="text-[#1E293B]">
            {t.email}
          </Label>
          <Input
            {...register('email')}
            type="email"
            placeholder={t.emailPlaceholder}
            className={errors.email ? 'border-red-500' : ''}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {formType === 'quote' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="company" className="text-[#1E293B]">
                {t.company}
              </Label>
              <Input
                {...register('company')}
                placeholder={t.companyPlaceholder}
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-[#1E293B]">
                {t.phone}
              </Label>
              <Input
                {...register('phone')}
                type="tel"
                placeholder={t.phonePlaceholder}
              />
            </div>
          </div>
        )}

        <div>
          <Label htmlFor="subject" className="text-[#1E293B]">
            {t.subject}
          </Label>
          <Input
            {...register('subject')}
            placeholder={t.subjectPlaceholder}
            className={errors.subject ? 'border-red-500' : ''}
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="message" className="text-[#1E293B]">
            {t.message}
          </Label>
          <Textarea
            {...register('message')}
            placeholder={t.messagePlaceholder}
            className={`min-h-[150px] ${errors.message ? 'border-red-500' : ''}`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting
          ? t.sending
          : formType === 'quote'
          ? t.requestQuote
          : t.submit}
      </Button>
    </form>
  );
} 