import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { environment } from 'src/environments/environment';

import { CatApi } from './cat-api';

describe('CatApi', () => {
  let service: CatApi;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(CatApi);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('requests breeds from the breeds endpoint', () => {
    service.getBreeds().subscribe();

    const req = httpMock.expectOne(`${environment.apiUrl}/breeds`);
    expect(req.request.method).toBe('GET');
    req.flush([]);
  });

  it('requests breed images with default limit and without breed filter', () => {
    service.getImagesOfSpecificBreed().subscribe();

    const req = httpMock.expectOne(`${environment.apiUrl}/images/search?limit=12`);
    expect(req.request.method).toBe('GET');
    req.flush([]);
  });

  it('requests breed images with custom breed and limit', () => {
    service.getImagesOfSpecificBreed('beng', 20).subscribe();

    const req = httpMock.expectOne(`${environment.apiUrl}/images/search?limit=20&breed_ids=beng`);
    expect(req.request.method).toBe('GET');
    req.flush([]);
  });
});
