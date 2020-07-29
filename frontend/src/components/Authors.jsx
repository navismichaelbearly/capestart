import React from 'react';

class Authors extends React.Component {
  constructor() {
        super()
        this.state = {
            author_list: null,
            book_list: null
        }
    }
  async componentDidMount() {
    fetch('http://127.0.0.1:8000/api/author_list')
    .then(response =>  response.json())
    .then(resData => {
      console.log("bearly");
      console.log(JSON.stringify(resData))
       //console.log(JSON.stringify(resData))
       //do your logic here
       //let person = resData.results
       this.setState({ book_list: resData.results }); //this is an asynchronous function
    })
  }

  render() {
    return(
      <div>
        {this.state.author_list.map((authorRecord) => (
             <div>
              <div> {authorRecord.first_name} </div>
              <div> {authorRecord.last_name} </div>
            </div>
        ))}
    </div>)
  }
}

export default Authors;
