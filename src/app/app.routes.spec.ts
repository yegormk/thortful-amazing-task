import { routes } from './app.routes';

describe('routes', () => {
  it('redirects the root path to cats-search', () => {
    expect(routes[0]).toMatchObject({
      path: '',
      pathMatch: 'full',
      redirectTo: 'cats-search',
    });
  });

  it('lazy-loads the panel page for cats-search', async () => {
    const panelRoute = routes.find((route) => route.path === 'cats-search');

    expect(panelRoute?.loadComponent).toBeTypeOf('function');
    const panelComponent = await panelRoute?.loadComponent?.();

    // @ts-expect-error Angular types loadComponent() too broadly for direct name access here.
    expect(panelComponent?.name).toContain('Panel');
  });

  it('lazy-loads the breeds library page', async () => {
    const breedsLibraryRoute = routes.find((route) => route.path === 'breeds-library');

    expect(breedsLibraryRoute?.loadComponent).toBeTypeOf('function');
    const breedsLibraryComponent = await breedsLibraryRoute?.loadComponent?.();

    // @ts-expect-error Angular types loadComponent() too broadly for direct name access here.
    expect(breedsLibraryComponent?.name).toContain('BreedsLibrary');
  });
});
