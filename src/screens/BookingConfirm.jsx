import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

const ThankYouPage = ({ title, subtitle, message, buttonLabel, buttonLink }) => {
    return (
        <Result
            status="success"
            title={title}
            subTitle={subtitle}
            // icon={<img src="/images/thank-you.png" alt="Thank You" />}
            extra={[
                <p key="message">{message}</p>,
                <Button key="back" type="primary">
                    <Link to={buttonLink}>{buttonLabel}</Link>
                </Button>,
            ]}
        />
    );
};

export default ThankYouPage;