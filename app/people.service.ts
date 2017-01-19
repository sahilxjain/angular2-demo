import { People } from './people';

export class PeopleService{
  getAll() : People[] {
    return [
        {firstname:"Luke",lastname:"Skywalker"},
        {firstname:"Darth",lastname:"Vader"},
        {firstname:"Han",lastname:"Solo"}
    ];
  }

}