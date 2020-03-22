import React,{Component} from 'react';
import {searchMovie,featchMovie,setLoading} from '../../actions/searchAction';
import {connect} from 'react-redux';
export class SearchForm extends Component{
  onChange = e => {
    this.props.searchMovie(e.target.value);
  }
  onSubmit = e =>{
    e.preventDefault();
    this.props.featchMovie(this.props.text);
    this.props.setLoading();
  }
  render(){
    return(
      <div className="main">
      <form onSubmit={this.onSubmit}>
      <div className="input-group">

          <input type="text" name="text" onChange={this.onChange} className="form-control" placeholder="Search this blog" />
          <div className="input-group-append">
            <button className="btn btn-secondary" type="submit">
              <i className="fa fa-search"></i>
            </button>
          </div>

      </div>
      </form>
      </div>





    )
  }
}

const mapStateToProps = (state) =>({
  text:state.movies.text,
})
export default connect(mapStateToProps,{searchMovie,featchMovie,setLoading})(SearchForm);
