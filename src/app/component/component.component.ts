import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {
  idForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private api: AuthService, private dialogRef: MatDialogRef<ComponentComponent>) { }

  id1data: boolean = false;
  id1d: any
  id2data: boolean = false;
  id2d: any
  submit() {
    this.id1d = localStorage.getItem('id1')
    this.id2d = localStorage.getItem('id2')

    if (this.idForm.valid) {
      if (this.id1d !== null) {
        this.id1data = true;
      } else if (this.id1data === false) {
        localStorage.setItem('id1', this.idForm.value.id1)
      }

      if (this.id2d !== null) {
        this.id2data = true
      } else {
        localStorage.setItem('id2', this.idForm.value.id2)
      }
      // localStorage.setItem('id1', this.idForm.value.id1)
      // localStorage.setItem('id2', this.idForm.value.id2)
      window.location.reload();
    }
  }

  ngOnInit(): void {
    this.idForm = this.formBuilder.group({
      id1: [''],
      id2: ['']
    })
  }
}
