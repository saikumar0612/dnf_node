import { Component, OnInit ,NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

 
  registerForm: FormGroup;
  submitted = false;
  public status: string;
  message:string;
  constructor(private formBuilder: FormBuilder,private userservice :UserService,private router: Router,private ngZone: NgZone,) { }

  ngOnInit() {
    console.log('[OK] Component: register.');
      this.registerForm = this.formBuilder.group({
        name: ['', Validators.required],
        surname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        role: ['ROLE_USER'],
        image: [''],
        _id:[''],
        nick:['']
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
        else {
          this.userservice.register(this.registerForm.value).subscribe(
            (res) => {
              console.log('Employee successfully created!')
              if (res.user && res.user._id) {
                this.status = 'success';
                this.message='';
                this.registerForm.reset();
                // form.reset();
            } else {
                this.status = 'error';
                this.message=res.message;
            }
              // this.ngZone.run(() => this.router.navigateByUrl('/users'))
            }, (error) => {
              console.log(error);
            });
        }
      

      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }

  reset()
  {
    this.registerForm.reset();
  }

}
