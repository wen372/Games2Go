import React from 'react';
import { Link } from 'react-router-dom';
import { Image} from 'react-bootstrap';

function Game({ content, pictureSource, link }) {
  return (
    <div className="game col-6 col-md-5 col-lg-3 ">
      <div className="card mb-4 shadow">
        <div className="card-body card-text">
        {/*<Link to={"/posts/"+id}>{ content }</Link>*/}
        
        <Link to={link}>
          <Image  src={pictureSource} alt={content} width="200" height="150" fluid/>
        </Link>
        </div>
        <div className="card-footer small">
          <Link to={link}>{ content }</Link>
        </div>
      </div>
    </div>
  );
}

export default Game;