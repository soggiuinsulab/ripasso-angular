import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { RouterLink } from '@angular/router';
import { selectIsSubmitting, selectValidationErrors } from '../../store/reducers';
import { BackendErrorMessages } from 'src/app/shared/components/backendErrorMessages/backendErrorMessages.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { authActions } from '../../store/actions';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule, BackendErrorMessages]
})
export class RegisterComponent {
  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  })
  data$ = combineLatest({
    isSubmitting$: this.store.select(selectIsSubmitting),
    backendErrors$: this.store.select(selectValidationErrors)
  })

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private authService: AuthService
  ) {}

  onSubmit() {
    console.log(this.form.getRawValue())
    const request: RegisterRequestInterface = {
      user: this.form.getRawValue()
    }
    this.store.dispatch(authActions.register({ request }))
    this.authService.register(request).subscribe((response) => console.log('response', response))
  }
}
