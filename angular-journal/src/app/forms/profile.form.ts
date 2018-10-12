import { FormGroup, Validators, FormBuilder } from '@angular/forms';

export namespace ProfileForm {
    const formBuilder = new FormBuilder();
    export function build(): FormGroup{
        return formBuilder.group({
            fname:['', Validators.required],
            lname:['', Validators.required],
            bday:[null],
            gender:[null],
            email:['', Validators.required],
            password:['', Validators.required]
        });
    }
}