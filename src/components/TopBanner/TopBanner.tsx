import "./TopBannerArrow.scss";
import "./TopBanner.scss";
import ExitKey from "../ExitKey/ExitKey";

function TopBanner() {
  return (
    <div className="banner-topalert-container">
      <img src="assets/img/TopBannerImg.png" alt="Banner"></img>
      <div className="banner-topalert-text">
        <div>
          <div>
            Black Friday
            <div className="banner-topalert-comma">,</div>
          </div>
          <div className="banner-topalert-hiddentext-tablet">24-27 Nov</div>
        </div>
        <div className="banner-topalert-separator"></div>
        <div className="banner-topalert-goldcolor">10%OFF</div>
        <div className="banner-topalert-separator"></div>
        <div className="banner-topalert-hiddentext-mobile">
          Use code
          <div className="banner-topalert-goldcolor">10FRIDAY</div>
          <div className="banner-topalert-hiddentext-tablet"> at checkout</div>
        </div>
      </div>
      <div>
        <button className="banner-topalert-button">
          <div>Shop now</div>
        </button>
        <ExitKey />
        <div className="banner-topalert-mobailexitkey">
          <div className="banner-topalert-mobailexitkey-top"></div>
          <div className="banner-topalert-mobailexitkey-bottom"></div>
        </div>
      </div>
    </div>
  );
}

export default TopBanner;
