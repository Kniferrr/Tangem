import "./TopBannerArrow.scss";
import "./TopBanner.scss";

function TopBanner() {
  return (
    <div className="banner-alert-container">
      <img src="/img/display21.png"></img>
      <div className="banner-alert-text">
        <div>
          <div>
            Black Friday
            <div className="banner-alert-comma">,</div>
          </div>

          <div className="banner-alert-hiddentext-tablet">24-27 Nov</div>
        </div>
        <div className="banner-alert-separator"></div>
        <div className="banner-alert-goldcolor">10%OFF</div>
        <div className="banner-alert-separator"></div>
        <div className="banner-alert-hiddentext-mobile">
          Use code
          <div className="banner-alert-goldcolor">10FRIDAY</div>
          <div className="banner-alert-hiddentext-tablet"> at checkout</div>
        </div>
      </div>
      <div>
        <button className="banner-alert-button">
          <div>Shop now</div>
        </button>
        <div className="banner-alert-exitkey"></div>
        <div className="banner-alert-mobailexitkey">
          <div className="banner-alert-mobailexitkey-top"></div>
          <div className="banner-alert-mobailexitkey-bottom"></div>
        </div>
      </div>
    </div>
  );
}

export default TopBanner;
