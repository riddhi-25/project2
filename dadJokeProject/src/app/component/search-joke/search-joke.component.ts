import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search-joke',
  templateUrl: './search-joke.component.html',
  styleUrls: ['./search-joke.component.css']
})
export class SearchJokeComponent {
  jokeHolder : Jokes[]=[];
  inputField !: string;
  constructor(private searchedJokes: DataService){

  }

  onInputChange(event:Event){
    this.inputField = ((<HTMLInputElement>event.target).value);
    
  }
  getFunc() {
        this.searchedJokes.searchJokes().subscribe((jokes: Jokes[]) => {
      this.jokeHolder = jokes.filter((joke) => {
        const jokeText = joke.joke.toLowerCase();
        return jokeText.includes(this.inputField);
      });
    });
  }
}

interface Jokes{
  id: string,
  status: number,
  joke: string
}