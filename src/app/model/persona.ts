export class Persona
{
    private id: number;
    private name: string;
    private surname: string;

    static create(xid: number)
    {
        const names: string[] = [
            'AMELIA ',
            'OLIVIA ',
            'EMILY ',
            'AVA ',
            'ISLA ',
            'JESSICA ',
            'POPPY ',
            'ISABELLA ',
            'SOPHIE ',
            'MIA ',
            'RUBY ',
            'LILY ',
            'GRACE ',
            'EVIE ',
            'SOPHIA ',
            'ELLA ',
            'SCARLETT ',
            'CHLOE ',
            'ISABELLE ',
            'FREYA ',
            'CHARLOTTE',
            'OLIVER ',
            'JACK ',
            'HARRY ',
            'JACOB ',
            'CHARLIE ',
            'THOMAS ',
            'OSCAR ',
            'WILLIAM ',
            'JAMES ',
            'GEORGE ',
            'ALFIE ',
            'JOSHUA ',
            'NOAH',
            'ETHAN ',
            'MUHAMMAD ',
            'ARCHIE ',
            'LEO ',
            'HENRY ',
            'JOSEPH ',
            'SAMUEL '
        ];

        const surnames: string[] = [
            'Cole',
            'Pearce',
            'Dean',
            'Foster',
            'Harvey',
            'Hudson',
            'Gibson',
            'Mills',
            'Berry',
            'Barnes',
            'Pearson',
            'Kaur',
            'Booth',
            'Dixon',
            'Grant',
            'Gordon',
            'Lane',
            'Harper',
            'Ali',
            'Hart',
            'Mcdonald',
            'Brooks',
            'Ryan',
            'Carr',
            'Macdonald',
            'Hamilton',
            'Johnston',
            'West'
        ];

        const idxname = Math.floor((Math.random() * names.length));
        const idxsurname = Math.floor((Math.random() * surnames.length));
        const name = names[idxname].toUpperCase();
        const surname = surnames[idxsurname].toUpperCase();

        return new this(xid, name, surname);
    }

    constructor(xid: number, xname: string, xsurname: string)
    {
        this.id = xid;
        this.name = xname;
        this.surname = xsurname;
    }

    get fullname()
    {
        return this.name + ' ' + this.surname;
    }

}

