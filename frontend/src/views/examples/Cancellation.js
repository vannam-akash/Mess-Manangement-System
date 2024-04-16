import SimpleFooter from "components/Footers/MainFooter";
import DemoNavbar from "components/Navbars/MainNavbar";
import styles from "./Cancellation.css";
import { useEffect, useRef } from "react";
import {
 Card,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";

const Cancellation = () => {
  const mainRef = useRef();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainRef.current.scrollTop = 0;
  }, []);

  return (
    <>
      <DemoNavbar />
      <section className="section section-shaped section-lg">
        <div className="shape shape-style-1 bg-gradient-primary">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <main ref={mainRef}>
          <section className="section section-shaped section-lg">
            
            
            <div class="heading">
              Cancellation Form
            </div>
            <div class="container1">
            <Card className="shadow">
            
                  <Form>
                    <FormGroup>Enter Date:
                      <Input  placeholder="Enter date" type="date"/>
                    </FormGroup>
                    <FormGroup>
                    <div className="mb-3">
            <small className="text-uppercase font-weight-bold">Choose Type of Meal</small>
          </div>
          <div className="custom-control custom-radio mb-3">
            <input
              className="custom-control-input"
              id="customRadio1"
              name="custom-radio-1"
              type="radio"
            />
            <label className="custom-control-label" htmlFor="customRadio1">
              <span>Breakfast</span>
            </label>
          </div>
          <div className="custom-control custom-radio mb-3">
            <input
              className="custom-control-input"
              id="customRadio2"
              name="custom-radio-1"
              type="radio"
            />
            <label className="custom-control-label" htmlFor="customRadio2">
              <span>Lunch</span>
            </label>
          </div>
          <div className="custom-control custom-radio mb-3">
            <input
              className="custom-control-input"
              id="customRadio3"
              name="custom-radio-1"
              type="radio"
            />
            <label className="custom-control-label" htmlFor="customRadio3">
              <span>Dinner</span>
            </label>
          </div>
                    </FormGroup>
                    <Button color="info" block>
                      Submit
                    </Button>
                  </Form>
              
          </Card>

          </div>
          </section>
        </main>
      </section>
      {/* <SimpleFooter /> */}
    </>
  );
};

export default Cancellation;