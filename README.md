### next-translate

Official SDK to integrate your translation system into your Next.js application.


### 🚀 Feature

    Auto fetch the translate from next-translate platform

    Support getStaticProps, getServerSideProps

    Organize translations by locale and namespace 

### 📥 Installation

```bash 
npm install @next-translate/sdk
# or
yarn add @next-translate/sdk
```

### Setting

1.Get token

    Login and navigate to Developer page on next-translate platform

    Generate API token


### How to use in Nextjs project
1. Support getStaticProps

```bash 
import { loadServerTranslations } from '@next-translate/sdk';

export async function getStaticProps({ locale }: { locale: string }) {
  return loadServerTranslations('YOUR_API_TOKEN', locale, ['common', 'homepage']);
}

export default function Home({ translations }: any) {
  return (
    <div>
      <h1>{translations.common.hello}</h1>
      <p>{translations.homepage.welcome}</p>
    </div>
  );
}
```

2. Support newest version of Nextjs
//next.config.js or middleware.ts in Nextjs


```bash 
import { createTranslateClient } from '@next-translate/sdk';

const client = createTranslateClient({ token: process.env.NEXT_TRANSLATE_TOKEN });

const translations = await client.getTranslations({ locale: 'en', namespace: 'common' });

console.log(translations.title); // Hello
```

And we can use it like this.

```bash
const translations = await i18nClient.getTranslations({
  locale: 'vi',
  namespace: 'common',
});

```
### Structural translation (On the platform)

Each locale may have many namespace
Example namespace `common`

```bash
{
  "hello": "Xin chào",
  "logout": "Đăng xuất"
}
```

👨‍💻 License

MIT © 2025 – Built with ❤️ by Lenodev team