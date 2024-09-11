import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DiaryService } from 'src/app/services/diary.service';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {
Edit!:FormGroup
id!:string
  constructor(private route:ActivatedRoute,private formBuilder: FormBuilder,private service:DiaryService,private toastr:ToastrService,) { }

  ngOnInit(): void {
      //get value from form
      this.Edit = this.formBuilder.group({
        title: new FormControl("", [Validators.required]),
        date:    ["", [Validators.required]],
        entry:    ["", [Validators.required]],
      
      });
      //get id from path
      this.id = this.route.snapshot.params["id"];

  }
  EditDiary(){
    //edit diary
    this.service.EditDiary(this.Edit,this.id).subscribe(
      res=>{
         //alert for succes
         this.toastr.success("updated")
      },error=>{
           //alert for error
           this.toastr.error("oops error")
      }
    )
  }

}
