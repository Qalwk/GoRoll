

const Partners = () => {
  return (
    <div className="partners">
      <h2 id="partners">Для наших <span>партнеров</span></h2>

      <div className="partners__cards">
        <div className="card card_1">
          <h3 className="card__title">Продвигай GoRoll</h3>
          <ul className="card__features">
            <li>По высоким ставкам до 350 евро</li>
            <li>По CPA/Revshare/Hybrid</li>
          </ul>

          <div className="card__results">
            <h4>Формальные этапы перед стартом</h4>
            <p>Мы заключаем договор о партнерстве, назначаем вам персонального менеджера и помогаем на каждом этапе работы.</p>
          </div>
        </div>
        <div className="card card_2">
          <h3 className="card__title">Промо для стримеров</h3>
          <ul className="card__features">
            <li>Креативы любого формата</li>
            <li>Лучшие специалисты по дизайну</li>
          </ul>

          <div className="card__results">
            <h4>Разработаем Промо-Материалы</h4>
            <p>Наши дизайнеры реализуют любую вашу идею, а персональный менеджер всегда держит вас в курсе процесса. Получите уникальные креативы, которые выделят вас на фоне других и привлекут аудиторию.</p>
          </div>
        </div>
        <div className="card card_3">
          <h3 className="card__title">Продуманные ROI и LTV</h3>
          <ul className="card__features">
            <li>Конвертящие ленды</li>
            <li>Проработанный ретеншен</li>
          </ul>

          <div className="card__results">
            <h4>Запускайте и Зарабатывайте!</h4>
            <p>За вами остается только согласовать источник трафика, и вы сможете начать. Мы гарантируем оплату тестовой кампании, чтобы вы могли начать без рисков. Начните свой путь к успеху с нами.</p>
          </div>
        </div>
        <div className="card card_4">
          <h3 className="card__title">Прозрачная статистика</h3>
          <ul className="card__features">
            <li>Детальная статистика</li>
            <li>Отсутствие скрытых комиссий</li>
          </ul>

          <div className="card__results">
            <h4>Всё под рукой</h4>
            <p>Получите доступ к детальной статистике ваших кампаний и работайте без скрытых комиссий. Помогаем принимать обоснованные решения и повышать эффективность ваших маркетинговых усилий.</p>
          </div>
        </div>
      </div>

      <a href="#" className="promo__btn partners__btn">Стать партнером</a>
    </div>
  )
}

export default Partners
