import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { BackendErrorInterface } from "src/app/auth/types/backendErrors.interface";

@Component({
    selector: 'mc-backend-error-messages',
    templateUrl: './backendErrorMessages.component.html',
    standalone: true,
    imports: [CommonModule]
})
export class BackendErrorMessages {
    @Input() backendErrors: BackendErrorInterface = {}

    errorMessages: string[] = []

    ngOnInit(): void {
        this.errorMessages = Object.keys(this.backendErrors).map((key: string) => `${key} ${this.backendErrors[key]}`)
    }
}