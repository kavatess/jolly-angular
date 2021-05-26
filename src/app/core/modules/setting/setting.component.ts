import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/blocks/auth/auth.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout(): void {
    const confirm = window.confirm('Bạn chắc chắn muốn đăng xuất khỏi jolly-farm ?');
    if (confirm) {
      this.authService.logout();
    }
  }
}
