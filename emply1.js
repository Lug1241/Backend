async function getEmployeesSorted() {
    try {
        const employees = await Employee.find()
            .sort({ nombre: 1, sueldo: 1 }); // 1 para orden ascendente, -1 para descendente
        console.log(employees);
    } catch (error) {
        console.error("Error retrieving employees:", error);
    }
}
async function getEmployeeWithHighestSalary() {
    try {
        const highestPaidEmployee = await Employee.findOne()
            .sort({ sueldo: -1 }); // Orden descendente por sueldo
        console.log(highestPaidEmployee);
    } catch (error) {
        console.error("Error retrieving the highest paid employee:", error);
    }
}