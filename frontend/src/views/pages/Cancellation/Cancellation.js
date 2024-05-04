import styles from "./Cancellation.module.css";
import { useEffect, useRef } from "react";
import { Card, Form, FormGroup, Input, Button, Label } from "reactstrap";
import { toast } from "react-toastify";

const Cancellation = () => {
  const mainRef = useRef();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainRef.current.scrollTop = 0;
    toast.info("Cancel your mess diets here.")
  }, []);

  return (
    <>
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
            <div className={styles.container}>Cancellation form</div>
            <div className={styles.container1}>
              <Card className="shadow">
                <Form className={styles.form}>
                  <FormGroup>
                    <Input placeholder="Enter date" type="date" />
                  </FormGroup>
                  <FormGroup>
                    <div className="mb-3">
                      <small className="text-uppercase font-weight-bold">
                        Type of Meal
                      </small>
                    </div>
                    <div className="custom-control custom-radio mb-3">
                      <Input
                        className="custom-control-input"
                        id="customRadio1"
                        name="custom-radio-1"
                        type="radio"
                      />
                      <Label
                        className="custom-control-label"
                        htmlFor="customRadio1"
                      >
                        <span>Breakfast</span>
                      </Label>
                    </div>
                    <div className="custom-control custom-radio mb-3">
                      <Input
                        className="custom-control-input"
                        id="customRadio2"
                        name="custom-radio-1"
                        type="radio"
                      />
                      <Label
                        className="custom-control-label"
                        htmlFor="customRadio2"
                      >
                        <span>Lunch</span>
                      </Label>
                    </div>
                    <div className="custom-control custom-radio mb-3">
                      <Input
                        className="custom-control-input"
                        id="customRadio3"
                        name="custom-radio-1"
                        type="radio"
                      />
                      <Label
                        className="custom-control-label"
                        htmlFor="customRadio3"
                      >
                        <span>Dinner</span>
                      </Label>
                    </div>
                  </FormGroup>
                  <Button color="primary" className={`btn-1`}>
                    Submit
                  </Button>
                </Form>
              </Card>
            </div>
          </section>
        </main>
      </section>
    </>
  );
};

export default Cancellation;
