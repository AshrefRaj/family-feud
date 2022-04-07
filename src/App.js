import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { Button, Card, Container, Stack, Modal, Form } from 'react-bootstrap'
function App() {
  const [show, setShow] = useState(false)
  const handleClose = () => {
    setShow(false)
  }
  const handleShow = () => setShow(true)
  const questions = [
    {
      question: 'What do you do when you first wake up?',
      answers: [
        'Brush your teeth',
        'Make some coffee',
        'Check your phone',
        'Take a shower',
        'Make the bed',
      ],
      score: [35, 30, 20, 10, 5],
      multiply: 1,
    },
    {
      question: 'Name a reason to celebrate with a party',
      answers: [
        'Graduation',
        'Wedding',
        'Bachelor',
        'Holiday Occasion',
        'Anniversary',
      ],
      score: [29, 25, 18, 15, 13],
      multiply: 1,
    },
    {
      question: 'Name a character you would see at Disneyland.',
      answers: ['Mickey Mouse', 'Goofy', 'Donald Duck', 'Pluto', 'Cinderella'],
      score: [34, 24, 20, 14, 8],
      multiply: 1,
    },
    {
      question: 'Name something you usually find two of.',
      answers: ['Eyes', 'Shoes', 'Hands', 'Socks', 'Legs'],
      score: [27, 24, 21, 17, 11],
      multiply: 2,
    },
    {
      question: 'What is Something You Keep in Your Car, Just in Case? ',
      answers: [
        'Money/Coins',
        'First Aid Kit',
        'Spare Tire',
        'Jumper Cables',
        'Car Jack',
      ],
      score: [40, 24, 23, 7, 6],
      multiply: 2,
    },
    {
      question: "Name Marvel's Avengers",
      answers: [
        'Captain America',
        'Iron Man',
        'Black Panther',
        'Spiderman',
        'The Hulk',
      ],
      score: [33, 27, 18, 12, 13, 7],
      multiply: 2,
    },
    {
      question: 'Name the usual meets we attend every sprint',
      answers: [
        'Stand up',
        'Retro',
        'Backlog Grooming',
        'Sprint Planning',
        'Test Plan review',
      ],
      score: [40, 25, 15, 12, 8],
      multiply: 3,
    },
    {
      question: 'Name famous sport car brands',
      answers: ['Lamborghini', 'Ferrari', 'Porsche', 'Bugatti', 'Koenigsegg'],
      score: [39, 26, 16, 14, 5],
      multiply: 3,
    },
    {
      question: 'What are some common home appliances?',
      answers: [
        'Refrigerator',
        'Washing Machine',
        'Television',
        'Microwave',
        'Air conditioning',
      ],
      score: [28, 24, 21, 16, 11],
      multiply: 3,
    },
    {
      question: 'What do people usually lose or misplace?',
      answers: ['TV remote', 'Keys', 'Phone', 'Glasses', 'Wallets/Purses'],
      score: [28, 24, 20, 15, 13],
      multiply: 4,
    },
    {
      question: 'Name something people leave on the nightstand.',
      answers: ['Alarm Clock', 'Water', 'Glasses', 'Watch', 'Book'],
      score: [29, 25, 21, 16, 9],
      multiply: 4,
    },
    {
      question: 'Name famous zoo animals(species)',
      answers: ['Lions', 'Bears', 'Tigers', 'Seals', 'Deer'],
      score: [27, 23, 20, 17, 13],
      multiply: 4,
    },
    {
      question: 'Name things you never forget when you leave the house?',
      answers: ['Keys', 'Wallet', 'ID', 'Phone', 'Glasses'],
      score: [30, 25, 21, 16, 8],
      multiply: 5,
    },
    {
      question: 'Name some of Santa’s reindeer?',
      answers: ['Rudolph', 'Comet', 'Dasher', 'Dancer', 'Vixen'],
      score: [32, 26, 18, 14, 10],
      multiply: 5,
    },
    {
      question: 'Complete the following: _________ card',
      answers: ['Credit', 'Debit', 'Gift', 'Birthday', 'ID'],
      score: [29, 24, 21, 16, 10],
      multiply: 5,
    },
  ]

  const [scores, setScores] = useState([
    {
      team: 1,
      score: 0,
    },
    {
      team: 2,
      score: 0,
    },
    {
      team: 3,
      score: 0,
    },
  ])
  const [currQuestion, setCurrQuestion] = useState(0)
  const removehide = (id) => {
    if (document.getElementById(id)) {
      document.getElementById(id).removeAttribute('class')
    }
  }
  const nexthandler = () => {
    if (currQuestion < questions.length - 1) {
      setCurrQuestion(currQuestion + 1)
      for (let i = 0; i < 5; i++) {
        if (document.getElementById('answer' + i)) {
          let div = document.getElementById('answer' + i).childNodes
          div.forEach((span) => {
            span.classList.add('hide')
          })
        }
      }
    } else {
      return
    }
  }
  const revealAnswer = (id) => {
    for (let i = 0; i < 5; i++) {
      if (document.getElementById(id + i)) {
        let div = document.getElementById(id + i).childNodes
        div.forEach((span) => {
          span.classList.remove('hide')
        })
      }
    }
  }
  const submitHandler = (e) => {
    e.preventDefault()
    let array = document.getElementById('selectedTeam').value
    let tmp = scores
    let currentPoint = document.getElementById('selectedteamScore').value
    let multiplied = document.getElementById('multiplierSelect').value
    tmp[array - 1].score = currentPoint * multiplied
    setScores(tmp)
    setShow(false)
  }

  return (
    <Container className="my-4 containerClass">
      <h1 className="text-center">TEAM#4 FEUD</h1>
      <Card className="mx-4 my-4 text-center border-success">
        <Card.Title className="mx-4 my-2">
          Question #{currQuestion + 1}/{questions.length}
          <br></br>
          {questions[currQuestion].question}
        </Card.Title>
        <span>
          {' '}
          Scores Multiplied by:&nbsp;
          <b>{questions[currQuestion].multiply}</b>
        </span>
      </Card>
      <Card className="mx-4 my-4 text-center border-info">
        <Card.Title className="mt-2">Answers</Card.Title>
        <Card.Body className="mx-4">
          {questions[currQuestion].answers.map((answer, index) => {
            return (
              <Card
                onClick={() => removehide(answer.split(/[, ]+/).pop())}
                className="flex-row align-items-center justify-content-center mb-2 border-secondary minh"
              >
                <div className="p-2" id={'answer' + index}>
                  <span className="hide" id={answer.split(/[, ]+/).pop()}>
                    {answer}&nbsp; Worth: {questions[currQuestion].score[index]}
                    &nbsp;points
                  </span>
                </div>
              </Card>
            )
          })}
          <Button
            className="my-2 w-100"
            variant="secondary"
            onClick={() => revealAnswer('answer')}
          >
            Reveal Answers
          </Button>
        </Card.Body>
      </Card>
      {currQuestion < questions.length && (
        <Stack
          direction="horizontal"
          className="align-items-center justify-content-between w-100"
        >
          <Button
            variant="outline-secondary"
            onClick={handleShow}
            className="AbsLeft"
          >
            Award
          </Button>
          {currQuestion < questions.length - 1 && (
            <Button onClick={nexthandler} className="AbsRight">
              Next
            </Button>
          )}
        </Stack>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Award points</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Select
            aria-label="Default select example"
            className="my-2"
            id="selectedTeam"
          >
            <option>Select Team</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Score</Form.Label>
              <Form.Control
                id="selectedteamScore"
                type="number"
                placeholder="Enter score"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Multiplier</Form.Label>
              <Form.Control
                type="number"
                placeholder="x factor"
                id="multiplierSelect"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Update
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <footer className="d-flex justify-content-between positionFooter">
        {scores.map((team) => {
          return (
            <div className="mx-4 my-2">
              Team: {team.team} Score: {team.score}
            </div>
          )
        })}
      </footer>
    </Container>
  )
}
export default App
