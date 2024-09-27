import { useTranslation } from "react-i18next";

const Email = () => {
  const { t } = useTranslation();

  return (
    <div className="about">
      <h2 id="about">{t("aboutTitle1")} <span>{t("aboutTitle2")}</span></h2>
      <form action="post">
        <input type="email" placeholder={t("emailPlaceholder1")} required />
        <input type="tel" placeholder={t("emailPlaceholder2")} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />

        <input type="submit" value={t("contact")} />
      </form>

      <div className="contacts">
        <span>{t("contact")}</span>
        <div className="smm">
          <a href="https://www.facebook.com/profile.php?id=61562051955953"><img src="f.svg" alt="fbook" /></a>
          <a href="https://www.instagram.com/goroll.partners?igsh=MTc5aTFvd2ZrM3lmcw=="><img src="in.svg" alt="insta" /></a>
          <a href="https://t.me/gorollpartners"><img src="tg.svg" alt="telegram" /></a>
        </div>
      </div>
    </div>
  )
}

export default Email;
