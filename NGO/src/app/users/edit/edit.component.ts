import { Component, OnInit ,NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  public status: string;
  message:string;
  
  constructor(private formBuilder: FormBuilder,private userservice :UserService,private router: Router,private ngZone: NgZone,
    private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      if(params.id)
        this.getuser(params.id);

    });
   }

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


  getuser(id)
  {
    this.userservice.getUser(id).subscribe(
      (res) => {
        if (res.user && res.user._id) {
          this.status = '';
          this.message='';
          this.registerForm = this.formBuilder.group({
            name: [res.user.name, Validators.required],
            surname: [res.user.surname, Validators.required],
            email: [res.user.email, [Validators.required, Validators.email]],
            password: [res.user.password, [Validators.required, Validators.minLength(6)]],
            role: [res.user.role],
            image: [res.user.image],
            _id:[res.user._id],
            nick:[res.user.nick]
          });
      } else {
          this.status = 'error';
          this.message=res.message;
      }
      }, (error) => {
        console.log(error);
      });
  }
  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
        else {
          this.userservice.updateUser(this.registerForm.value).subscribe(
            (res) => {
              if (res.user && res.user._id) {
                this.status = 'success';
                this.message='';
                setTimeout(() => {
                  this.ngZone.run(() => this.router.navigateByUrl('/user/view'))              
                }, 3000);
            } else {
                this.status = 'error';
                this.message=res.message;
            }
            }, (error) => {
              if (error.error.message) {
                this.status = 'error';
                this.message=error.error.message;
              }
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
