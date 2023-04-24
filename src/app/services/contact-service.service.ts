import { Injectable } from '@angular/core';
import { CONTACTOS } from '../mocks/Contact.mock';
import { IContact } from '../models/interfaces/Contact.interface';
@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  //servicio para brindar solo datos
  constructor() { }

obtenerCntactos(): IContact[]{
  return CONTACTOS;
}

findById(id:number): IContact|undefined{
  const contact=CONTACTOS.find(
    (c:IContact)=>c.id==id );
  if(contact){
    return contact;
  }
  else return;
}

}
