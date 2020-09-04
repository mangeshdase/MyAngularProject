import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {faCentos} from '@fortawesome/free-brands-svg-icons';
import { LogoutComponent } from '../logout/logout.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public faCentos = faCentos;
  constructor(private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem('sid')){
      this.router.navigate(['login']);
    }
  }

  processLogout() {
    this.modalService.open(LogoutComponent,{centered: true,});
  }
}
