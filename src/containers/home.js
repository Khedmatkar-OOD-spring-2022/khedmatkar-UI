import React from "react";
import { Row,Card,CardGroup } from "react-bootstrap";
import MainNavigation from "../common/navigation";
import Welcome from "../components/welcome";
class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Welcome />
        </Row>
        <Row className="d-flex justify-content-center">
          <CardGroup style={{width:"70%",justifyContent:'space-between'}} dir="rtl">
            <Card style={{width:"20%"}}>
              <Card.Img variant="top" src="https://thecleaningcrew.ie/wp-content/uploads/2020/09/cleaning-crew-cleaners.png" style={{width:"50%"}} />
              <Card.Body>
                <Card.Title>{'خدمات نظافت و بهداشت'}</Card.Title>
                <Card.Text>
                  {'خدمات نظافتی در تهران با شرکت خدماتی ما نظافت محیط یکی از اصول اساسی در جوامع امروزی شناخته می شود. بهداشت و نظافت مخصوصا در محیط منزل از ارزش بالایی برخوردار است و به همین دلیل بسیاری از افراد در تلاش برای تمیز کردن محیط زندگی خود هستند. '}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd_v2j-kOBKR54WZzxuGBMM__hgRLJK20v-w&usqp=CAU" style={{width:"50%"}}/>
              <Card.Body>
                <Card.Title>{'خدمات اسباب کشی و باربری'} </Card.Title>
                <Card.Text>
                 {'ارائه بهترین خدمات اسباب کشی در تمام مناطق با قیمت مناسب توسط نیروی مجرب و کارآزموده'}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="https://previews.123rf.com/images/vector2011/vector20111704/vector2011170400034/75830838-friendly-technician-installer-of-solar-panels-he-wears-a-belt-with-tools.jpg" style={{width:"50%"}}/>
              <Card.Body>
                <Card.Title> {'خدمات فنی'}</Card.Title>
                <Card.Text>
                  {' در همین صفحه می توانید بسیاری از خدماتی که متخصصان ما به شما ارائه می کنند را ببینید، درخواست متخصص کنید و کارتان را با بهترین کیفیت انجام دهید. '}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </Row>
      </React.Fragment>
    );
  }
}

export default Home;
