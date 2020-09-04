import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-horoscopedetails',
  templateUrl: './horoscopedetails.component.html',
  styleUrls: ['./horoscopedetails.component.css']
})
export class HoroscopedetailsComponent implements OnInit {
@Input() name;
@Input() data;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
