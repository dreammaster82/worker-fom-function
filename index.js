/**
 * Создает worker из переданной функции
 * @param {Function} func - функция из которой создается worker
 * @param {any} addingFunctions - дополнительные функции, помещаются в глобальную область для обеспечения основной
 * @return {Worker}
 */
function WorkerFromFunction(func, ...addingFunctions) {
    let prefix = addingFunctions
        .filter(f => {
            if (typeof f == 'function') return true;

            throw Error('Должна быть функция');
        })
        .map(f => f.toString())
        .join(';');

    return new Worker(
        URL.createObjectURL(
            new Blob(
                [prefix + ';onmessage=' + func.toString()],
                {type: 'application/javascript'}
                )
        )
    );
}

export default WorkerFromFunction;