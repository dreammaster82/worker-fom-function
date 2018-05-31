# worker-fom-function
Создает worker из функции

Пример:
let worker = WorkerFromFunction((e) => {
    adding(e.data);
	postMessage('Ok!');
}, function adding (data) {console.log(data)});

worker.postMessage('show data');

worker.onmessage = (e) => {
    console.log(e.data);
}