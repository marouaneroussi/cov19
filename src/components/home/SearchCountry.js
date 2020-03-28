import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getData,retrieveCountry} from '../../actions/searchAction';
import {Container,Col,Row} from 'react-bootstrap';

export class SearchCountry extends Component{

  constructor(props) {
       super(props);
       this.url= 'https://coronavirus-19-api.herokuapp.com/countries';  // I declare the variable here
   }
    componentDidMount = () => {
        let url = 'https://coronavirus-19-api.herokuapp.com/countries';
        this.props.onGetData(url, { ...this.props });
        this.props.retrieveCountry(this.url,0);

    }

    handleChange(e) {
       this.props.retrieveCountry(this.url,e.target.value);
      }



render(){
  const {countryName} = this.props;

  if (!countryName) {
           return (
               <div>Loading...</div>
           );
       }
  return (
    <Container fluid>
    <Row>
      <Col md={{ span: 4, offset: 4 }}>
      <div className="select">
      <select className="custom-select" value={this.value}  onChange={this.handleChange.bind(this)}>
        {countryName.map((option,index)=>
          <option key={index} value={index}>{option.country}</option>
              )};
        </select>
        </div>
        </Col>
    </Row>
    <br></br>
  </Container>



  )
}
}

const mapStateToProps = state => {
  return {
    countryName : state.Countries.data,
    country : state.Countries.country
  } // state
};
const mapDispatchToProps = (dispatch) => {
     return {
         onGetData: (url, props) => dispatch(getData(url, props)),
         retrieveCountry: (url,key) => dispatch(retrieveCountry(url, key)),
    }
  }
export default  connect(mapStateToProps,mapDispatchToProps)(SearchCountry);
