import { Validator,NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';
 
@Directive({
selector:'[appValidatioon]',
providers: [{
provide: NG_VALIDATORS,
useExisting: ValidationDirective,
multi: true
}]
})
 
export class ValidationDirective implements Validator {
@Input() appValidation: string;
 
validate(control: AbstractControl):{[key:string]: any} |null {
const controlToCompare = control.parent.get(this.appValidation);
if(controlToCompare && controlToCompare.value !==control.value){
return { 'notEqual': true}
}
return null;
}
}