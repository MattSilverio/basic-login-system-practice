import { Button, Col, Form, Input, Row , message} from "antd"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/useAuth"


export const Login = () =>{
    const auth = useAuth();
    const navigate = useNavigate()

    async function onFinish(values: {email: string, password: string}){
        try {
            await auth.authenticate(values.email, values.password)

            navigate('/profile')
        } catch (error) {
            message.error('Email ou senha inválida')
        }
    }
   

    return (
        <Row
            justify="center"
            align="middle"
            style={{
                height: "100vh"
            }}
        >
            <Col span={12}>
                <Form
                    name="basic"
                    labelCol={{span: 8}}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Email"
                        name="email"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item wrapperCol={{offset: 8, span: 16}}>
                        <Button type="primary" htmlType="submit">
                            Entrar
                        </Button>
                    </Form.Item>
                </Form>
            </Col>

        </Row>
    )
}