import ExitKey from "../ExitKey/ExitKey";
import "./BottomBanner.scss";

function BottomBanner() {
  return (
    <div className="banner-bottomalert-container">
      <div className="banner-bottomalert-exitkey">
        <ExitKey />
      </div>
      <div className="banner-bottomalert-text">
        <div className="banner-bottomalert-texttop">Black Friday</div>
        <div className="banner-bottomalert-goldcolor">10%OFF</div>
        <div className="banner-bottomalert-textcontainer">
          <div>Use code</div>
          <div className="banner-bottomalert-textgoldcolor">10FRIDAY</div>
          <div className="banner-bottomalert-textbottom">at checkout</div>
        </div>
        <button className="banner-bottomalert-button">
          <div>
            Shop now
            <div className="banner-bottomalert-hidetext">through Monday</div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default BottomBanner;
