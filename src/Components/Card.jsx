import Card from 'react-bootstrap/Card';

function DisplayCard({name,username,email,website}) {
  return <div className='mx-auto displaycard'>
    <Card style={{ width: '30rem',padding:"10px"}}>
      <Card.Title>{name}</Card.Title>
      <Card.Body>
        <Card.Text>
          <p>Username : {username}</p>
          <p>E-mail   : {email}</p>
          <p>Website  : {website}</p>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
}

export default DisplayCard;