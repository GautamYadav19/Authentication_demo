import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { ServiceService } from './service.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDividerModule,
    FlexLayoutModule,
    MatButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Authentication';
  error: any;
  constructor(public fb: FormBuilder, private service: ServiceService,public route:Router) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      username: [''],
      password: [''],
    });
  }
  form!: FormGroup;
  submit() {
    console.log(this.form.value);
    this.service.login(this.form.value).subscribe({
      next:(res:any)=>{
        if(res.status==1){

          this.route.navigateByUrl('/home')
        }
        console.log(res)
      },error:(e)=>{
        console.log(e)
      }
    })
  }
}
