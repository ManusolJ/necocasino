import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Banner } from '@layout/banner/banner';
import { Sidebar } from '@layout/sidebar/sidebar';

@Component({
  imports: [RouterOutlet, Sidebar, Banner],
  selector: 'app-lobby',
  templateUrl: './lobby.html',
  host: { class: 'flex flex-1 flex-col lg:flex-row' },
})
export class Lobby {}
