import Card from 'react-bootstrap/Card';
import github from './github.jpg'

function GitHubCard() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={github} />
            <Card.Body>
                <Card.Title>isek7or</Card.Title>
                <Card.Text>
                    We are young developers with a bright future.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default GitHubCard;