import { FormGroup } from '@angular/forms';
export function ConfirmRangeValidator(
  range_risk_min: string,
  range_risk_max: string
) {
  return (formGroup: FormGroup) => {
    let RangeMincontrol = formGroup.controls[range_risk_min];
    let RangeMaxControl = formGroup.controls[range_risk_max];
    if (parseFloat(RangeMincontrol.value) > parseFloat(RangeMaxControl.value)) {
      RangeMaxControl.setErrors({ ConfirmRangeValidator: true });
    } else if (
      parseFloat(RangeMincontrol.value) == parseFloat(RangeMaxControl.value)
    ) {
      RangeMaxControl.setErrors({ ConfirmRangeValidator: true });
    } else if (parseFloat(RangeMaxControl.value) == 0) {
      RangeMaxControl.setErrors({ ConfirmRangeValidator: true });
    } else {
      RangeMaxControl.setErrors(null);
    }
  };
}
