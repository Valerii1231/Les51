import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  users = [
    { name: "Mike", status: "I'm learning angular", url: "https://i.pravatar.cc/150?img=12", isShowDetails: false },
    { name: "Nikola", status: "Playing piano", url: "https://i.pravatar.cc/150?img=7", isShowDetails: false },
    { name: "Bob", status: "Translations from Chinese", url: "https://i.pravatar.cc/150?img=11", isShowDetails: false },
    { name: "Anna", status: "Pretty girl", url: "https://i.pravatar.cc/150?img=1", isShowDetails: false },
  ];

}