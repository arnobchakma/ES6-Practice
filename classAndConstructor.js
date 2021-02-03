//Class and constructor diye eivabe multiple worker/student er list banano jai...

class worker {
    constructor(wId, wName, place, year) {
        this.Id = wId;
        this.Name = wName;
        this.Place = place;
        this.year = year;
    }
}
const worker1 = new worker(1, 'Beauty', 'Dhaka', 2020);
const worker2 = new worker(2, 'Suite', 'Rani mu', 2020);
const worker3 = new worker(3, 'Sweet', 'Osman mu', 2020);
console.log(worker1, worker2, worker3);