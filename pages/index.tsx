import dynamic from 'next/dynamic';
import {Suspense} from 'react';

export default function Home() {
  const TitlePageContent = dynamic(() => import('../src/modules/title/page/titlePage'));
  const ServicePageContent = dynamic(() => import('../src/modules/service/page/ServicesPage'));
  const NewsPageContent = dynamic(() => import('../src/modules/news/page/NewsPage'));
  const ContactsPageContent = dynamic(() => import('../src/modules/contacts/page/ContactsPage'));
  const FooterPageContent = dynamic(() => import('../src/modules/footerPage/page/FooterPage'));

  return (
    <main className="flex flex-col w-[100%]">
      <script src="http://localhost:8097" async />
      <Suspense>
        <TitlePageContent />
      </Suspense>
      <Suspense>
        <ServicePageContent />
      </Suspense>
      <Suspense>
        <NewsPageContent />
      </Suspense>
      <Suspense>
        <ContactsPageContent />
      </Suspense>
      <Suspense>
        <FooterPageContent />
      </Suspense>
    </main>
  );
}
