import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { BackendErrorInterface } from "./backendErrors.interface";

export interface AuthStateInterface {
    isSubmitting: boolean,
    currentUser: CurrentUserInterface | null | undefined,
    isLoading: boolean,
    validationErrors: BackendErrorInterface | null
}