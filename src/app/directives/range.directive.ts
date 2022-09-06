import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export const rangeValidator = (): ValidatorFn => (ac: AbstractControl): ValidationErrors | null => {
  const start = ac.get('min')?.value;
  const end = ac.get('max')?.value;

  console.log(ac)
  if(start !== null && end !== null && start < end){
    ac.get('min')?.setErrors(null);
    ac.get('max')?.setErrors(null);
    return null
  }
  ac.get('min')?.setErrors({ range: 'range error' });
  ac.get('max')?.setErrors({ range: 'range error' });
  return {range: 'range error'}
};

