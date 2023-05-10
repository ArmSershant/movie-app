import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  titles = ['THE BASICS', 'GET INVOLVED', 'COMMUNITY', 'LEGAL'];
  firstCol = [
    'About TBDM',
    'Contact Us',
    'Support Forums',
    'API',
    'System Status',
  ];
  secondCol = ['Contribution Bible', 'Add New Movie', 'Add New TV Show'];
  thirdCol = ['Guidelines', 'Discussions', 'Leaderboard', 'Twitter'];
  fourthCol = ['Terms of Use', 'API Terms of Use', 'Privacy Policy'];
}
