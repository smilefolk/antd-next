import App from '../components/app.js'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <App>
        <Form onSubmit={this.handleSubmit} style={{ 'max-width': '300px', 'margin-left': '40%', 'margin-top': '10%' }}  className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}  placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}  type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a className="login-form-forgot" href="">Forgot password</a>
            <Button href='/profile' style={{ width: '100%' }}type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="/register">register now!</a>
          </FormItem>
        </Form>
      </App>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
export default WrappedNormalLoginForm