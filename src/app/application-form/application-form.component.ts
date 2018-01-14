import { Component, OnInit } from '@angular/core';
import {application } from './application';
import {AddUserService} from '../services/add-user.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {

  private mail : any;
  private model = new application();
  private existDeja:boolean;
  private submitted = false;
  constructor(private adduser: AddUserService) {  }

  ngOnInit() {
  }
  pays = ['Afrique du Sud', 'Afghanistan', 'Albanie', 'Algérie','Allemagne','Andorre','Angola','Antigua-et-Barbuda','Arabie Saoudite','Argentine,Arménie','Australie','Autriche','Azerbaïdjan','Bahamas,Bahreïn','Bangladesh','Barbade','Belgique',
    'Belize','Bénin','Bhoutan','Biélorussie','Birmanie','Bolivie','Bosnie-Herzégovine','Botswana','Brésil','Brunei','Bulgarie','Burkina','Faso','Burundi','Cambodge','Cap-Vert','Cameroun','Canada','Chili','Chine','Chypre','Colombie','Comores','Corée du Nord','Corée du Sud','Costa Rica','Côte d’Ivoire','Croatie','Cuba','Danemark','Djibouti','Dominique','Égypte','Émirats arabes unis','Équateur','Érythrée','Espagne','Estonie','États-Unis','Éthiopie','Fidji','Finlande','France','Gabon','Gambie','Géorgie','Ghana',
    'Grèce','Grenade','Guatemala','Guinée','Guinée','équatoriale','Guinée-Bissau','Guyana','Haïti','Honduras','Hongrie','Îles','Cook Îles Marshall','Inde','Indonésie','Irak','Iran','Irlande','Islande','Italie','Jamaïque','Japon','Jordanie','Kazakhstan','Kenya','Kirghizistan','Kiribati','Kosovo','Koweït','Laos','Lesotho','Lettonie','Liban',
    'Liberia','Libye','Liechtenstein','Lituanie','Luxembourg','Macédoine','Madagascar','Malaisie','Malawi','Maldives','Mali','Malte','Maroc','Maurice','Mauritanie','Mexique','Micronésie','Moldavie','Monaco','Mongolie','Monténégro',
    'Mozambique','Namibie','Nauru','Népal','Nicaragua','Niger','Nigeria','Niue','Norvège','Nouvelle-Zélande','Oman','Ouganda','Ouzbékistan','Pakistan','Palaos','Palestine','Panama','Papouasie-Nouvelle-Guinée','Paraguay','Pays-Bas','Pérou','Philippines','Pologne','Portugal','Qatar','République centrafricaine',
    'République démocratique du Congo','République Dominicaine','République du Congo','République tchèque','Roumanie Royaume-Uni','Russie','Rwanda','Saint-Kitts-et-Nevis','Saint-Vincent-et-les-Grenadines',
    'Sainte-Lucie','Saint-Marin','Salomon','Salvador','Samoa','São Tomé-et-Principe','Sénégal','Serbie','Seychelles','Sierra Leone','Singapour','Slovaquie','Slovénie','Somalie','Soudan','Soudan du Sud','Sri Lanka','Suède','Suisse','Suriname','Swaziland','Syrie','Tadjikistan','Tanzanie','Tchad','Thaïlande','Timor oriental','Togo',
    'Tonga','Trinité-et-Tobago','Tunisie','Turkménistan','Turquie','Tuvalu','Ukraine','Uruguay','Vanuatu','Vatican','Venezuela','Viêt Nam','Yémen','Zambie','Zimbabwe'];
  
  

  onSubmit() {
    
    //just to make the form in the json format to put simpler
    var saveObject = JSON.stringify({
      "user_fullName" : this.model.fullName,
      "mail_adress" : this.model.mailAdress,
      "password" : this.model.password,
      "phone_number" : this.model.phoneNumber,
      "pays" : this.model.pays,
      "gender" : this.model.gender,
      "inscription_time" : Math.floor(Date.now() / 1000)
      });
    // here we subscribe to the service to  add the user
    let res=this.adduser.addUser(saveObject);    
  }
}


