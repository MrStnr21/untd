import { FC } from "react";

import stylesFeedbackForm from "./feedback-form.module.css";

import { InputForm } from "../../ui/input-form/input-form";
import { SocialMedia } from "../../ui/social-media/social-media";

import telegram from "../../../images/social-media/telegram-icon.svg";
import youtube from "../../../images/social-media/youtube-icon.svg";
import vk from "../../../images/social-media/vk-icon.svg";
import pointer from "../../../images/social-media/point.svg";
import phone from "../../../images/social-media/phone.svg";
import mail from "../../../images/social-media/mail.svg";

import { Title } from "../../ui/title/title";
import { Button } from "../../ui/button/button";
import { Contact } from "../../ui/contact/contact";

import { address, phoneNum, mailAddress } from "../../utils/data";

const FeedbackForm: FC = (): JSX.Element => {
  return (
    <div className={stylesFeedbackForm.formContainer}>
      <Title text="ответим на любой вопрос" />
      <div className={stylesFeedbackForm.userInfoContainer}>
        <InputForm name={"Name"} id={"Name"} type="text" placeholder="ИМЯ" />
        <InputForm
          name={"phoneNum"}
          id={"phoneNum"}
          type="number"
          placeholder="ТЕЛЕФОН"
        />
      </div>
      <div className={stylesFeedbackForm.consultContainer}>
        <textarea
          className={stylesFeedbackForm.questionArea}
          name="ask"
          id="ask"
          placeholder="Вопрос по дизайну, тюнингу и др."
        />
        <div className={stylesFeedbackForm.socialMediaContainer}>
          <SocialMedia image={telegram} alt="telegram" />
          <SocialMedia image={youtube} alt="youtube" />
          <SocialMedia image={vk} alt="vk" />
        </div>
      </div>
      <div className={stylesFeedbackForm.contactsContainer}>
        <Button text="отправить" type="standart" />
        <div className={stylesFeedbackForm.contacts}>
          <Contact image={pointer} alt={"pointer"} text={address} />
          <div className={stylesFeedbackForm.phoneMail}>
            <Contact image={phone} alt={"phone"} text={phoneNum} />
            <Contact image={mail} alt={"mail"} text={mailAddress} />
          </div>
        </div>
      </div>
      <div className={stylesFeedbackForm.sendContainer}></div>
    </div>
  );
};

export { FeedbackForm };
