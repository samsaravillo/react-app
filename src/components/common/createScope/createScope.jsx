import React from "react";
import { Card, CardBody, Form, FormGroup, Input } from "reactstrap";

const createScope = ({ model }) => {
  return (
    <div>
      <Card>
        Form
        {model.map((data) => (
          <div className="card" key={data.optionId}>
            <div className="card-body">
              <h5 className="card-title">{data.optionName}</h5>
            </div>
          </div>
        ))}
        <CardBody>
          <Form>
            <FormGroup>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
              />
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default createScope;
