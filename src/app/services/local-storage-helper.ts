import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageHelperService {
  /** Local storage property */
  private locStorage: Storage = localStorage;

  /**
   * Save data into local storage with ability to specify the key
   *
   * @param key
   *
   * @param value
   */
  saveData<T>(key: string, value: T): void {
    this.locStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * Retrieve data from local storage
   *
   * @param key
   */
  getData<T>(key: string): T | null {
    const storedValue = this.locStorage.getItem(key);
    if (storedValue === null) {
      return null;
    }

    try {
      return JSON.parse(storedValue) as T;
    } catch (error) {
      console.error(`Failed to parse localStorage value for key ${key}`, error);
      return null;
    }
  }

  /**
   * Remove data from local storage with specific key
   *
   * @param key
   */
  removeData(key: string): void {
    this.locStorage.removeItem(key);
  }

  /**
   * Remove data from whole local storage
   */
  clearData(): void {
    this.locStorage.clear();
  }
}
