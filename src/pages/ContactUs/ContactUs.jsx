import Swal from 'sweetalert2';
import Container from '../../components/Container/Container';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
const ContactUs = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const handleContact = event => {

        event.preventDefault()
        const form = event.target;
        const email = form.email.value
        const name = form.name.value;
        const contactNumber = form.contactNumber.value;
        const opinion = form.opinion.value;

        const employeeData = {
            name, contactNumber, opinion, image: user.photoURL,
            email 
        }
        console.log(employeeData)
        try {

            axiosSecure.post('/contact', employeeData)
                .then(res => {
                    if (res.data.insertedId) {
                        console.log('user added to the database', res.data)
                    }
                })
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Data send successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }
        catch (err) {
            console.log(err)
        }

    }

    return (
        <div >
            <Container>
                <div className=" h-[84vh]">
                    <SectionTitle
                        heading={"Contact Us"}
                        subHeading={"send your details"}
                    ></SectionTitle>

                    <div>
                        <form onSubmit={handleContact} className='max-w-5xl mx-auto' >
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text"> Name*</span>
                                </label>
                                <input
                                defaultValue={user?.displayName}
                                    type="text"
                                    name="name"
                                    placeholder=" Name"
                                    required
                                    className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text"> Email*</span>
                                </label>
                                <input
                                defaultValue={user?.email}
                                    type="text"
                                    name="email"
                                    placeholder=" email"
                                    required
                                    className="input input-bordered w-full" />
                            </div>
                            <div className="flex gap-6">
                                {/* salary */}
                                <div className="form-control w-full my-6">
                                    <label className="label">
                                        <span className="label-text">Contact Number*</span>
                                    </label>
                                    <input
                                        type="number"
                                        name="contactNumber"
                                        placeholder="Contact number"
                                        className="input input-bordered w-full" />
                                </div>

                            </div>

                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text"> Your Opinion *</span>
                                </label>
                                <input
                                    type="text"
                                    name="opinion"
                                    placeholder=" Your Opinion."
                                    required
                                    className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full my-7">

                            </div>



                            <div className=" text-center ">
                                <button type="submit" className="px-2 py-1 font-bold bg-blue-700 text-white hover:bg-blue-500 md:px-10 rounded-lg">
                                    Confirm
                                </button>
                            </div>


                        </form>
                    </div>


                </div>
            </Container>
        </div>
    );
};

export default ContactUs;