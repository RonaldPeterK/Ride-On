import ServicesUi from "./servicesUi";
import Service from './../db/services.json'
function Services() {
  return (
    <div className="container p-5">
        <div className="row py-5">
            
            {
                Service.map(service => {
                    return (
                        <div className="col-lg-6 my-3" key={service._id}>
                            <ServicesUi
                            name = {service.title}
                             detail = {service.describtion}
                            />
                        </div>
                    );
                }
            )
            }
        </div>
    </div>
  )
}
export default Services;