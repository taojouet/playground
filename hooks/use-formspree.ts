import { useState } from 'react';

type FormspreeState = {
  submitting: boolean;
  succeeded: boolean;
  errors: any[];
};

type FormspreeResponse = {
  ok: boolean;
  message?: string;
  errors?: any[];
};

export function useFormspree(formId: string) {
  const [state, setState] = useState<FormspreeState>({
    submitting: false,
    succeeded: false,
    errors: [],
  });

  const handleSubmit = async (values: any): Promise<FormspreeResponse> => {
    setState({ submitting: true, succeeded: false, errors: [] });

    try {
      // In a real implementation, this would use the actual Formspree endpoint
      // const response = await fetch(`https://formspree.io/f/${formId}`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(values),
      // });
      
      // For demo purposes, simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // const data = await response.json();
      // if (!response.ok) {
      //   throw new Error(data.error || 'An error occurred while submitting the form');
      // }

      setState({ submitting: false, succeeded: true, errors: [] });
      return { ok: true };
    } catch (error) {
      console.error('Form submission error:', error);
      setState({
        submitting: false,
        succeeded: false,
        errors: [{ message: 'An error occurred while submitting the form' }],
      });
      return {
        ok: false,
        message: 'An error occurred while submitting the form',
        errors: [{ message: 'An error occurred while submitting the form' }],
      };
    }
  };

  return [state, handleSubmit] as const;
}