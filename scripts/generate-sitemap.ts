import fs from 'fs';
import globby from 'globby';
import path from 'path';
import prettier from 'prettier';

(async () => {
  const baseURL = 'https://nextjs-starter.ferlopezm94.now.sh';
  const prettierConfig = await prettier.resolveConfig(`${__dirname}/../.prettierrc`);

  // Ignore Next.js specific files (e.g., _app.ts) and API routes.
  const pages = await globby([
    `${__dirname}/../src/pages/**/*{.ts,.tsx}`,
    `!${__dirname}/../src/pages/_*{.ts,.tsx}`,
    `!${__dirname}/../src/pages/api`,
  ]);

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(page => {
          const filename = path.basename(page).replace('.tsx', '').replace('.ts', '');
          const route = filename === 'index' ? '' : path;

          return `
            <url>
              <loc>${`${baseURL}/${route}`}</loc>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  fs.writeFileSync('public/sitemap.xml', formatted);
})();
