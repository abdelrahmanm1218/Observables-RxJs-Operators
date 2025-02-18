import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
  id!:number|null;
  constructor(private route:ActivatedRoute, private userService:UserService){}
  handleActivate(){
    this.userService.activated.next(true);
  }
  ngOnInit(): void {
      this.route.params.subscribe(
        (params:Params)=>{
          this.id = +params['id']
        }
      )
  }

}
