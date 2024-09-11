import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { DiaryService } from 'src/app/services/diary.service';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent implements OnInit {
  addDiary!: FormGroup;
  
  constructor( private formBuilder: FormBuilder,private service:DiaryService,private toastr:ToastrService,) { }

  ngOnInit(): void {
    //get value from form
    this.addDiary = this.formBuilder.group({
      title: new FormControl("", [Validators.required]),
      date:    ["", [Validators.required]],
      entry:    ["", [Validators.required]],
    
    });
  }
   PostDiary(){
     //add diary to data base
      this.service.addDiary(this.addDiary).subscribe(res=>{
        //alert for succes
        this.toastr.success("succes")

      },error=>{          //alert for error
        this.toastr.error("oops error")
    }
      )
   }
}
