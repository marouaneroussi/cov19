import React,{Component} from 'react';
import SearchCountry from './SearchCountry';
import CardData from './CardData';
export class Landing extends Component{
  render(){
    return(
       <div>
      <SearchCountry />
      <CardData />
      </div>

)
  }
}


export default Landing;
