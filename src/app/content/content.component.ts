import { Component } from '@angular/core';


@Component({
  selector: 'content-root',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  select: any = [0, 1, 2, 3, 4];

  value: number = 0;
  value1: number = 0;
  valueS: number = 0;
  valueSis: number = 0;
  valueBro: number = 0;

  resultB: number = 0;
  resultS: number = 0;
  resultD: number = 0;
  resultM: number = 0;
  resultF: number = 0;
  resultW: number = 0;
  resultSi: number = 0;

  mother: boolean = false;
  father: boolean = false;
  wife: boolean = false;


  selection = [
    {
      id: 'father',
      name: 'No'
    },
    {
      id: 'father',
      name: 'Yes'
    }
  ];
  selection1 = [
    {
      id: 'mother',
      name: 'No'
    },
    {
      id: 'mother',
      name: 'Yes'
    }
  ];
  selection2 = [
    {
      id: 'wife',
      name: 'No'
    },
    {
      id: 'wife',
      name: 'Yes'
    }
  ];

  calculateSon(): void {
    if(this.valueS > 0 && !this.father && !this.mother && !this.wife && this.valueBro == 0 && this.valueSis == 0)
    {
      this.resultS =  2 * (this.value1 / (2 * this.valueS + this.value))
    }
    
    else if(this.valueS > 0 && this.value == 0 && !this.father && !this.mother && this.wife && this.valueBro == 0 && this.valueSis == 0)
    {
      this.resultS = (this.value1 - (this.value1 / 8)) / this.valueS
    }

    else if(this.valueS > 0 && this.father && this.mother && this.valueBro == 0 && this.valueSis == 0)
    {
      this.resultS = (this.value1 - (2 * (1 / 6) * this.value1)) / this.valueS 
    }
    else if(this.valueS > 0 && this.value > 0 && !this.father && !this.mother && this.wife && this.valueBro == 0 && this.valueSis == 0)
    {
      this.resultS = 2*((this.value1 - (this.value1 / 8)) / (2 * this.valueS + this.value))
    }
    
  }
  
  calculateDaughters(): void {
    if(this.valueS == 0 && !this.father && !this.mother && !this.wife && this.valueBro == 0 && this.valueSis == 0){
      this.resultD = this.value1;
    }
    else if(this.valueS > 0 && !this.father && !this.mother && !this.wife && this.valueBro == 0 && this.valueSis == 0) 
    {
      this.resultD = ((this.value1 / (2 * this.valueS + this.value)))
    }
    else if((this.valueS == 0 && this.value >= 2)) 
    {
      this.resultD = 2 * (this.value1 / 3)
    }
    else if (this.valueS == 0 && this.value == 1) 
    {
      this.resultD = this.value1 / 2
    }
    else if(this.valueS == 0 && this.value == 0 && this.father && this.mother && (this.valueBro + this.valueSis) >= 2) 
    {
      this.resultD = this.valueSis * (((1 / 3) * this.value1) / (2 * this.valueBro + this.valueSis))
    }
    else if(this.valueS > 0 && this.value > 0 && !this.father && !this.mother && this.wife && this.valueBro == 0 && this.valueSis == 0)
    {
      this.resultD = (this.value1 - (this.value1 / 8)) / (2 * this.valueS + this.value)
    }
  }

  calculateFather():void{
    if(this.father && this.valueS == 0 && this.value >= 2) 
    {
      this.resultF = (1 / 6) * (this.value1 - this.resultD)
    }
    else if(this.father && this.valueS == 0 && this.value == 1)
    {      
      this.resultF = (1 / 6) * (this.value1 - this.resultD)
    }
    else if(this.valueS == 0 && this.value == 0 && this.father && (this.valueBro + this.valueSis) >= 2)
    {
      this.resultF = this.value1 - (this.resultM + this.resultB + this.resultSi + this.resultW)
    }
    else if (this.valueS == 0 && this.value == 0 && this.father && this.valueBro == 1 && this.valueSis == 0)
    {
      this.resultF = this.value1 - (this.resultM + this.resultB + this.resultW)
    }
    else if(this.valueS == 0 && this.value == 0 && this.father && this.valueBro == 0 && this.valueSis == 1)
    {
      this.resultF = this.value1 - (this.resultM + this.resultSi + this.resultW)
    }
    else if(this.valueS == 0 && this.value == 0 && this.father && !this.mother && (this.valueBro+this.valueSis) >= 2)
    {
      this.resultF = this.value1 - (this.resultM + this.resultB + this.resultSi + this.resultW)
    }
    else if(this.valueS == 0 && this.value == 0 && this.father && !this.mother && this.valueBro == 1 && this.valueSis == 0)
    {
      this.resultF = this.value1 - (this.resultM + this.resultB + this.resultW)
    }
    else if(this.valueS == 0 && this.value == 0 && this.father && !this.mother && this.valueBro == 0 && this.valueSis == 1)
    {
      this.resultF = this.value1 - (this.resultM + this.resultSi + this.resultW);
    }
    else if(this.valueS > 0 && this.father && this.mother && this.valueBro == 0 && this.valueSis == 0)
    {
      this.resultF = (1 / 6) * this.value1
    }
  }

  calculateMother():void{
    if(this.mother && this.valueS == 0 && this.value >= 2) 
    {
      this.resultM = (1 / 6) * (this.value1 - this.resultD)
    }
    else if (this.mother && this.valueS == 0 && this.value == 1)
    {
      this.resultM = (1 / 6) * (this.value1 - this.resultD)
    }
    else if(this.mother && this.valueS == 0 && this.value == 0 && this.father && this.valueBro == 0 && this.valueSis == 0)
    {
      this.resultM = (1 / 3) * this.value1
    }
    else if (this.valueS == 0 && this.value == 0 && this.father && this.mother && (this.valueBro + this.valueSis) >= 2) 
    {
      this.resultM = (1 / 6) * this.value1
    }
    else if (this.valueS == 0 && this.value == 0 && !this.father && this.valueBro == 1 && this.valueSis == 0) 
    {
      this.resultM = (1 / 3) * this.value1
    }
    else if(this.valueS == 0 && this.value == 0 && !this.father && this.valueBro == 0 && this.valueSis == 1) 
    {
      this.resultM = (1 / 3) * this.value1;
      this.resultM += this.value1 - (this.resultM + this.resultSi + this.resultW);
    }
    else if (this.valueS == 0 && this.value == 0 && this.father && (this.valueBro + this.valueSis) >= 2) 
    {
      this.resultM = (1 / 6) * this.value1
    }
    else if(this.valueS == 0 && this.value == 0 && this.father && this.valueBro == 1 && this.valueSis == 0) 
    {
      this.resultM = (1 / 3) * this.value1
    }
    else if (this.valueS == 0 && this.value == 0 && this.father && this.valueBro == 0 && this.valueSis == 1) 
    {
      this.resultM = (1 / 3) * this.value1
    }
    else if(this.valueS > 0 && this.father && this.mother && this.valueBro == 0 && this.valueSis == 0)
    {
      this.resultM = (1 / 6) * this.value1
    }
  }

 calculateWife():void{
  if (this.wife && this.valueS == 0 && this.value >= 2) 
  {
    this.resultW = (1 / 8) * this.value1
  }
    else if (this.wife && this.valueS == 0 && this.value == 1) 
    {
      this.resultW = (1 / 8) * this.value1
    }
    else if (this.valueS == 0 && this.value == 0 && this.father && !this.mother && (this.valueBro + this.valueSis) >= 2) 
    {
      this.resultW = (1 / 4) * (this.value1 / 2);
    }
    else if (this.valueS == 0 && this.value == 0 && this.father && this.valueBro == 0 && this.valueSis == 0) 
    {
      this.resultW =  (1 / 4) * (this.value1 / 2)
    }
    else if (this.valueS && this.value == 0 && this.father && this.mother && (this.valueBro + this.valueSis) >= 2) 
    {
      this.resultW = (1 / 4) * (this.value1 / 2)
    }
    else if (this.valueS == 0 && this.value == 0 && !this.father && this.valueBro == 1 && this.valueSis == 0) 
    {
      this.resultW = (1 / 4) * (this.value1 / 2)
    }
    else if (this.valueS == 0 && this.value == 0 && !this.father && this.valueBro == 0 && this.valueSis == 1) 
    {
      this.resultW = (1 / 4) * (this.value1 / 2)
    }
    else if (this.valueS == 0 && this.value == 0 && !this.father && !this.mother && this.valueBro == 0 && this.valueSis == 1) 
    {
      this.resultW = (1 / 4) * (this.value1 / 2)
    }
    else if (this.valueS == 0 && this.value == 0 && !this.father && !this.mother && this.valueBro >= 1 && this.valueSis == 0) {
      this.resultW = (1 / 4) * (this.value1 / 2)
    }
    else if (this.valueS == 0 && this.value == 0 && !this.father && !this.mother && this.valueBro == 0 && this.valueSis >= 2) {
      this.resultW = (1 / 4) * (this.value1 / 2)
    }
    else if (this.valueS == 0 && this.value == 0 && !this.father && !this.mother && this.valueBro > 0 && this.valueSis > 0) 
    {
      this.resultW = (1 / 4) * (this.value1 / 2)
    }
    else if (this.valueS == 0 && this.value == 0 && !this.father && this.valueBro == 0 && this.valueSis == 0) 
    {
      this.resultW = (1 / 4) * (this.value1 / 2)
    }
    else if (this.valueS == 0 && this.value == 0 && !this.father && !this.mother && this.valueBro == 0 && this.valueSis == 0) {
      this.resultW = (1 / 4) * (this.value1 / 2)
    }
    else if (this.valueS == 0 && this.value == 0 && this.father && (this.valueBro + this.valueSis) >= 2) 
    {
      this.resultW = (1 / 4) * (this.value1 / 2)
    }
    else if (this.valueS == 0 && this.value == 0 && this.father && this.valueBro == 0 && this.valueSis == 1) 
    {
      this.resultW = (1 / 4) * (this.value1 / 2)
    }
    else if (this.valueS == 0 && this.value == 0 && this.father && !this.mother && (this.valueBro+this.valueSis) >= 2) {
      this.resultW = (1 / 4) * (this.value1 / 2)
    }
    else if (this.valueS == 0 && this.value == 0 && this.father && !this.mother && this.valueBro == 1 && this.valueSis == 0) 
    {
      this.resultW = (1 / 4) * (this.value1 / 2)
    }
    else if (this.valueS == 0 && this.value == 0 && this.father && !this.mother && this.valueBro == 0 && this.valueSis == 1) 
    {
      this.resultW = (1 / 4) * (this.value1 / 2)
    }
    else if(this.valueS > 0 && this.value == 0 && !this.father && !this.mother && this.wife && this.valueBro == 0 && this.valueSis == 0){
      this.resultW = (1 / 8) * this.value1
    }
    else if(this.valueS > 0 && this.value > 0 && !this.father && !this.mother && this.wife && this.valueBro == 0 && this.valueSis == 0)
    {
      this.resultW = 1 * (this.value1 / 8)
    }
    
  }

  calculateBrothers(): void {
 if (this.valueS == 0 && this.value == 0 && this.father && this.mother && (this.valueBro + this.valueSis) >= 2) 
  {
    this.resultB = this.valueBro * (2 * (1 / 3) * this.value1 / (2 * this.valueBro + this.valueSis))
  }
  else if (this.valueS == 0 && this.value == 0 && !this.father && this.valueBro == 1 && this.valueSis == 0) 
  {
    this.resultB = (1 / 6) * this.value1
  }
  else if (this.valueS == 0 && this.value == 0 && !this.father && !this.mother && this.valueBro >= 1 && this.valueSis == 0) 
  {
    this.resultB = this.value1 - this.resultW;
  }
  else if (this.valueS == 0 && this.value == 0 && !this.father && !this.mother && this.valueBro > 0 && this.valueSis > 0) 
  {
    this.resultB = this.valueBro * (2 * ((this.value1 - this.resultW) / (2 * this.valueBro+this.valueSis)))
  }
  else if (this.valueS == 0 && this.value == 0 && this.father && (this.valueBro+this.valueSis) >= 2) 
  {
    this.resultB = this.valueBro * (2 * (((1 / 3) * this.value1) / (2 * this.valueBro+this.valueSis)))
  }
  else if (this.valueS == 0 && this.value == 0 && this.father && this.valueBro == 1 && this.valueSis == 0) 
  {
    this.resultB = (1 / 6) * this.value1
  }
  else if (this.valueS == 0 && this.value == 0 && this.father && !this.mother && (this.valueBro+this.valueSis) >= 2) 
  {
    this.resultB = this.valueBro * (2 * (((1 / 3) * this.value1) / (2 * this.valueBro+this.valueSis)))
  }
  else if (this.valueS == 0 && this.value == 0 && this.father && !this.mother && this.valueBro == 1 && this.valueSis == 0) 
  {
    this.resultB = (1 / 6) * this.value1
  }
  }

  calculateSisters(): void{
    if(this.valueSis) 
    {
      this.resultSi = this.valueSis * ((this.value1 - this.resultW) / (2 * this.valueBro + this.valueSis))
    }
    else if (this.valueS == 0 && this.value == 0 && !this.father && !this.mother && this.valueBro == 0 && this.valueSis >= 2) 
    {
      this.resultSi = (2 / 3) * (this.value1 - this.resultW);
    }
    else if (this.valueS == 0 && this.value == 0 && !this.father && this.valueBro == 0 && this.valueSis == 1) 
    {
      this.resultSi = (1 / 6) * this.value1 
    }
    else if (this.valueS == 0 && this.value == 0 && this.father && this.valueBro == 0 && this.valueSis == 1) 
    {
      this.resultSi = (1 / 6) * this.value1
    }
    else if (this.valueS == 0 && this.value == 0 && this.father && (this.valueBro + this.valueSis) >= 2) 
    {
      this.resultSi = this.valueSis * (((1 / 3) * this.value1) / (2 * this.valueBro + this.valueSis))
    }
    else if (this.valueS == 0 && this.value == 0 && !this.father && !this.mother && this.valueBro == 0 && this.valueSis == 1) 
    {
      this.resultSi = (1 / 2) * this.value1
    }
    else if (this.valueS == 0 && this.value == 0 && !this.father && !this.mother && this.valueBro > 0 && this.valueSis > 0) 
    {
      this.resultSi = this.valueSis * ((this.value1 - this.resultW) / (2 * this.valueBro+this.valueSis));
    }
    else if (this.valueS == 0 && this.value == 0 && this.father && !this.mother && (this.valueBro + this.valueSis) >= 2) 
    {
      this.resultSi = this.valueSis * (((1 / 3) * this.value1) / (2 * this.valueBro+this.valueSis))
    }
    else if (this.valueS == 0 && this.value == 0 && this.father && !this.mother && this.valueBro == 0 && this.valueSis == 1) 
    {
      this.resultSi = (1 / 6) * this.value1
    }
  }

  Calculate() {
    this.calculateSon() 
    this.calculateDaughters()
    this.calculateFather()
    this.calculateMother()
    this.calculateWife()
    this.calculateBrothers()
    this.calculateSisters()
  }                   
}