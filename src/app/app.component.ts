import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  firstname: string = 'Asad';
  lastname : string = 'Habeeb';
  
  checkproperty: String = 'PropertyBindingChecking';

  isHidden: boolean = false;

  isActive: boolean = true;

  multiCssClasses: string = 'colorChange bgColor';

  singleCssChange: boolean = true;

  inlineColor: string = 'green';

  inlineFont: boolean = true;

  youtuberName : string = "AsadHabeeb";

  favColor = "red";

  colors = ['Red','Green','Blue'];

  bio = [{id:1, name:"Asad"},
  {id:2, name:"Habeeb"},
  {id:3, name:"Ranjha"}]
  
email: string = 'AsadHabeeb';

getEmail(){
  console.log(this.email);
}

biodata = {
name: "Asad Habeeb",
age: 24,
boards: 67.66,
salary: 134,
born: new Date(2000,0,21)
}

multiCssClass = {
  'colorChange': true,
  'bgColor': true,
  'singleCssColorChange': false
}

inlineCssStyle = {
    'color': 'green',
    'backgroundColor': 'silver'
}

  youknowmyname(): string{
    return this.firstname + this.lastname;
  }

  texts: string = "";
  myfunctionforclick(){
    console.log('Welcome to Asad Habeeb Angular');
    this.texts = 'Asad Habeeb Angular'; 
  }

}
