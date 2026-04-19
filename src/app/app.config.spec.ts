import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { appConfig } from './app.config';

describe('appConfig', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [...appConfig.providers],
    });
  });

  it('provides the Angular router', () => {
    expect(TestBed.inject(Router)).toBeTruthy();
  });

  it('provides HttpClient', () => {
    expect(TestBed.inject(HttpClient)).toBeTruthy();
  });
});
