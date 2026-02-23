import { projects } from './projects';

describe('projects data', () => {
  test('each project has a slug and slugs are unique', () => {
    const slugs = projects.map(p => p.slug);
    const unique = new Set(slugs);
    expect(slugs.every(s => typeof s === 'string' && s.length > 0)).toBe(true);
    expect(unique.size).toBe(slugs.length);
  });

  test('external and repo URLs are valid https', () => {
    for (const p of projects) {
      expect(p.external.startsWith('https://')).toBe(true);
      expect(p.repo.startsWith('https://')).toBe(true);
    }
  });
});
