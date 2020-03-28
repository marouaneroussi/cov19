import React,{Component} from "react";
import {connect} from 'react-redux';

export class CardData extends Component{

  render(){
    const {country} = this.props;

return(
<div className="container-fluid">
<div className="row">
    <div className="col-md-3">
  <div className="card text-dark bg-white mb-3 text-center card-height" >
    <div className="card-header text-center">Cas</div>
    <div className="card-body">
      <h5 className="card-title text-center ">{country.cases}</h5>
    </div>

  </div>
</div>
<div className="col-md-3">
<div className="card text-dark bg-white mb-3 text-center card-height " >
<div className="card-header text-center">Cas d'aujourd'hui</div>
<div className="card-body">
  <h5 className="card-title text-center text-warning">{country.todayCases}</h5>
</div>

</div>

</div>
<div className="col-md-3">
<div className="card text-dark bg-white mb-3 text-center card-height" >
<div className="card-header text-center">Dècès</div>
<div className="card-body">
  <h5 className="card-title text-center text-danger" >{country.deaths}</h5>
</div>

</div>

</div>
<div className="col-md-3">
<div className="card text-dark bg-white mb-3 text-center card-height" >
<div className="card-header text-center">Décès d'aujourd'hui</div>
<div className="card-body">
  <h5 className="card-title text-center">{country.todayDeaths}</h5>
</div>

</div>

</div>



</div>



<div className="row">
    <div className="col-md-3 text-center">
  <div className="card text-dark bg-white mb-3 card-height" >
    <div className="card-header text-center">Rétablie</div>
    <div className="card-body">
      <h5 className="card-title text-center text-success">{country.recovered}</h5>
    </div>

  </div>
</div>
<div className="col-md-3">
<div className="card text-dark bg-white mb-3 text-center card-height" >
<div className="card-header text-center">Active</div>
<div className="card-body">
  <h5 className="card-title text-center">{country.active}</h5>
</div>

</div>

</div>
<div className="col-md-3">
<div className="card text-dark bg-white mb-3 text-center card-height" >
<div className="card-header text-center">Etat critique</div>
<div className="card-body">
  <h5 className="card-title text-center">{country.critical}</h5>
</div>

</div>

</div>
<div className="col-md-3">
<div className="card text-dark bg-white mb-3 text-center card-height" >
<div className="card-header text-center">Cas par un million</div>
<div className="card-body">
  <h5 className="card-title text-center">{country.casesPerOneMillion}</h5>
</div>

</div>

</div>



</div>



</div>


);
  }
}
const mapStateToProps = state =>({
  country : state.Countries.country
})
export default connect(mapStateToProps)(CardData);
