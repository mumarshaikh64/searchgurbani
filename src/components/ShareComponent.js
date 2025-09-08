// import '../assets/css/share.css'
import React from 'react';
/* import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  EmailIcon
} from 'react-share'; */
/* import FacebookIcon from '../assets/img/FacebookIcon.svg';
import TwitterIcon from '../assets/img/TwitterIcon.svg';
import TelegramIcon from '../assets/img/TelegramIcom.svg'; */
const ShareButtons = ({ url, title }) => {
    const handleShareClick = (shareUrl) => {
        window.open(shareUrl, '_blank', 'noopener,noreferrer');
      };
  return (
    <div className="share-buttons">
{/*  <img
        src={FacebookIcon}
        alt="Share on Facebook"
        onClick={() => handleShareClick(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`)}
        className="share-icon"
      />
      <img
        src={TwitterIcon}
        alt="Share on Twitter"
        onClick={() => handleShareClick(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`)}
        className="share-icon"
      />
      <img
        src={TelegramIcon}
        alt="Share on Telegram"
        onClick={() => handleShareClick(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`)}
        className="share-icon"
      /> */}
      {/* <img
        src={whatsappIcon}
        alt="Share on WhatsApp"
        onClick={() => handleShareClick(`https://wa.me/?text=${encodeURIComponent(title)}%20${encodeURIComponent(url)}`)}
        className="share-icon"
      />
      <img
        src={emailIcon}
        alt="Share via Email"
        onClick={() => handleShareClick(`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`)}
        className="share-icon"
      /> */}
     {/*  <img
        src={smsIcon}
        alt="Share via SMS"
        onClick={() => handleShareClick(`sms:?&body=${encodeURIComponent(title)}%20${encodeURIComponent(url)}`)}
        className="share-icon"
      /> */}
      {/* <FacebookShareButton url={url} quote={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <TelegramShareButton url={url} title={title}>
        <TelegramIcon size={32} round />
      </TelegramShareButton>
      <WhatsappShareButton url={url} title={title} separator=":: ">
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <EmailShareButton url={url} subject={title} body={`Check out this link: ${url}`}>
        <EmailIcon size={32} round />
      </EmailShareButton> */}
    </div>
  );
};

export default ShareButtons;
