namespace Form{
    export type formType = 'inline'|'block'
    export type formState = 'active'|'disabled'

    export interface FormInfo {
        type: formType
        state: formState
    }
}