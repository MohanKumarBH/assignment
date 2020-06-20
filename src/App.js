import React, {Component} from 'react';
import './App.css';
import fetchData from "./Api/index"
import RepoDetaisl from "./repoDetails"

class App extends Component{
  state={
    leftContent:{},
    rightContent:[],
    searchQuery:"",
    typeFilterValue:'',
    languageFilter:'',
    filteredContent:[],
  }

  componentDidMount(){
    const leftdata = fetchData("https://api.github.com/users/supreetsingh247");
    const rightData = fetchData("https://api.github.com/users/supreetsingh247/repos")
    leftdata.then(data => {
      this.setState({ leftContent : data })
    })
    rightData.then(data => {
      this.setState({ rightContent: data, filteredContent:data })
    })
  }
  
  onChangeInputhandler=(evt)=>{
    evt.preventDefault();
    let value = evt.target.value
    // this.filterrepos(evt.target.valu, "searchQuery");
    var data=[];
    if(value === ""){
      this.setState({ filteredContent: this.state.rightContent })
    }else{
      data = this.state.rightContent.filter(obj => {
        if (obj.name.indexOf(value) >= 0) return true;
      })
    }
    this.setState({ filteredContent:data})
    // search queiry is not working;
    // // const promise = fetchData(`https://github.com/supreetsingh247?tab=repositories&q=${evt.target.value}&type=${this.state.typeFilterValue}&language=${this.state.languageFilter}`);
    // promise.then(data => {
      // this.setState({
        // searchQuery: evt.target.value,
        // rightContent: data
      // })
    // })
  }

  onChangeTypeFilter=(evt)=>{
    evt.preventDefault();
    // console.log("fdsf")
    // // const promise = fetchData(`https://github.com/supreetsingh247?tab=repositories&q=${this.state.searchQuery}&type=${evt.target.value}&language=${this.state.languageFilter}`);
    // promise.then(data => {
      // this.setState({
        // typeFilterValue: evt.target.value,
        // rightContent:data
      // })
    // })
  }
  onChangeLanguageFilter = (evt) => {
    evt.preventDefault();
    // // const promise = fetchData(`https://github.com/supreetsingh247?tab=repositories&q=${this.state.searchQuery}&type=${this.state.typeFilterValue}&language=${evt.target.value}`);
    // promise.then(data => {
      // this.setState({
        // languageFilter: evt.target.value,
        // rightContent: data
      // })
    // })
  }

  render(){
    const { leftContent, filteredContent }=this.state;
    
    return (
      <div className="App">
       <div className="left-container">
         <div className="imgcont">
            <img src={leftContent.avatar_url} style={{width:"150px"}}alt="img" />
         </div>
          <div className="Name"> {leftContent.login}</div>
          <div className="fallow-button">
            <a href={leftContent.followers_url}> Fallow </a>
          </div>
       </div>
       <div className="right" >
          <div className="right-container" >
          <div className="filter-elements search">
            <input className="element-padding" placeholder="find repository" type="text" onChange={this.onChangeInputhandler} />
        </div>
          <div className="filter-elements">
            <select name="select Type" className="element-padding" onChange={this.onChangeTypeFilter}>
              <option value="all">All</option>
              <option value="Source">Source</option>
              <option value="Source">Fork</option>
              <option value="Source">Archived</option>
              <option value="Source">Mirror</option>
            </select>
         </div>
          <div className="filter-elements">
            <select name="select Type" className="element-padding" onChange={this.onChangeLanguageFilter}>
              <option value="all">All</option>
            </select>
          </div>
        </div>
          <div className="repoList">
              {
              filteredContent.map(obj=>{
                  return(
                      <RepoDetaisl 
                      name={obj.name}
                      lan={obj.language}
                        url={obj.html_url}
                      
                      />
                  )
                })
              }
            
          </div>
        </div>

       </div> 
    );
  }
}

export default App;
