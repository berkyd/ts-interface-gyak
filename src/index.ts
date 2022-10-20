interface Result{
    winner:string;
    date:Date;
    result():string;
}

class Football implements Result{
    winner:string;
    #gygol:number;
    #vgol:number;
    date:Date;

    constructor(winner:string,gygol:number,vgol: number,date:Date){
        this.winner=winner;
        this.#gygol=gygol;
        this.#vgol=vgol;
        this.date=date;
    }

    result():string{
        return "Football match: " +this.#gygol + " - " + this.#vgol;
    }
}

class Marathon implements Result{
    winner:string;
    fido:number;
    date:Date;
    constructor(fido: number,winner:string,date:Date){
        this.winner=winner;
        this.fido= fido;
        this.date=date;
    }
    result():string{
        return "Marathon: "+(Math.floor(this.fido/60))+" min "+(Math.floor(this.fido%60))+" s";
    }
}

class Calvinball implements Result{
    #winner:string;
    date:Date;
    rnd=Math.random()*90+10;
    get winner(){
        return this.#winner;
    }
    set winner(winner:string){
        if (winner!="Calvin") {
            this.#winner="Calvin";
        }else{
            this.#winner="Hobbes";
        }
    }
    constructor(winner:string,date:Date){
        this.#winner=winner;
        this.date=date;
        
    }
    result():string{
        return "Calvinball: "+Math.floor(this.rnd)+" points";
    }

}

let Results:Result[]=[
    new Football("Manchetser United",6,3,new Date("2022-10-19")),
    new Football("Chelsea",2,1,new Date("2022-09-10")),
    new Marathon(120,"Kovács Norbert",new Date("2022-08-09")),
    new Marathon(215,"Szabó Sándor",new Date("2022-09-12")),
    new Calvinball("Calvin",new Date("2022-07-23")),
    new Calvinball("Hobbes",new Date("2022-07-01"))
];

for(let eredmeny of Results){
    console.log(eredmeny.result());
}