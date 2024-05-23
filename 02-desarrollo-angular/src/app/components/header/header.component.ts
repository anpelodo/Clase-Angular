import { Component, OnInit } from '@angular/core';
import { Theme, ThemeEnum } from 'src/app/models/types';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  theme!: Theme;

  constructor(private themeService: ThemeService){}

  ngOnInit(): void {
    this.theme = this.themeService.getTheme();
  }

  toggleTheme(): void {
    this.theme = this.themeService.toggleTheme();
  }

  get icon(): string {
    return this.theme === ThemeEnum.DARK ? '🌜' : '🌞';
  }
}
