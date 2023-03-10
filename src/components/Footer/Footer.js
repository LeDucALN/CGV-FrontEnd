import "./footer.css";
import _4xd from "../../img/1.png";
import imax from "../../img/6.png";
import sturium from "../../img/8.png";
import goldclass from "../../img/7.png";
import lamour from "../../img/9.png";
import sweetbox from "../../img/5.png";
import premium from "../../img/10.png";
import screenX from "../../img/11.png";
import cineF from "../../img/3.png";
import cineL from "../../img/4.png";
import cineS from "../../img/2.png";
import suit from "../../img/12.png";
import cgvFoot from "../../img/cgv-foot.png";

function Footer() {
  return (
    <div id="footer-container">
      <div className="footer-brand-slide">
        <div className="footer-brand-cover">
          <li>
            <a href="https://www.facebook.com/">
              <img src={_4xd} alt="_4xd" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/">
              <img src={imax} alt="imax" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/">
              <img src={sturium} alt="starium" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/">
              <img src={goldclass} alt="goldclass" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/">
              <img src={lamour} alt="lamour" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/">
              <img src={sweetbox} alt="sweetbox" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/">
              <img src={cineS} alt="cineS" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/">
              <img src={premium} alt="premium" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/">
              <img src={screenX} alt="screenX" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/">
              <img src={cineF} alt="cineF" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/">
              <img src={cineL} alt="cineL" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/">
              <img
                style={{ width: "100%", margin: "0 -70px 0 -70px" }}
                src={suit}
                alt="suit"
              />
            </a>
          </li>
        </div>
      </div>
      <div className="footer-cgv-policy">
        <div className="footer-container">
          <div className="footer-title footer-item footer-item2">
            <h6>CGV Vi???t Nam</h6>
            <li><a href="https://www.facebook.com/">Gi???i Thi???u</a></li>


            <li><a href="https://www.cgv.vn/default/cgv-online/">Ti???n ??ch Online</a> </li>
            <li><a href="https://www.facebook.com/">Th??? Qu?? T???ng</a></li>
            <li><a href="https://www.facebook.com/">Tuy???n D???ng</a></li>
            <li><a href="https://www.facebook.com/">Li??n H??? Qu???ng C??o</a></li>
          </div>
          <div className="footer-title footer-item footer-item2">

            <h6>??i???u Kho???n S??? D???ng</h6>
            <li><a href="https://www.facebook.com/">??i???u Kho???n Chung</a></li>
            <li><a href="https://www.facebook.com/">??i???u Kho???n Giao D???ch</a></li>
            <li><a href="https://www.facebook.com/">Ch??nh S??ch Thanh To??n</a></li>
            <li><a href="https://www.facebook.com/">Ch??nh S??ch B???o M???t</a></li>
            <li><a href="https://www.facebook.com/">C??u H???i Th?????ng G???p</a></li>
          </div>
          <div className="footer-title footer-item cgv-follow-us">
            <h6>K???t n???i v???i ch??ng t??i</h6>
            <a href="https://www.facebook.com/">
              <img
                style={{ width: "120%" }}
                src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg-social-footer-40.png"
                alt=""
              />
            </a>
            <a href="Vhttps://www.facebook.com/">
              <img
                src="https://www.cgv.vn/skin/frontend/cgv/default/images/cong-thuong.PNG"
                alt=""
              />
            </a>
          </div>
          <div className="footer-title customer-cgv">
            <h6>Ch??m s??c kh??ch h??ng</h6>
            <li>Hotline: 1900 6017</li>
            <li>
              Gi??? l??m vi???c: 8:00 - 22:00 <br /> (T???t c??? c??c ng??y bao g???m c??? ng??y L??? T???t)
            </li>
            <li>Email h??? tr???: hoidap@cgv.vn</li>
          </div>
        </div>
      </div>
      <div className="footer-cgv-address">
        <div className="cgv-cover">
          <div className="cgv-foot">
            <img src={cgvFoot} alt="cgvFoot" />
          </div>
          <div className="cgv-end">
            <h6>C??NG TY TNHH CJ CGV VIETNAM</h6>
            <p>
              Gi???y CN??KDN: 0303675393, ????ng k?? l???n ?????u ng??y 31/7/2008, ????ng k??
              thay ?????i l???n th??? 5 ng??y 14/10/2015, c???p b???i
            </p>
            <p>S??? KH??T th??nh ph??? H??? Ch?? Minh.</p>
            <p>
              ?????a Ch???: T???ng 2, Rivera Park Saigon - S??? 7/28 Th??nh Th??i, P.14,
              Q.10, TPHCM.
            </p>
            <p>Hotline: 1900 6017</p>
            <p>COPYRIGHT 2017 CJ CGV. All RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>

      <div className="footer-brick"></div>
    </div>
  );
}

export default Footer;
