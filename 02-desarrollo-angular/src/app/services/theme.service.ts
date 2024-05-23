import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Theme, ThemeEnum } from '../models/types';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(@Inject(DOCUMENT) private doc: Document) {}

  toggleTheme(): Theme {
    const theme = this.doc.documentElement.getAttribute('data-theme');

    const newTheme =
      theme === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK;

    this.doc.documentElement.setAttribute('data-theme', newTheme);

    return newTheme;
  }

  getTheme(): Theme {
    return this.doc.documentElement.getAttribute('data-theme') as Theme;
  }
}
