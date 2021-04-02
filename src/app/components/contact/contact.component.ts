import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {ContactServices} from './contact.service';

export interface IContact{
  firstname: string;
  email: string;
  message: string;
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

   constructor( private contactservice:ContactServices,private formBuilder: FormBuilder) {}

   form:FormGroup
   submitted = false;
   ngOnInit(): void {
     this.form = this.formBuilder.group ({
       firstname :['',Validators.required],
       email :['',[Validators.required,Validators.pattern("^([\\w-]+(?:\\.[\\w-]+)*)@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([A-Za-z]{2,6}(?:\\.[A-Za-z]{2,6})?)$")]],
       message :['',Validators.required],
   
     })
   }
  
   // convenience getter for easy access to form fields
    get f() { return this.form.controls; }
    submitToemail(){
      this.submitted=true;
      //console.log(this.form.value);
      if(this.form.valid){
      this.contactservice.postData(this.form.value)
       .subscribe((body) => {
        console.log("server recieve our data.");
        alert('Submitted Successfully.');
        this.form.reset();
       })
      }
    }
  
  

}