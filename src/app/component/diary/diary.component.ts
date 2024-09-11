import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiaryService } from 'src/app/services/diary.service';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
allDiary:any
  constructor(private router:Router,private service:DiaryService) { }

  ngOnInit(): void {
    this.getAll()
  }
  goToAdd(){
    this.router.navigate(['/formAdd'])
  }
  //go to Edit page with send id at path
  goEdit(id:string){
    this.router.navigate(['/formEdit'+id])

  }
  getAll(){
    this.service.getAllDiary().subscribe(res=>{
      this.allDiary=res
    })
  }

}
