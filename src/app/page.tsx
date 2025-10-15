import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('home');
  return (
    <main className="p-6 text-center">
      <h1 className="text-3xl font-bold">{t('title')}</h1>
      <p className="text-gray-600 mt-2">{t('description')}</p>
    </main>
  );
}
