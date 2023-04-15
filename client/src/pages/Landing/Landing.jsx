import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Wrapper from "./Wrapper.styled";
const Landing = () => (
  <Wrapper>
    <Navbar />
    <div className="container page">
      <div className="info">
        <h1>
          Job <span>Tracking</span> App
        </h1>
        <p>
          Glossier yuccie tumeric live-edge squid health goth marfa cardigan
          hoodie. 8-bit disrupt same man bun. Jean shorts dreamcatcher hot
          chicken YOLO quinoa plaid gluten-free sustainable vexillologist. XOXO
          lyft vexillologist, jianbing fingerstache raclette meggings cloud
          bread viral disrupt williamsburg pabst kickstarter fanny pack air
          plant. 8-bit try-hard whatever cardigan.
        </p>
        <Link to="/register">Login/ Register</Link>
      </div>
      <div className="main-img">
        <img
          src="https://img.freepik.com/free-vector/man-having-online-job-interview_52683-43379.jpg?w=740&t=st=1681139952~exp=1681140552~hmac=0aa2cc6f104c1623a4fde97774d7abfdcd5e844b64ae90411d008080855affd0"
          alt=""
          className="img"
        />
      </div>
    </div>
  </Wrapper>
);

export default Landing;
