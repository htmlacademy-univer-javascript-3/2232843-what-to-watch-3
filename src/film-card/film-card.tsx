export type TFilmCard = {
  previewSrc: string,
  title: string,
  link: string
}

type Props = TFilmCard;

export function FilmCard(props: Props) {
  const {previewSrc, title, link} = props;
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={previewSrc} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href={link}>{title}</a>
      </h3>
    </article>
  );
}
