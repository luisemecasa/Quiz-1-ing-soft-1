import { Resend } from 'resend';
const resend = new Resend('re_hhk7sqyf_2AdYtN2G6ZDE4EULUSBkPoEU');

(async function () {
    try {
      const data = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['delivered@resend.dev'],
        subject: 'Hello World',
        html: '<strong>It works!</strong>',
      });
  
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  })();