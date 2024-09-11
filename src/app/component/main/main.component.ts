import { Component, OnInit } from '@angular/core';
import { DiaryService } from 'src/app/services/diary.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
allDiary:any
  constructor(private service:DiaryService) { }

  ngOnInit(): void {
    this.getAll()
  }
  //get all Diary for use length
  getAll(){
    this.service.getAllDiary().subscribe(res=>{
      this.allDiary=res
    })
  }
}
