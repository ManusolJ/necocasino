import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Sidebar } from '@layout/sidebar/sidebar';

@Component({
  imports: [RouterOutlet, Sidebar],
  selector: 'app-lobby',
  templateUrl: './lobby.html',
  host: { class: 'flex flex-1 flex-col' },
})
export class Lobby {}
