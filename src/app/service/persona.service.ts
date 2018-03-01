import {Injectable} from '@angular/core';
import {Persona} from '../model/persona';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class PersonaService
{
    private readonly HOWMANY = 10;
    private _subject: BehaviorSubject<Persona[]>;

    constructor()
    {
        this._subject = new BehaviorSubject<Persona[]>(this.createPersonas(this.HOWMANY));
    }

    public refresh()
    {
        this._subject.next(this.createPersonas(this.HOWMANY));
    }

    public get personas()
    {
        return this._subject.asObservable();
    }

    private createPersonas(howmany: number): Persona[]
    {
        const repos: Persona[] = [];
        for (let i = 1; i <= howmany; i++)
        {
            repos.push(Persona.create(i));
        }
        return repos;
    }

}
