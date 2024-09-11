import { Component, OnInit } from '@angular/core';
import { DiaryService } from 'src/app/services/diary.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
user:any
  constructor(private service:UserService) { }

  ngOnInit(): void {
   
  }
  getUserById(id:string){
    this.service.getUserById(id).subscribe(
      res=>{
        this.user=res
      }
    )
  }

}
