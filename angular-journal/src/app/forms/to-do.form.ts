import { FormGroup, Validators, FormBuilder } from '@angular/forms';

export namespace ToDoForm {
    const formBuilder = new FormBuilder();
    export function build(): FormGroup{
        return formBuilder.group({
            name:['', Validators.required],
            type:['', Validators.required],
            completed:[null],
            description:['']
        });
    }
}