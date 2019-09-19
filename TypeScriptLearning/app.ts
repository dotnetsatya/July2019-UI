abstract class Iperson{
    private name: string;

    abstract getPrint(): void;
}
class Person extends Iperson{
    public getPrint(): void{
        name: String;
    }

    getName(): void{};
}

let iperson: Iperson;
console.log(iperson.getPrint());