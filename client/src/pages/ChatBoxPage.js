import React,  { useContext } from 'react';
import ChatBoxMessage from '../components/ChatBoxMessage';
import Loading from '../components/Loading';
import { AuthContext } from '../context/AuthContext';


class ChatBoxPage extends React.Component{
  state = {
    content:"",
    posts: [],
    loading: true,
  }
  
  static contextType = AuthContext;

  saveMessage = (event) => {
    

    fetch("/api/chatComments/", {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({content: this.state.content, username:this.context.user.firstName }),
    })
      .then(res => {
        if(res.ok) {
          return res.json()
        }

        throw new Error('Content validation');
      })
      .then(post => {
        this.setState({
          success: true,
        });
      })
      .catch(err => {
        this.setState({
          error: true,
        });
      });
  }



  componentDidMount() {
    fetch("/api/chatComments")
      .then(res => res.json())
      .then(posts => {
        this.setState({
          loading: false,
          posts: posts.map((p,ii) => <ChatBoxMessage {...p} key={ii} />),
        });
      })
      .catch(err => console.log("API ERROR: ", err));
      
  }


  fieldChanged = (name) => {
    return (event) => {
      let { value } = event.target;
      this.setState({ [name]: value });
    }
  }


  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }
  componentDidUpdate () {
    this.scrollToBottom()
  }

  render (){
    if(this.state.loading) {
      return <Loading />;
    }
    
  
    return(
    <div className ="chatbox col-12 col-md-10 col-lg-9">
      <div className="chatArea ">
        { this.state.posts }
        <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
        </div>
      </div>

      <div>
      <form className = "ChatInput" >
        <div className="form-row">

         <input
            type="content"
            className="form-control"
            name="content"
            placeholder="type here"
            value={this.state.content}
            onChange={this.fieldChanged('content')} 
            id="ex2"/>
      
          <button
            type="submit"
            className="btn btn-primary ml-auto"
            onClick={this.saveMessage}
          >send</button>
        </div>
      </form>
      </div>
    </div>
    );
  }

}

export default ChatBoxPage;