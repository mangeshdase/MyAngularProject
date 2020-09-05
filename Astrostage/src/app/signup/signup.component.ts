import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { faCentos } from '@fortawesome/free-brands-svg-icons'
declare var NgForm:any;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public faCentos = faCentos;
  public fbFormGroup =this.fb.group({
    username:['',Validators.required],
    password:['',[Validators.required,Validators.minLength(6)]],
  //confirmpassword:['',Validators.required],
    email:['',Validators.required],
    mobile:['', Validators.required],
    //tnc:['',Validators.required]
  });
  constructor(
    private fb : FormBuilder,
    private router : Router,
    private http : HttpClient
  ) { }

  ngOnInit(): void {}
//get fval(){
 // return this.fbFormGroup.controls;
//}
//signup(){
 // if(this.fbFormGroup.invalid){
  //  return;
 // }
 // alert('form fields are validated successfully!');
//}
  async registerHere(){
    const data = this.fbFormGroup.value;
    const url = 'http://localhost:3000/adduser';

    await this.http.post(url,data).toPromise();
    this.router.navigate(['login']);
  }

}
