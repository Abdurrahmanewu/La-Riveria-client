import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const UserRiview = ({ singlePackageData }) => {
  const { user } = useContext(AuthContext);
  const { _id, description, img, price, title } = singlePackageData;
  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "Unregistered";
    const rating = form.rating.value;
    const message = form.message.value;
    console.log(name, email, rating, message);
    const order = {
      packageName: title,
      guestName: name,
      guestEmail: email,
      rating: rating,
      message: message,
      date: new Date(),
    };
    fetch("https://la-riveria-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Review placed successfully");
          form.reset();
        }
      })
      .catch((e) => console.error(e));
  };

  return (
    <div>
      <form onSubmit={handleReview}>
        <h2 className="text-4xl mb-5">Pease add a review for {title}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            className="input input-ghost w-full  input-bordered"
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            className="input input-ghost w-full  input-bordered"
          />
          <input
            name="rating"
            type="text"
            placeholder="Ratin out of 5"
            className="input input-ghost w-full  input-bordered"
            required
          />
          <input
            name="email"
            type="text"
            placeholder="Your email"
            defaultValue={user?.email}
            className="input input-ghost w-full  input-bordered"
            readOnly
          />
        </div>
        <textarea
          name="message"
          className="textarea textarea-bordered h-24 w-full mt-5"
          placeholder="Your Message"
          required
        ></textarea>
        {/* <button className="btn btn-warning">Submit</button> */}

        <input className="btn mt-5" type="submit" value="Add review" />
      </form>
    </div>
  );
};

export default UserRiview;
