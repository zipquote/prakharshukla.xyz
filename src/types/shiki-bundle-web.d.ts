declare module 'shiki/bundle/web' {
  import type { BundledLanguage, Theme } from 'shiki';

  export type { BundledLanguage };

  export function codeToHtml(
    code: string,
    options: { lang: BundledLanguage; theme: Theme | string }
  ): Promise<string>;
}
