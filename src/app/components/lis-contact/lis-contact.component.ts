import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/models/interfaces/Contact.interface';
import { ContactServiceService } from 'src/app/services/contact-service.service';

@Component({
  selector: 'app-lis-contact',
  templateUrl: './lis-contact.component.html',
  styleUrls: ['./lis-contact.component.scss']
})
export class LisContactComponent implements OnInit {

  constructor(private service: ContactServiceService) { }
  contact:IContact | undefined
  listContact:IContact[] | undefined

  ngOnInit(): void {
    this.contact=this.service.findById(1);
    this.listContact=this.service.obtenerCntactos();
  }

}
