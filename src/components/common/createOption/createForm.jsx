import React from "react";
import {
  Card,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

const CreateOption = ({ model }) => {
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

export default CreateOption;
