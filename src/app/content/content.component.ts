import { Component, OnInit, } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'content-root',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

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

  mother: boolean = true;
  father: boolean = true;
  wife: boolean = true;


  familyGroup = this.formBuilder.group({
    sonsArray: this.formBuilder.array([]),
    daughterArray: this.formBuilder.array([]),
    sisterArray: this.formBuilder.array([]),
    brotherArray: this.formBuilder.array([]),
    
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  getValue() { }

  get getControls(): FormArray {
    return this.familyGroup.get('sonsArray') as FormArray;
  }

  get getControls1(): FormArray {
    return this.familyGroup.get('daughterArray') as FormArray;
  }

  get getControls2(): FormArray {
    return this.familyGroup.get('brotherArray') as FormArray;
  }

  get getControls3(): FormArray {
    return this.familyGroup.get('sisterArray') as FormArray;
  }


  addSon() {
    this.valueS++
    this.familyGroup.controls.sonsArray.push((new FormBuilder).control({
      son: [null, [Validators.required]]
    }));
  }

  removeSon() {
    if (this.valueS !== -1) {
      this.familyGroup.controls.sonsArray.removeAt(this.familyGroup.controls.sonsArray.length - 1);
      this.valueS--
    }
  }

  addDaughter() {
    this.value++
    this.familyGroup.controls.daughterArray.push((new FormBuilder).control({
      daughter: [null, [Validators.required]]
    }));
    console.log(this.value)
    console.log(this.familyGroup.controls.daughterArray.value);
  }

  removeDaughter() {
    if (this.value !== -1) {
      this.familyGroup.controls.daughterArray.removeAt(this.familyGroup.controls.daughterArray.length - 1);
      this.value--
    }
    console.log(this.value)
    console.log(this.familyGroup.controls.daughterArray.value);
  }

  addSister() {
    this.valueSis++
    this.familyGroup.controls.sisterArray.push((new FormBuilder).control({
      sister: [null, [Validators.required]]
    }));
    console.log(this.valueSis)
    console.log(this.familyGroup.controls.sisterArray.value);
  }

  removeSister() {
    if (this.valueSis !== -1) {
      this.familyGroup.controls.sisterArray.removeAt(this.familyGroup.controls.sisterArray.length - 1);
      this.valueSis--
    }
    console.log(this.valueSis)
    console.log(this.familyGroup.controls.sisterArray.value);
  }

  addBrother() {
    this.valueBro++
    this.familyGroup.controls.brotherArray.push((new FormBuilder).control({
      brother: [null, [Validators.required]]
    }))
  }

  removeBrother() {
    if (this.valueBro !== -1) {
      this.familyGroup.controls.brotherArray.removeAt(this.familyGroup.controls.brotherArray.length - 1);
      this.value--
    }
  }

  calculateSon(): void {
    if (this.valueS > 0 && !this.father && !this.mother && !this.wife) {
      this.resultS = 2 * (this.value1 / (2 * this.valueS + this.value))
    }
    else if (this.valueS > 0 && this.value == 0 && this.wife && !this.father && !this.mother && this.valueBro >= 0 && this.valueSis >= 0) {
      this.resultS = (this.value1 - (this.value1 / 8)) / this.valueS
    }
    else if (this.valueS > 0 && this.father && this.mother && !this.wife) {
      this.resultS = (this.value1 - ((1 / 3) * this.value1) - this.value * ((this.value1 - (1 / 3) * this.value1) / (2 * this.valueS + this.value))) / this.valueS
    }
    else if (this.valueS > 0 && this.father && this.mother && this.wife) {
      this.resultS = (this.value1 - ((1 / 3) * this.value1) - this.value * ((this.value1 - (1 / 3) * this.value1 - (this.value1 / 8)) / (2 * this.valueS + this.value)) - ((1 / 8) * this.value1)) / this.valueS
    }
    else if (this.valueS > 0 && this.wife && !this.mother && !this.father) {
      this.resultS = (this.value1 - (this.value1 / 8) - this.value * ((this.value1 - (this.value1 / 8)) / (2 * this.valueS + this.value))) / this.valueS
    }
    // else if(this.valueS > 0 && this.value == 0 && this.father && !this.wife && !this.mother){
    //   this.resultS = (this.value1 - (this.value1 / 6)) / this.valueS
    // }   
    else if (this.valueS > 0 && this.father && !this.mother && !this.wife) {
      this.resultS = (this.value1 - (this.value1 / 6) - this.value * ((this.value1 - (this.value1 / 6)) / (2 * this.valueS + this.value))) / this.valueS
    }
  }

  calculateDaughters(): void {
    if (this.valueS > 0 && this.value >= 0 && !this.father && !this.mother && !this.wife) {
      this.resultD = (this.value1 / (2 * this.valueS + this.value))
    }
    else if (this.valueS == 0 && this.value > 0 && this.wife && !this.father && !this.mother) {
      this.resultD = (this.value1 - (this.value1 / 8)) / this.value
    }
    else if (this.valueS == 0 && ((this.mother && this.father) || (this.mother) || (this.father) || (this.father && this.wife)) && this.value >= 2) {
      this.resultD = (2 * (this.value1 / 3)) / this.value
    }
    else if (this.valueS == 0 && this.value == 1 && ((this.mother && this.father) || (this.father) || (this.mother && this.father && this.wife) || (this.father && this.wife) || (this.valueSis + this.valueBro >= 1))) {
      this.resultD = this.value1 / 2
    }
    else if (this.valueS > 0 && this.father && this.mother && !this.wife) {
      this.resultD = (this.value1 - (1 / 3) * this.value1) / (2 * this.valueS + this.value)
    }
    else if (this.valueS > 0 && this.wife && !this.mother && !this.father) {
      this.resultD = (this.value1 - (this.value1 / 8)) / (2 * this.valueS + this.value)
    }
    else if (this.valueS > 0 && this.father && this.mother && this.wife) {
      this.resultD = (this.value1 - ((1 / 3) * this.value1) - (this.value1 / 8)) / (2 * this.valueS + this.value)
    }
    else if (this.valueS > 0 && this.father && !this.mother && !this.wife) {
      this.resultD = (this.value1 - (this.value1 / 6)) / (2 * this.valueS + this.value)
    }
    if (this.valueS == 0 && !this.father && this.value >= 2 && this.mother && !this.wife) {
      this.resultD = (4 * (this.value1 / 5)) / this.value
    }
    else if (this.valueS == 0 && !this.father && this.value == 1 && this.mother && !this.wife) {
      this.resultD = 3 * this.value1 / 4
    }
  }

  calculateFather(): void {
    console.log(this.father);

    if (this.father != true) {
      this.resultF = 0;
      console.log(this.resultF);
      return
    }
    if (this.valueS == 0 && this.father && this.value >= 2 && !this.mother && !this.wife) {
      this.resultF = this.value1 - (2 * (this.value1 / 3))
    }
    else if (this.valueS > 0 && !this.mother && !this.wife) {
      if (this.father) {
        this.resultF = this.value1 / 6
      } else {
        this.resultF = 0;
      }
    }
    else if (this.valueS == 0 && this.father && this.mother && this.value == 1 && !this.wife) {
      this.resultF = (1 / 3) * this.value1
    }
    else if (this.valueS == 0 && this.value == 0 && this.father && this.mother && !this.wife) {
      this.resultF = this.value1 - (this.value1 / 3)
    }
    else if (this.father && this.valueS == 0 && !this.mother && this.value == 1) {
      this.resultF = (1 / 2) * this.value1
    }
    else if (this.valueS == 0 && this.value == 0 && this.wife && this.mother) {
      this.resultF = this.value1 - (this.value1 / 6) - (this.value1 / 8)
    }
    else if (this.valueS > 0 && this.value >= 0 && this.father && this.wife && this.mother) {
      this.resultF = this.value1 / 6
    }
    else if (this.valueS == 0 && this.father && this.mother && this.value == 1 && this.wife) {
      this.resultF = this.value1 - (this.value1 / 8) - (this.value1 / 6) - (this.value1 / 2)
    }

  }

  calculateMother(): void {
    if (this.valueS == 0 && !this.father && this.value >= 2 && this.mother && !this.wife) {
      this.resultM = this.value1 - (4 * (this.value1 / 5))
    }
    else if (this.valueS == 0 && !this.father && this.value == 1 && this.mother && !this.wife) {
      this.resultM = this.value1 / 4
    }
    else if (this.valueS == 0 && this.father && this.mother && this.value == 0 && !this.wife) {
      this.resultM = (1 / 3) * this.value1
    }
    else if (this.valueS == 0 && this.value == 0 && this.wife && this.mother) {
      this.resultM = this.value1 / 6
    }
    else if (this.valueS > 0 && this.value >= 0 && this.father && this.wife && this.mother) {
      this.resultM = this.value1 / 6
    }
    else if (this.valueS == 0 && this.father && this.mother && this.value == 1 && this.wife) {
      this.resultM = this.value1 / 6
    }
    else if (this.valueS == 0 && this.value == 0 && this.valueBro == 1 && this.valueSis == 0) {
      this.resultM = (1 / 3) * this.value1
    }
    else if (this.valueS == 0 && this.value == 0 && this.valueBro == 0 && this.valueSis == 1) {
      this.resultM = (1 / 3) * this.value1
    }
    else if (this.valueS == 0 && this.value == 0 && this.father && (this.valueBro + this.valueSis) >= 2) {
      this.resultM = (1 / 6) * this.value1
    }
    else if (this.valueS == 0 && this.value == 0 && !this.father && this.valueBro == 0 && this.valueSis == 1) {
      this.resultM = (1 / 3) * this.value1;
      this.resultM += this.value1 - (this.resultM + this.resultSi + this.resultW);
    }
  }

  calculateWife(): void {
    if (this.wife && this.valueS == 0 && this.value >= 2 && !this.father && !this.mother) {
      this.resultW = (1 / 8) * this.value1
    }
    else if (this.valueS > 0 && this.father && this.mother && this.wife && this.valueBro == 0 && this.valueSis == 0) {
      this.resultW = this.value1 / 8
    }
    else if (this.wife && this.valueS == 0 && this.value == 1) {
      this.resultW = (1 / 8) * this.value1
    }
    else if (this.valueS == 0 && this.value == 0 && this.father && !this.mother && (this.valueBro + this.valueSis) >= 2) {
      this.resultW = (1 / 4) * (this.value1 / 2);
    }
    else if (this.valueS == 0 && this.value == 0 && this.father && this.valueBro == 0 && this.valueSis == 0) {
      this.resultW = (1 / 4) * (this.value1 / 2)
    }
    else if (this.valueS && this.value == 0 && this.father && this.mother && (this.valueBro + this.valueSis) >= 2) {
      this.resultW = (1 / 4) * (this.value1 / 2)
    }
    else if (this.valueS == 0 && this.value == 0 && !this.father && this.valueBro == 1 && this.valueSis == 0) {
      this.resultW = (1 / 4) * (this.value1 / 2)
    }
    else if (this.valueS == 0 && this.value == 0 && !this.father && this.valueBro == 0 && this.valueSis == 1) {
      this.resultW = (1 / 4) * (this.value1 / 2)
    }
    else if (this.valueS == 0 && this.value == 0 && !this.father && !this.mother && this.valueBro == 0 && this.valueSis == 1) {
      this.resultW = (1 / 4) * (this.value1 / 2)
    }
    else if (this.valueS == 0 && this.value == 0 && !this.father && !this.mother && this.valueBro >= 1 && this.valueSis == 0) {
      this.resultW = (1 / 4) * (this.value1 / 2)
    }
    else if (this.valueS == 0 && this.value == 0 && !this.father && !this.mother && this.valueBro == 0 && this.valueSis >= 2) {
      this.resultW = (1 / 4) * (this.value1 / 2)
    }
    else if (this.valueS == 0 && this.value == 0 && !this.father && !this.mother && this.valueBro > 0 && this.valueSis > 0) {
      this.resultW = (1 / 4) * (this.value1 / 2)
    }
    else if (this.valueS == 0 && this.value == 0 && !this.father && this.valueBro == 0 && this.valueSis == 0) {
      this.resultW = (1 / 4) * (this.value1 / 2)
    }
    else if (this.valueS == 0 && this.value == 0 && !this.father && !this.mother && this.valueBro == 0 && this.valueSis == 0) {
      this.resultW = (1 / 4) * (this.value1 / 2)
    }
    else if (this.valueS == 0 && this.value == 0 && this.father && (this.valueBro + this.valueSis) >= 2) {
      this.resultW = (1 / 4) * (this.value1 / 2)
    }
    else if (this.valueS == 0 && this.value == 0 && this.father && this.valueBro == 0 && this.valueSis == 1) {
      this.resultW = (1 / 4) * (this.value1 / 2)
    }
    else if (this.valueS == 0 && this.value == 0 && this.father && !this.mother && (this.valueBro + this.valueSis) >= 2) {
      this.resultW = (1 / 4) * (this.value1 / 2)
    }
    else if (this.valueS == 0 && this.value == 0 && this.father && !this.mother && this.valueBro == 1 && this.valueSis == 0) {
      this.resultW = (1 / 4) * (this.value1 / 2)
    }
    else if (this.valueS == 0 && this.value == 0 && this.father && !this.mother && this.valueBro == 0 && this.valueSis == 1) {
      this.resultW = (1 / 4) * (this.value1 / 2)
    }
    else if (this.valueS > 0 && this.value == 0 && !this.father && !this.mother && this.wife && this.valueBro == 0 && this.valueSis == 0) {
      this.resultW = (1 / 8) * this.value1
    }
    else if (this.valueS > 0 && this.value > 0 && !this.father && !this.mother && this.wife && this.valueBro == 0 && this.valueSis == 0) {
      this.resultW = 1 * (this.value1 / 8)
    }

  }

  calculateBrothers(): void {
    if (this.valueS == 0 && this.value == 0 && !this.father && this.valueBro == 1 && this.valueSis == 0) {
      this.resultB = (1 / 6) * this.value1
    }
    else if (this.valueS == 0 && this.value == 0 && !this.father && !this.mother && this.valueBro >= 1 && this.valueSis == 0) {
      this.resultB = (this.value1 - (1 / 4) * this.value1) / this.valueBro;
    }
    else if (this.valueS == 0 && this.value == 0 && !this.father && !this.mother && this.valueBro > 0 && this.valueSis > 0) {
      this.resultB = this.valueBro * (2 * ((this.value1 - this.resultW) / (2 * this.valueBro + this.valueSis)))
    }
    else if (this.valueS == 0 && this.value == 0 && this.father && (this.valueBro + this.valueSis) >= 2) {
      this.resultB = this.valueBro * (2 * (((1 / 3) * this.value1) / (2 * this.valueBro + this.valueSis)))
    }
    else if (this.valueS == 0 && this.value == 0 && this.father && this.valueBro == 1 && this.valueSis == 0) {
      this.resultB = (1 / 6) * this.value1
    }
    else if (this.valueS == 0 && this.value == 0 && this.father && !this.mother && (this.valueBro + this.valueSis) >= 2) {
      this.resultB = this.valueBro * (2 * (((1 / 3) * this.value1) / (2 * this.valueBro + this.valueSis)))
    }
    else if (this.valueS == 0 && this.value == 0 && this.father && !this.mother && this.valueBro == 1 && this.valueSis == 0) {
      this.resultB = (1 / 6) * this.value1
    }
  }

  calculateSisters(): void {
    if (this.valueSis) {
      this.resultSi = this.valueSis * ((this.value1 - this.resultW) / (2 * this.valueBro + this.valueSis))
    }
    else if (this.valueS == 0 && this.value == 0 && !this.father && !this.mother && this.valueBro == 0 && this.valueSis >= 2) {
      this.resultSi = (2 / 3) * (this.value1 - this.resultW);
    }
    else if (this.valueS == 0 && this.value == 0 && !this.father && this.valueBro == 0 && this.valueSis == 1) {
      this.resultSi = (1 / 6) * this.value1
    }
    else if (this.valueS == 0 && this.value == 0 && this.father && this.valueBro == 0 && this.valueSis == 1) {
      this.resultSi = (1 / 6) * this.value1
    }
    else if (this.valueS == 0 && this.value == 0 && this.father && (this.valueBro + this.valueSis) >= 2) {
      this.resultSi = this.valueSis * (((1 / 3) * this.value1) / (2 * this.valueBro + this.valueSis))
    }
    else if (this.valueS == 0 && this.value == 0 && !this.father && !this.mother && this.valueBro == 0 && this.valueSis == 1) {
      this.resultSi = (1 / 2) * this.value1
    }
    else if (this.valueS == 0 && this.value == 0 && !this.father && !this.mother && this.valueBro > 0 && this.valueSis > 0) {
      this.resultSi = this.valueSis * ((this.value1 - this.resultW) / (2 * this.valueBro + this.valueSis));
    }
    else if (this.valueS == 0 && this.value == 0 && this.father && !this.mother && (this.valueBro + this.valueSis) >= 2) {
      this.resultSi = this.valueSis * (((1 / 3) * this.value1) / (2 * this.valueBro + this.valueSis))
    }
    else if (this.valueS == 0 && this.value == 0 && this.father && !this.mother && this.valueBro == 0 && this.valueSis == 1) {
      this.resultSi = (1 / 6) * this.value1
    }
  }

  Calculate() {
    // this.calculateSon()
    // this.calculateDaughters()
    // this.calculateFather()
    // this.calculateMother()
    // this.calculateWife()
    // this.calculateBrothers()
    // this.calculateSisters()


      if(this.value > 0) 
      {        
        
        this.resultD = (this.value1 - (+this.mother ? this.resultM = (this.value1 / 6) : this.resultM = 0) - (this.father ? (this.resultF = this.value1 / 6) : this.resultF = 0) - (+this.wife ? this.resultW = this.value1 / 8 : this.resultW = 0)) / (2 * this.valueS + this.value)
      }
      else {this.resultD = 0}

      if(this.valueS > 0) 
      {
        this.resultS = 2 * (this.value1 - (+this.mother ? this.resultM = this.value1 / 6 : this.resultM = 0) - (this.father ? (this.resultF = this.value1 / 6) : this.resultF = 0) - (+this.wife ? this.resultW = this.value1 / 8 : this.resultW = 0)) / (2 * this.valueS + this.value)     
        
      }
      else { this.resultS = 0 }    

      // if(this.valueS == 0 && this.value == 0){
        
      //   if(+this.mother && +this.father && +this.wife  )
      //    {
      //   this.resultM = this.value1 / 4
      //   this.resultW = this.value1 / 4
      //   this.resultF = this.value1 / 2
      //   this.resultF = this.value1 - this.resultM - this.resultW 
      //   this.resultM = this.value1 - this.resultF - this.resultW
      //   this.resultW = this.value1 - this.resultF - this.resultM
      //   }     
      //   else if(+!!this.father && +!this.mother && +!this.wife)
      //   {
      //     this.resultF = this.value1
      //     this.resultM = 0
      //     this.resultW = 0
      //   }
        
      // }
      console.log(this.father)
      console.log(+!!this.father)
      console.log(this.resultF)
  console.log(this.wife)
  console.log(+!!this.wife)

  }
}
