import { AbstractControl, ValidatorFn } from '@angular/forms';

export function isNotBadDiets(): ValidatorFn{ 
    return (control: AbstractControl) => {
        const isBadDiets = control.value === 'Chino';
        return isBadDiets ? {
            isBadDiets: true
        } : null;
    };
}

