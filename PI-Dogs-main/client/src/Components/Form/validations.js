//! el parametro es la informacion que se va agregando en el input a validar
const validation = (userData) => {
    let errors = {}
    if (!/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(userData.name)) {
        errors.name = "Only should contain letters."
    }
    if (!userData.name) {
        errors.name = "This field cannot be empty."
    }
    if (!userData.minHeight || !userData.maxHeight) {
        errors.height = "You must fill in both fields."
    }
    if (userData.minHeight >= userData.maxHeight) {
        errors.height = "Min cannot be greater than max."
    }
    if (!userData.minWeight || !userData.maxWeight) {
        errors.weight = "You must fill in both fields."
    }
    if (userData.minWeight > userData.maxWeight) {
        errors.weight = "Min cannot be greater than max."
    }
    if (userData.minLife && userData.maxLife) {
        if (userData.minLife >= userData.maxLife) {
            errors.lifeSpan = "Min cannot be greater than max."
        }
    }
    if (!userData.minLife && !userData.maxLife) {
        errors.lifeSpan = "You must fill in at least one field."
    }
    if (!userData.temperaments) {
        errors.temperaments = "You must select at least one option."
    }
    return errors
}

export default validation