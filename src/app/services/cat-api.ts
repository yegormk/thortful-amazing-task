import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { CatImage } from 'src/app/interfaces/cat-image.interface';
import { CatBreed } from '../interfaces/cat-breed.interface';

@Injectable({
  providedIn: 'root',
})
export class CatApi {
  private httpClient = inject(HttpClient);

  /**
   * Retrieve the full list of cat breeds
   */
  public getBreeds(): Observable<CatBreed[]> {
    return this.httpClient.get<CatBreed[]>(environment.apiUrl + '/breeds');
  }

  /**
   * Retrieve cat images for a specific breed
   *
   * @param breedsId
   *
   * @param count
   */
  public getImagesOfSpecificBreed(breedsId = '', count = 12): Observable<CatImage[]> {
    return this.httpClient.get<CatImage[]>(
      `${environment.apiUrl}/images/search?limit=${count}${breedsId ? '&breed_ids=' + breedsId : ''}`
    );
  }
}
