import { Card, CardBody, Container, Row, Col } from "reactstrap";
import CancellationForm from "components/Forms/CancellationForm/CancellationForm";
import { checkStudAuthLoader } from "auth";
import { cancelMeal } from "api/student";
import { toast } from "sonner";
import { redirect } from "react-router-dom";

const Extras = () => {
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

        <section className="section pb-0 section-components">
          <Container className="pt-lg-7">
            <Row className="justify-content-center">
              <Col lg="5">
                <Card className="bg-secondary shadow border-0">
                  {/* Extras Form from component */}
                  <CardBody className="px-lg-5 py-lg-5">
                    <CancellationForm />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </section>
    </>
  );
};

export default Extras;


export async function cancelActions({ request: req }) {
  checkStudAuthLoader();
  console.log("cancel form");
  const formData = await req.formData();
  let cancelData = Object.fromEntries(formData.entries());
  const [yyyy, mm, dd] = cancelData.date.split('-');
  cancelData.date = dd+"-"+mm+"-"+yyyy;
  const data = await cancelMeal(cancelData);
  console.log(data);
  toast.success("Successfully cancelled meal.");
  return redirect("/mess-bill")
}