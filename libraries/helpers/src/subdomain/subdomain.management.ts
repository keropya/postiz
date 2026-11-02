import { parse } from 'tldts';

export function getCookieUrlFromDomain(domain: string) {
  const url = parse(domain);
  // Apps on sibling subdomains would otherwise overwrite each other's cookies
  if (process.env.COOKIE_HOST_ONLY === 'true' && url.hostname) {
    return url.hostname;
  }

  return url.domain! ? '.' + url.domain! : url.hostname!;
}
