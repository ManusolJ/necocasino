import { Component } from '@angular/core';

import { HOME_PAGE_SECTIONS } from '@constants/home-sections';

import { CardList } from './card-list/card-list';

@Component({
  imports: [CardList],
  selector: 'app-home',
  templateUrl: './home.html',
  host: { class: 'flex flex-col gap-6 lg:gap-8' },
})
export class Home {
  protected readonly sections = HOME_PAGE_SECTIONS;
}
