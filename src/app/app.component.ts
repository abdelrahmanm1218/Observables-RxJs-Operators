import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { UserService } from './user/user.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'observales';
  constructor(private userService:UserService){}
  isActivated = false;
  private ActivatedSubscription!:Subscription;
  ngOnInit(): void {
      this.ActivatedSubscription =this.userService.activated.subscribe(data=>{
        this.isActivated = data;
      })
  }
  ngOnDestroy(): void {
      this.ActivatedSubscription.unsubscribe();
  }
}
