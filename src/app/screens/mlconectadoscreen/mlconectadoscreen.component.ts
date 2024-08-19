import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mlconectadoscreen',
  templateUrl: './mlconectadoscreen.component.html',
  styleUrls: ['./mlconectadoscreen.component.scss']
})
export class MlconectadoscreenComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goHome(){
    this.router.navigate(['']);
  }

}
