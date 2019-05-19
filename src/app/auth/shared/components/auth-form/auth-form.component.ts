import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Controlable} from '../../../../controlable.interface';
import {untilDestroyed} from 'ngx-take-until-destroy';
import {ControlsQuery} from '../../../../state';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit, OnDestroy, Controlable {

  @Output()
  submitted = new EventEmitter<FormGroup>();

  form = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private controlsQuery: ControlsQuery
  ) {
  }

  ngOnInit(): void {
    this.bindControls();
  }

  bindControls(): void {
    this.controlsQuery.select()
      .pipe(untilDestroyed(this))
      .subscribe(state => this.handleControl(state.button));
  }

  private handleControl(button: string) {
    if (button === 'start') {
      this.submitForm();
    }
  }

  private submitForm() {
    if (this.form.valid) {
      this.submitted.emit(this.form);
    }
  }

  get passwordInvalid() {
    const control = this.form.get('password');
    return control.hasError('required') && control.touched;
  }

  get emailFormat() {
    const control = this.form.get('email');
    return control.hasError('email') && control.touched;
  }

  ngOnDestroy(): void {
  }
}
