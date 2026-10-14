import { createFileRoute } from '@tanstack/react-router';
import { ContentPage } from '@/components/portfolio/content';
export const Route = createFileRoute('/contact')({
 head: () => ({meta:[{title:'Contact | Lakshita Rathore'},{name:'description',content:'Connect with Lakshita Rathore and download her student résumé.'},{property:'og:title',content:'Contact | Lakshita Rathore'},{property:'og:description',content:'Connect with Lakshita Rathore and download her student résumé.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: Page,
});
function Page(){return <ContentPage page="contact"/>;}
