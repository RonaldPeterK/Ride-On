import SpanLine from "../../Span/spanLine"
import { Flex, Typography } from 'antd';


function ContactDetials() {
  return (
    <div className="text-white">
        <h4>CONTACT DETAILS</h4>
        <SpanLine/>
        <Flex className="align-items-center gap-4 mt-4"> 
            <i className="fa-xl fa-solid fa-location-dot"/>
            <Flex >
                <Typography.Text className="text-white">
                700 5th Avenue, New York City, Uinted States
                </Typography.Text>
            </Flex>
        </Flex>
        <Flex className="align-items-center gap-4 mt-4"> 
            <i className="fa-xl fa-solid fa-phone"></i>
            <Flex className="flex-column">
                <Typography.Text className="text-white">
                1800-1111-2222
                </Typography.Text>
                <Typography.Text className="text-secondary">
                Mon - Fri, 9.00am until 6.30pm
                </Typography.Text>
            </Flex>
        </Flex>
        <Flex className="align-items-center gap-4 mt-4"> 
            <i className="fa-xl fa-solid fa-envelope"></i>
            <Flex className="flex-column">
                <Typography.Text className="text-white">
                booking@example.com
                </Typography.Text>
                <Typography.Text className="text-secondary">
                We reply withing 24 hrs
                </Typography.Text>
            </Flex>
        </Flex>
    </div>
  )
}
export default ContactDetials